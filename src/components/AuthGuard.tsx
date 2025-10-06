import { ReactNode, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { LoadingFallback } from './LoadingFallback';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { LogIn } from 'lucide-react';

interface AuthGuardProps {
  children: ReactNode;
  requireAuth?: boolean;
  redirectTo?: string;
}

export function AuthGuard({ 
  children, 
  requireAuth = true,
  redirectTo = '/login'
}: AuthGuardProps) {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [showAuthModal, setShowAuthModal] = useState(false);

  useEffect(() => {
    if (!loading && requireAuth && !user) {
      // Show modal instead of immediate redirect
      setShowAuthModal(true);
    }
  }, [user, loading, requireAuth]);

  const handleLoginRedirect = () => {
    navigate(redirectTo, { 
      state: { from: location.pathname },
      replace: true 
    });
  };

  const handleGoBack = () => {
    setShowAuthModal(false);
    navigate(-1);
  };

  if (loading) {
    return <LoadingFallback message="Checking authentication..." />;
  }

  if (requireAuth && !user) {
    return (
      <Dialog open={showAuthModal} onOpenChange={setShowAuthModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <LogIn className="h-5 w-5 text-primary" />
              Login Required
            </DialogTitle>
            <DialogDescription>
              You need to be logged in to access this page. 
              Please log in to continue your journey with VOYCE.
            </DialogDescription>
          </DialogHeader>
          <div className="flex gap-3 mt-4">
            <Button 
              onClick={handleLoginRedirect}
              className="flex-1"
            >
              Go to Login
            </Button>
            <Button 
              onClick={handleGoBack}
              variant="outline"
              className="flex-1"
            >
              Go Back
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return <>{children}</>;
}
