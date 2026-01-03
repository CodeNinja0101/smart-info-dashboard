import { useState } from "react";
import { getCountryByName } from "../api/countryApi";
import SearchBar from "../components/SearchBar";

const Dashboard = () => {
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchCountry = async (name) => {
    setLoading(true);
    setError("");
    setCountry(null);

    try {
      const data = await getCountryByName(name);
      setCountry(data);
    } catch (err) {
      setError("Country not found");
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
    </div>
  );
};

export default Dashboard;
