import { Country } from "@/api/countryApi";
import { MapPin, Users, Globe2, Languages, Banknote } from "lucide-react";

interface CountryCardProps {
  country: Country;
}

const formatPopulation = (pop: number): string => {
  if (pop >= 1_000_000_000) {
    return `${(pop / 1_000_000_000).toFixed(2)}B`;
  }
  if (pop >= 1_000_000) {
    return `${(pop / 1_000_000).toFixed(2)}M`;
  }
  if (pop >= 1_000) {
    return `${(pop / 1_000).toFixed(1)}K`;
  }
  return pop.toLocaleString();
};

const CountryCard = ({ country }: CountryCardProps) => {
  const currencies = country.currencies
    ? Object.values(country.currencies)
        .map((c) => `${c.name} (${c.symbol})`)
        .join(", ")
    : "N/A";

  const languages = country.languages
    ? Object.values(country.languages).slice(0, 3).join(", ")
    : "N/A";

  return (
    <div className="glass-card rounded-3xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Flag Header */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={country.flags.svg}
          alt={country.flags.alt || `Flag of ${country.name.common}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        <div className="absolute bottom-4 left-6 right-6">
          <h2 className="text-3xl font-display font-bold text-foreground drop-shadow-lg">
            {country.name.common}
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            {country.name.official}
          </p>
        </div>
      </div>

      {/* Info Grid */}
      <div className="p-6 grid grid-cols-2 gap-4">
        <InfoItem
          icon={<MapPin className="w-5 h-5" />}
          label="Capital"
          value={country.capital?.[0] || "N/A"}
        />
        <InfoItem
          icon={<Users className="w-5 h-5" />}
          label="Population"
          value={formatPopulation(country.population)}
        />
        <InfoItem
          icon={<Globe2 className="w-5 h-5" />}
          label="Region"
          value={country.subregion || country.region}
        />
        <InfoItem
          icon={<Banknote className="w-5 h-5" />}
          label="Currency"
          value={currencies.split(",")[0]}
        />
        <div className="col-span-2">
          <InfoItem
            icon={<Languages className="w-5 h-5" />}
            label="Languages"
            value={languages}
          />
        </div>
      </div>
    </div>
  );
};

interface InfoItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const InfoItem = ({ icon, label, value }: InfoItemProps) => (
  <div className="flex items-start gap-3 p-3 rounded-xl bg-secondary/50">
    <div className="text-primary mt-0.5">{icon}</div>
    <div>
      <p className="text-xs text-muted-foreground uppercase tracking-wider">
        {label}
      </p>
      <p className="text-sm font-semibold text-foreground mt-0.5">{value}</p>
    </div>
  </div>
);

export default CountryCard;
