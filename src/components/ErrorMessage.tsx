import { AlertCircle } from "lucide-react";
import { Button } from "./ui/button";

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

const ErrorMessage = ({ message, onRetry }: ErrorMessageProps) => {
  return (
    <div className="glass-card rounded-3xl p-6 text-center animate-in fade-in duration-300">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center">
          <AlertCircle className="w-8 h-8 text-destructive" />
        </div>

        <h3 className="text-xl font-medium text-foreground">Something went wrong</h3>
        <p className="text-muted-foreground max-w-lg">{message}</p>

        {onRetry && (
          <div className="mt-4">
            <Button onClick={onRetry} variant="destructive">
              Retry
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ErrorMessage;
