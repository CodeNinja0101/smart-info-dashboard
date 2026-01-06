import { Globe, Search } from "lucide-react";

const EmptyState = () => {
  const suggestions = ["Japan", "Brazil", "Iceland", "Kenya", "New Zealand"];

  return (
    <div className="text-center py-16 animate-in fade-in duration-500">
      <div className="relative inline-block mb-8">
        <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center animate-float">
          <Globe className="w-12 h-12 text-primary" />
        </div>
        <div className="absolute -bottom-1 -right-1 w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
          <Search className="w-5 h-5 text-accent" />
        </div>
      </div>
      
      <h3 className="text-2xl font-display font-semibold text-foreground mb-3">
        Explore the World
      </h3>
      <p className="text-muted-foreground max-w-md mx-auto mb-8">
        Search for any country to discover its capital, population, local time, and more.
      </p>

      <div className="flex flex-wrap justify-center gap-2">
        <span className="text-sm text-muted-foreground mr-2">Try:</span>
        {suggestions.map((country) => (
          <span
            key={country}
            className="
              px-3 py-1.5 rounded-full text-sm font-medium
              bg-secondary/50 text-foreground/80
              border border-border/50
            "
          >
            {country}
          </span>
        ))}
      </div>
    </div>
  );
};

export default EmptyState;
