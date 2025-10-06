import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Log 404 errors in development only
    if (import.meta.env.DEV) {
      console.error("404 Error: Non-existent route:", location.pathname);
    }
  }, [location.pathname]);

  return (
    <>
      <SEOHead 
        title="Page Not Found"
        description="The page you're looking for doesn't exist."
        noindex
      />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/20 to-background p-4">
        <div className="max-w-md w-full text-center space-y-6 animate-fade-in">
          <div className="relative">
            <div className="text-9xl font-bold text-primary/10">404</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Search className="h-24 w-24 text-primary/30 animate-pulse" />
            </div>
          </div>
          
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-foreground">
              Page Not Found
            </h1>
            <p className="text-muted-foreground">
              The page you're looking for doesn't exist or has been moved.
              Let's get you back on track.
            </p>
          </div>

          <div className="flex gap-3 justify-center pt-4">
            <Button
              onClick={() => navigate(-1)}
              variant="outline"
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Go Back
            </Button>
            <Button
              onClick={() => navigate('/')}
              className="gap-2"
            >
              <Home className="h-4 w-4" />
              Go Home
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
