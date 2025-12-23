import { Suspense, lazy } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import { AuthProvider } from "@/hooks/useAuth";
import { GlobalErrorHandler } from "@/components/GlobalErrorHandler";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { LoadingFallback } from "@/components/LoadingFallback";

// Eager load critical pages (Public Zone)
import Index from "./pages/Index";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import NotFound from "./pages/NotFound";

// Public Zone Pages (7 Navigation Items)
const StoriesPage = lazy(() => import("./pages/StoriesPage"));
const ReflectionPage = lazy(() => import("./pages/ReflectionPage"));
const LearnPage = lazy(() => import("./pages/LearnPage"));
const PathPage = lazy(() => import("./pages/PathPage"));
const SchoolsPage = lazy(() => import("./pages/SchoolsPage"));
const ConnectPage = lazy(() => import("./pages/ConnectPage"));

// Research Zone (Gated Access - Footer Only)
const ResearchAccessPage = lazy(() => import("./pages/ResearchAccessPage"));

// User Dashboard
const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const JournalPage = lazy(() => import("./pages/JournalPage"));

// Founder & Articles
const FounderPage = lazy(() => import("./pages/FounderPage"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 30,
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <GlobalErrorHandler />
              <Suspense fallback={<LoadingFallback />}>
                <Routes>
                  {/* Public Zone - 7 Navigation Items */}
                  <Route path="/" element={<Index />} />
                  <Route path="/stories" element={<StoriesPage />} />
                  <Route path="/reflection" element={<ReflectionPage />} />
                  <Route path="/learn" element={<LearnPage />} />
                  <Route path="/path" element={<PathPage />} />
                  <Route path="/schools" element={<SchoolsPage />} />
                  <Route path="/connect" element={<ConnectPage />} />
                  
                  {/* Auth */}
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/signup" element={<SignUpPage />} />
                  
                  {/* User Dashboard */}
                  <Route path="/dashboard" element={<DashboardPage />} />
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="/journal" element={<JournalPage />} />
                  
                  {/* Research Zone - Footer Access Only */}
                  <Route path="/research-access" element={<ResearchAccessPage />} />
                  
                  {/* Founder */}
                  <Route path="/suryavamshi-govardhan" element={<FounderPage />} />
                  
                  {/* 404 */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </BrowserRouter>
          </TooltipProvider>
        </LanguageProvider>
      </AuthProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
