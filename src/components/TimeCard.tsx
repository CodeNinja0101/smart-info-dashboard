import { TimeData } from "@/api/timeApi";
import { Clock, Calendar, MapPinned } from "lucide-react";

interface TimeCardProps {
  timeData: TimeData;
}

const TimeCard = ({ timeData }: TimeCardProps) => {
  const formatTime = (hour: number, minute: number): string => {
    const h = hour.toString().padStart(2, "0");
    const m = minute.toString().padStart(2, "0");
    return `${h}:${m}`;
  };

  const formatDate = (date: string): string => {
    return new Date(date).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="glass-card rounded-3xl p-6 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-150">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
          <Clock className="w-5 h-5 text-accent" />
        </div>
        <h3 className="text-lg font-display font-semibold text-foreground">
          Local Time
        </h3>
      </div>

      {/* Large Time Display */}
      <div className="text-center mb-6">
        <div className="inline-flex items-baseline gap-1">
          <span className="text-6xl font-display font-bold gradient-text">
            {formatTime(timeData.hour, timeData.minute)}
          </span>
          <span className="text-2xl text-muted-foreground font-medium">
            :{timeData.seconds.toString().padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Date & Timezone */}
      <div className="space-y-3">
        <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50">
          <Calendar className="w-5 h-5 text-primary" />
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">
              Date
            </p>
            <p className="text-sm font-semibold text-foreground">
              {formatDate(timeData.date)}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50">
          <MapPinned className="w-5 h-5 text-primary" />
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">
              Timezone
            </p>
            <p className="text-sm font-semibold text-foreground">
              {timeData.timeZone}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeCard;
