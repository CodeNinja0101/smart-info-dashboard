import axios from "axios";

export const getTimeByCoordinates = async (lat, lon) => {
  const response = await axios.get(
    `https://timeapi.io/api/Time/current/coordinate?latitude=${lat}&longitude=${lon}`
  );
  return response.data;
};
