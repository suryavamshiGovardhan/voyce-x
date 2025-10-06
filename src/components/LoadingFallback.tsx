import { Loader2 } from 'lucide-react';

interface LoadingFallbackProps {
  message?: string;
  fullScreen?: boolean;
}

export function LoadingFallback({ 
  message = "Loading...", 
  fullScreen = true 
}: LoadingFallbackProps) {
  const containerClass = fullScreen 
    ? "min-h-screen flex items-center justify-center"
    : "flex items-center justify-center p-8";

  return (
    <div className={containerClass}>
      <div className="text-center space-y-4 animate-fade-in">
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
            <Loader2 className="h-12 w-12 text-primary animate-spin relative" />
          </div>
        </div>
        <p className="text-muted-foreground text-lg font-medium">
          {message}
        </p>
      </div>
    </div>
  );
}

export function PageLoadingSkeleton() {
  return (
    <div className="min-h-screen animate-pulse">
      {/* Header skeleton */}
      <div className="h-16 bg-muted/50 border-b border-border" />
      
      {/* Hero skeleton */}
      <div className="container mx-auto px-4 py-12 space-y-8">
        <div className="space-y-4">
          <div className="h-12 bg-muted/50 rounded-lg w-2/3 mx-auto" />
          <div className="h-6 bg-muted/50 rounded-lg w-1/2 mx-auto" />
        </div>
        
        {/* Content skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="space-y-4">
              <div className="h-48 bg-muted/50 rounded-lg" />
              <div className="h-4 bg-muted/50 rounded w-3/4" />
              <div className="h-4 bg-muted/50 rounded w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
