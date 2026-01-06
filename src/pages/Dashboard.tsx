// import { useState } from "react";
// import { getCountryByName, Country } from "@/api/countryApi";
// import { getTimeByCoordinates, TimeData } from "@/api/timeApi";
// import { WeatherResponse, getWeatherByCoordinates } from "@/api/weatherApi";

// import WeatherCard from "@/components/WeatherCard";
// import SearchBar from "@/components/SearchBar";
// import CountryCard from "@/components/CountryCard";
// import TimeCard from "@/components/TimeCard";
// import LoadingSkeleton from "@/components/LoadingSkeleton";
// import ErrorMessage from "@/components/ErrorMessage";
// import EmptyState from "@/components/EmptyState";
// import { Sparkles } from "lucide-react";

// const Dashboard = () => {
//   const [country, setCountry] = useState<Country | null>(null);
//   const [timeData, setTimeData] = useState<TimeData | null>(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [lastQuery, setLastQuery] = useState("");
//   const [weather, setWeather] = useState<WeatherResponse | null>(null);


//   const searchCountry = async (name: string) => {
//     setLoading(true);
//     setError("");
//     setCountry(null);
//     setTimeData(null);
//     setWeather(null);
//     setLastQuery(name);
    

//     try {
//       const countryData = await getCountryByName(name);
//       setCountry(countryData);

//       const coords = countryData.capitalInfo?.latlng;
// if (coords && coords.length === 2) {
//   const [lat, lon] = coords;

//   const timeResponse = await getTimeByCoordinates(lat, lon);
//   setTimeData(timeResponse);

//   const weatherResponse = await getWeatherByCoordinates(lat, lon);
//   setWeather(weatherResponse);
// }

//     } catch (err: any) {
//       setError(err?.message ?? "Country not found. Please check the spelling and try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleRetry = () => {
//     if (lastQuery) {
//       searchCountry(lastQuery);
//     }
//   };

//   return (
//     <div className="min-h-screen">
//       {/* Background Elements */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
//         <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
//       </div>

//       <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
//         {/* Header */}
//         <header className="text-center mb-12 md:mb-16">
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
//             <Sparkles className="w-4 h-4 text-primary" />
//             <span className="text-sm font-medium text-primary">World Explorer</span>
//           </div>
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
//             <span className="text-foreground">Discover </span>
//             <span className="gradient-text">Any Country</span>
//           </h1>
//           <p className="text-lg text-muted-foreground max-w-xl mx-auto">
//             Get instant information about countries worldwide — from population stats to local time.
//           </p>
//         </header>

//         {/* Search */}
//         <div className="mb-12 md:mb-16">
//           <SearchBar onSearch={searchCountry} isLoading={loading} />
//         </div>

//         {/* Content */}
//         <div className="max-w-4xl mx-auto">
//           {loading && <LoadingSkeleton />}

//           {error && !loading && (
//             <ErrorMessage message={error} onRetry={handleRetry} />
//           )}

//           {!loading && !error && !country && <EmptyState />}

//           {!loading && !error && country && (
//             <div className="grid md:grid-cols-2 gap-6">
//   <CountryCard country={country} />

//   <div className="space-y-6">
//     {timeData && <TimeCard timeData={timeData} />}
//     {weather && <WeatherCard weather={weather} />}
//   </div>
// </div>

//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import { useState } from "react";
import { getCountryByName, Country } from "@/api/countryApi";
import { getTimeByCoordinates, TimeData } from "@/api/timeApi";
import { getWeatherByCoordinates, WeatherResponse } from "@/api/weatherApi";
import SearchBar from "@/components/SearchBar";
import CountryCard from "@/components/CountryCard";
import TimeCard from "@/components/TimeCard";
import WeatherCard from "@/components/WeatherCard";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import ErrorMessage from "@/components/ErrorMessage";
import EmptyState from "@/components/EmptyState";
import { Sparkles } from "lucide-react";

const Dashboard = () => {
  const [country, setCountry] = useState<Country | null>(null);
  const [timeData, setTimeData] = useState<TimeData | null>(null);
  const [weather, setWeather] = useState<WeatherResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [lastQuery, setLastQuery] = useState("");

  const searchCountry = async (name: string) => {
    setLoading(true);
    setError("");
    setCountry(null);
    setTimeData(null);
    setWeather(null);
    setLastQuery(name);

    try {
      const countryData = await getCountryByName(name);
      setCountry(countryData);

      const coords = countryData.capitalInfo?.latlng;
      if (coords && coords.length === 2) {
        const [lat, lon] = coords;
        const [timeResponse, weatherResponse] = await Promise.all([
          getTimeByCoordinates(lat, lon),
          getWeatherByCoordinates(lat, lon),
        ]);
        setTimeData(timeResponse);
        setWeather(weatherResponse);
      }
    } catch {
      setError("Country not found. Please check the spelling and try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleRetry = () => {
    if (lastQuery) {
      searchCountry(lastQuery);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
        {/* Header */}
        <header className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">World Explorer</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            <span className="text-foreground">Discover </span>
            <span className="gradient-text">Any Country</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Get instant information about countries worldwide — from population stats to local time.
          </p>
        </header>

        {/* Search */}
        <div className="mb-12 md:mb-16">
          <SearchBar onSearch={searchCountry} isLoading={loading} />
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          {loading && <LoadingSkeleton />}

          {error && !loading && (
            <ErrorMessage message={error} onRetry={handleRetry} />
          )}

          {!loading && !error && !country && <EmptyState />}

          {!loading && !error && country && (
            <div className="grid md:grid-cols-2 gap-6">
              <CountryCard country={country} />
              <div className="space-y-6">
                {timeData && <TimeCard timeData={timeData} />}
                {weather && <WeatherCard weather={weather} />}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
