
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import Index from "./pages/Index";
import VoycePage from "./pages/VoycePage";
import PathPage from "./pages/PathPage";
import ToolsPage from "./pages/ToolsPage";
import LibraryPage from "./pages/LibraryPage";
import NewslettersPage from "./pages/NewslettersPage";
import ThoughtsPage from "./pages/ThoughtsPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import DashboardPage from "./pages/DashboardPage";
import ProfilePage from "./pages/ProfilePage";
import StressPage from "./pages/StressPage";
import TraumaPage from "./pages/TraumaPage";
import ADHDPage from "./pages/ADHDPage";
import BrainPage from "./pages/BrainPage";
import MindHeartGutPage from "./pages/MindHeartGutPage";
import NeurosciencePage from "./pages/NeurosciencePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/voyce" element={<VoycePage />} />
            <Route path="/path" element={<PathPage />} />
            <Route path="/tools" element={<ToolsPage />} />
            <Route path="/library" element={<LibraryPage />} />
            <Route path="/newsletters" element={<NewslettersPage />} />
            <Route path="/thoughts" element={<ThoughtsPage />} />
            <Route path="/stress" element={<StressPage />} />
            <Route path="/trauma" element={<TraumaPage />} />
            <Route path="/adhd" element={<ADHDPage />} />
            <Route path="/brain" element={<BrainPage />} />
            <Route path="/mind-heart-gut" element={<MindHeartGutPage />} />
            <Route path="/neuroscience" element={<NeurosciencePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
