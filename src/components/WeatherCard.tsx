// import { WeatherResponse } from "../api/weatherApi";


// interface WeatherCardProps {
//   weather: WeatherResponse;
// }

// const WeatherCard = ({ weather }: WeatherCardProps) => {
//   return (
//     <div className="rounded-xl bg-[#0f172a] p-6 shadow-lg">
//       <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
//         🌦️ Weather
//       </h3>

//       <div className="space-y-2 text-sm text-slate-300">
//         <p>
//           <span className="text-slate-400">Temperature:</span>{" "}
//           <span className="text-teal-400 font-medium">
//             {weather.main.temp}°C
//           </span>
//         </p>

//         <p>
//           <span className="text-slate-400">Condition:</span>{" "}
//           {weather.weather[0].description}
//         </p>

//         <p>
//           <span className="text-slate-400">Humidity:</span>{" "}
//           {weather.main.humidity}%
//         </p>

//         <p>
//           <span className="text-slate-400">Wind:</span>{" "}
//           {weather.wind.speed} m/s
//         </p>
//       </div>
//     </div>
//   );
// };

// export default WeatherCard;



import { WeatherResponse } from "@/api/weatherApi";
import { Cloud, Droplets, Wind, Thermometer } from "lucide-react";

interface WeatherCardProps {
  weather: WeatherResponse;
}

const WeatherCard = ({ weather }: WeatherCardProps) => {
  return (
    <div className="glass-card rounded-2xl p-6 card-hover">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-xl bg-primary/20">
          <Cloud className="w-5 h-5 text-primary" />
        </div>
        <h3 className="text-lg font-semibold text-foreground">Weather</h3>
      </div>

      <div className="text-center mb-6">
        <div className="text-5xl font-display font-bold gradient-text mb-2">
          {Math.round(weather.main.temp)}°C
        </div>
        <p className="text-muted-foreground capitalize">
          {weather.weather[0].description}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/50">
          <Droplets className="w-4 h-4 text-primary" />
          <div>
            <p className="text-xs text-muted-foreground">Humidity</p>
            <p className="text-sm font-medium text-foreground">{weather.main.humidity}%</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/50">
          <Wind className="w-4 h-4 text-primary" />
          <div>
            <p className="text-xs text-muted-foreground">Wind</p>
            <p className="text-sm font-medium text-foreground">{weather.wind.speed} m/s</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
