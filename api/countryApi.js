import axios from "axios";

const BASE_URL = "https://restcountries.com/v3.1";

export const getCountryByName = async (name) => {
  const response = await axios.get(
    `${BASE_URL}/name/${name}?fullText=true`
  );
  return response.data[0];
};
