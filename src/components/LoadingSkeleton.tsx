const LoadingSkeleton = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Country Card Skeleton */}
      <div className="glass-card rounded-3xl overflow-hidden">
        <div className="h-48 bg-secondary/50 animate-pulse" />
        <div className="p-6 space-y-4">
          <div className="h-8 w-2/3 bg-secondary/50 rounded-lg animate-pulse" />
          <div className="grid grid-cols-2 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-16 bg-secondary/50 rounded-xl animate-pulse" />
            ))}
          </div>
        </div>
      </div>

      {/* Time Card Skeleton */}
      <div className="glass-card rounded-3xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-secondary/50 animate-pulse" />
          <div className="h-6 w-24 bg-secondary/50 rounded-lg animate-pulse" />
        </div>
        <div className="h-16 w-48 mx-auto bg-secondary/50 rounded-xl animate-pulse mb-6" />
        <div className="space-y-3">
          <div className="h-16 bg-secondary/50 rounded-xl animate-pulse" />
          <div className="h-16 bg-secondary/50 rounded-xl animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
