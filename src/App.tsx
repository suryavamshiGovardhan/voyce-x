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
import { DailyCheckIn } from "@/components/engagement/DailyCheckIn";

// Eager load critical pages
import Index from "./pages/Index";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import NotFound from "./pages/NotFound";

// Lazy load non-critical pages
const VoycePage = lazy(() => import("./pages/VoycePage"));
const PathPage = lazy(() => import("./pages/PathPage"));
const ToolsPage = lazy(() => import("./pages/ToolsPage"));
const LibraryPage = lazy(() => import("./pages/LibraryPage"));
const NewslettersPage = lazy(() => import("./pages/NewslettersPage"));
const ThoughtsPage = lazy(() => import("./pages/ThoughtsPage"));
const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const JournalPage = lazy(() => import("./pages/JournalPage"));
const JournalHistoryPage = lazy(() => import("./pages/JournalHistoryPage"));
const StressPage = lazy(() => import("./pages/StressPage"));
const TraumaPage = lazy(() => import("./pages/TraumaPage"));
const ADHDPage = lazy(() => import("./pages/ADHDPage"));
const BrainPage = lazy(() => import("./pages/BrainPage"));
const MindHeartGutPage = lazy(() => import("./pages/MindHeartGutPage"));
const NeurosciencePage = lazy(() => import("./pages/NeurosciencePage"));
const WorkbookPage = lazy(() => import("./pages/WorkbookPage"));
const TheoriesPage = lazy(() => import("./pages/TheoriesPage"));
const ACESPage = lazy(() => import("./pages/ACESPage"));
const CDSPage = lazy(() => import("./pages/CDSPage"));
const SchoolsPage = lazy(() => import("./pages/SchoolsPage"));
const DSM5Page = lazy(() => import("./pages/DSM5Page"));
const DSM5AcademyPage = lazy(() => import("./pages/DSM5AcademyPage"));
const DSM5ModulePage = lazy(() => import("./pages/DSM5ModulePage"));
const StoryPage = lazy(() => import("./pages/StoryPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogPostPage = lazy(() => import("./pages/BlogPostPage"));
const CreateBlogPage = lazy(() => import("./pages/CreateBlogPage"));
const DraftsPage = lazy(() => import("./pages/DraftsPage"));
const ICD9Page = lazy(() => import("./pages/ICD9Page"));
const ICD9DetailPage = lazy(() => import("./pages/ICD9DetailPage"));
const IntegratedDiagnosticsPage = lazy(() => import("./pages/IntegratedDiagnosticsPage"));
const QuizListPage = lazy(() => import("./pages/QuizListPage"));
const LeaderboardPage = lazy(() => import("./pages/LeaderboardPage"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 30, // 30 minutes
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
              <DailyCheckIn />
              <Suspense fallback={<LoadingFallback />}>
                <Routes>
                  {/* Critical routes - no lazy loading */}
                  <Route path="/" element={<Index />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/signup" element={<SignUpPage />} />
                  
                  {/* Lazy-loaded routes */}
                  <Route path="/voyce" element={<VoycePage />} />
                  <Route path="/path" element={<PathPage />} />
                  <Route path="/tools" element={<ToolsPage />} />
                  <Route path="/library" element={<LibraryPage />} />
                  <Route path="/newsletters" element={<NewslettersPage />} />
                  <Route path="/thoughts" element={<ThoughtsPage />} />
                  <Route path="/story" element={<StoryPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/blog/:slug" element={<BlogPostPage />} />
                  <Route path="/blog/create" element={<CreateBlogPage />} />
                  <Route path="/blog/edit/:slug" element={<CreateBlogPage />} />
                  <Route path="/drafts" element={<DraftsPage />} />
                  <Route path="/stress" element={<StressPage />} />
                  <Route path="/trauma" element={<TraumaPage />} />
                  <Route path="/adhd" element={<ADHDPage />} />
                  <Route path="/brain" element={<BrainPage />} />
                  <Route path="/mind-heart-gut" element={<MindHeartGutPage />} />
                  <Route path="/neuroscience" element={<NeurosciencePage />} />
                  <Route path="/aces" element={<ACESPage />} />
                  <Route path="/cds" element={<CDSPage />} />
                  <Route path="/schools" element={<SchoolsPage />} />
                  <Route path="/dsm5" element={<DSM5Page />} />
                  <Route path="/dsm5-academy" element={<DSM5AcademyPage />} />
                  <Route path="/dsm5-academy/module/:moduleId" element={<DSM5ModulePage />} />
                  <Route path="/theories" element={<TheoriesPage />} />
                  <Route path="/workbook" element={<WorkbookPage />} />
                  <Route path="/dashboard" element={<DashboardPage />} />
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="/journal" element={<JournalPage />} />
                  <Route path="/journal/history" element={<JournalHistoryPage />} />
                  <Route path="/icd9" element={<ICD9Page />} />
                  <Route path="/icd9/:range" element={<ICD9DetailPage />} />
                  <Route path="/diagnostics" element={<IntegratedDiagnosticsPage />} />
                  <Route path="/quizzes" element={<QuizListPage />} />
                  <Route path="/leaderboard" element={<LeaderboardPage />} />
                  
                  {/* 404 catch-all */}
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
