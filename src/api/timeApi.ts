import axios from "axios";

export interface TimeData {
  date: string;
  time: string;
  timeZone: string;
  dayOfWeek: string;
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  seconds: number;
}

export const getTimeByCoordinates = async (
  lat: number,
  lon: number
): Promise<TimeData> => {
  try {
    const response = await axios.get<TimeData>(
      `https://timeapi.io/api/Time/current/coordinate?latitude=${lat}&longitude=${lon}`
    );
    return response.data;
  } catch (err: any) {
    if (axios.isAxiosError(err) && err.response) {
      throw new Error(`Failed to get time data: ${err.response.status} ${err.response.statusText}`);
    }
    throw new Error("Failed to fetch time information for this location");
  }
};
