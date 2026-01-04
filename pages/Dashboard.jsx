import { useState } from "react";
import { getCountryByName } from "../api/countryApi";
import SearchBar from "../components/SearchBar";
import { getTimeByCoordinates } from "../api/timeApi";
import TimeCard from "../components/TimeCard";

const Dashboard = () => {
  const [country, setCountry] = useState(null);
  const [timeData, setTimeData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchCountry = async (name) => {
    setLoading(true);
    setError("");
    setCountry(null);
    setTimeData(null);

    try {
      const countryData = await getCountryByName(name);
      setCountry(countryData);

      const coords = countryData.capitalInfo?.latlng;
      if (coords) {
        const [lat, lon] = coords;
        const timeResponse = await getTimeByCoordinates(lat, lon);
        setTimeData(timeResponse);
      }
    } catch (err) {
      setError("Failed to load country or time data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Smart Info Dashboard</h1>

      <SearchBar onSearch={searchCountry} />

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {country && (
        <div>
          <h2>{country.name.common}</h2>
          <p>Capital: {country.capital?.[0]}</p>
          <p>Population: {country.population}</p>
        </div>
      )}

      {timeData && <TimeCard timeData={timeData} />}
    </div>
  );
};

export default Dashboard;
