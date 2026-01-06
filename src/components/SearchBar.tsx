import { useState } from "react";
import { Search, Globe } from "lucide-react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  isLoading?: boolean;
}

const SearchBar = ({ onSearch, isLoading }: SearchBarProps) => {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = () => {
    if (!value.trim()) return;
    onSearch(value.trim());
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      <div
        className={`
          relative flex items-center gap-3 px-6 py-4 rounded-2xl
          glass-card transition-all duration-300
          ${isFocused ? "glow-primary ring-2 ring-primary/50" : ""}
        `}
      >
        <Globe
          className={`
            w-6 h-6 transition-all duration-300
            ${isFocused ? "text-primary animate-pulse-glow" : "text-muted-foreground"}
          `}
        />
        <input
          type="text"
          placeholder="Search any country..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onKeyDown={handleKeyDown}
          className="
            flex-1 bg-transparent border-none outline-none
            text-lg text-foreground placeholder:text-muted-foreground
            font-medium tracking-wide
          "
        />
        <button
          onClick={handleSearch}
          disabled={isLoading || !value.trim()}
          className="
            flex items-center justify-center w-12 h-12 rounded-xl
            bg-primary text-primary-foreground
            hover:opacity-90 active:scale-95
            disabled:opacity-50 disabled:cursor-not-allowed
            transition-all duration-200
          "
        >
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
          ) : (
            <Search className="w-5 h-5" />
          )}
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
