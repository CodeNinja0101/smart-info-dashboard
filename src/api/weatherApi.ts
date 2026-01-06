// import axios from "axios";

// const API_KEY = import.meta.env.VITE_WEATHER_API_KEY as string;
// console.log("WEATHER KEY:", import.meta.env.VITE_WEATHER_API_KEY);
// if (!API_KEY) {
//   console.error("❌ VITE_WEATHER_API_KEY is missing");
// }

// export interface WeatherResponse {
//   main: {
//     temp: number;
//     humidity: number;
//   };
//   weather: {
//     description: string;
//     icon: string;
//   }[];
//   wind: {
//     speed: number;
//   };
// }

// export const getWeatherByCoordinates = async (
//   lat: number,
//   lon: number
// ): Promise<WeatherResponse> => {
//   const response = await axios.get<WeatherResponse>(
//     "https://api.openweathermap.org/data/2.5/weather",
//     {
//       params: {
//         lat,
//         lon,
//         units: "metric",
//         appid: API_KEY,
//       },
//     }
//   );

//   return response.data;
// };




import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY as string;

export interface WeatherResponse {
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
  };
}

export const getWeatherByCoordinates = async (
  lat: number,
  lon: number
): Promise<WeatherResponse> => {
  const response = await axios.get<WeatherResponse>(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params: {
        lat,
        lon,
        units: "metric",
        appid: API_KEY,
      },
    }
  );

  return response.data;
};
