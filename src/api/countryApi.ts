import axios from "axios";

const BASE_URL = "https://restcountries.com/v3.1";

export interface Country {
  name: {
    common: string;
    official: string;
  };
  capital?: string[];
  population: number;
  region: string;
  subregion?: string;
  flags: {
    png: string;
    svg: string;
    alt?: string;
  };
  capitalInfo?: {
    latlng?: [number, number];
  };
  currencies?: Record<string, { name: string; symbol: string }>;
  languages?: Record<string, string>;
  timezones?: string[];
  area?: number;
}

export const getCountryByName = async (name: string): Promise<Country> => {
  const q = encodeURIComponent(name.trim());

  // First try an exact/full text match for best result
  try {
    const response = await axios.get<Country[]>(
      `${BASE_URL}/name/${q}?fullText=true`
    );
    if (response.data && response.data.length) {
      return response.data[0];
    }
  } catch (err: any) {
    // Only surface non-404 errors; if 404, we'll fall back to a non-fullText search
    if (axios.isAxiosError(err) && err.response && err.response.status !== 404) {
      throw new Error(`Country lookup failed: ${err.response.status} ${err.response.statusText}`);
    }
  }

  // Fallback: try a partial match
  try {
    const response = await axios.get<Country[]>(
      `${BASE_URL}/name/${q}`
    );
    if (response.data && response.data.length) {
      return response.data[0];
    }
    throw new Error("Country not found");
  } catch (err: any) {
    if (axios.isAxiosError(err) && err.response) {
      if (err.response.status === 404) {
        throw new Error("Country not found (404)");
      }
      throw new Error(`Country lookup failed: ${err.response.status} ${err.response.statusText}`);
    }
    throw err;
  }
};
