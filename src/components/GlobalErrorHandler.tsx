import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export function GlobalErrorHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    // Intercept Supabase auth errors
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_OUT') {
        // Clear any stale data
        localStorage.clear();
      }
    });

    // Global fetch interceptor for 401 errors
    const originalFetch = window.fetch;
    window.fetch = async function(...args) {
      try {
        const response = await originalFetch.apply(this, args);
        
        if (response.status === 401) {
          // Check if it's a Supabase request
          const url = args[0] as string;
          if (url.includes('supabase.co')) {
            // Clear session and redirect
            await supabase.auth.signOut();
            toast.error('Session expired or not authorized — redirecting to Home');
            setTimeout(() => navigate('/'), 2000);
          }
        }
        
        return response;
      } catch (error) {
        // Log in development only
        if (import.meta.env.DEV) {
          console.error('Network error:', error);
        }
        throw error;
      }
    };

    return () => {
      subscription.unsubscribe();
      window.fetch = originalFetch;
    };
  }, [navigate]);

  return null;
}
