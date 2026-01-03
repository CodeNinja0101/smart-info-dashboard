import { useState } from "react";
import { getCountryByName } from "../api/countryApi";

const Dashboard = () => {
  const [country, setCountry] = useState(null);

  const searchCountry = async () => {
    const data = await getCountryByName("India");
    setCountry(data);
  };

  return (
    <div>
      <button onClick={searchCountry}>Load Country</button>

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
