import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useAuth } from '@/hooks/useAuth';
import { AuthGuard } from '@/components/AuthGuard';
import { SEOHead } from '@/components/SEOHead';
import { StatsWidget } from '@/components/dashboard/StatsWidget';
import { MoodChart } from '@/components/dashboard/MoodChart';
import { JournalPreview } from '@/components/dashboard/JournalPreview';
import { ProgressWidget } from '@/components/dashboard/ProgressWidget';
import { 
  Heart, 
  BookOpen, 
  Phone, 
  MessageCircle,
  PenSquare,
  User,
  Sparkles
} from 'lucide-react';

export default function DashboardPage() {
  const { user } = useAuth();

  const todaysTip = "Remember: It's okay to not be okay. Every small step towards mental wellness counts.";

  return (
    <AuthGuard>
      <SEOHead 
        title="My Dashboard - VOYCE"
        description="Your personal mental wellness journey dashboard"
        noindex
      />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-accent/20">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Welcome Section */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h1 className="text-4xl font-bold text-primary mb-2">
                  Welcome back, {user?.user_metadata?.full_name || 'Wellness Warrior'}!
                </h1>
                <p className="text-lg text-muted-foreground">
                  Continue your journey towards better mental health
                </p>
              </div>
              <div className="flex gap-2">
                <Button asChild variant="outline" size="lg">
                  <Link to="/profile">
                    <User className="mr-2 h-5 w-5" />
                    Profile
                  </Link>
                </Button>
                <Button asChild size="lg">
                  <Link to="/blog/create">
                    <PenSquare className="mr-2 h-5 w-5" />
                    Write Blog
                  </Link>
                </Button>
              </div>
            </div>

            {/* Today's Tip */}
            <Card className="p-6 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-primary/20">
              <div className="flex items-start gap-3">
                <Sparkles className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Today's Wellness Tip</h3>
                  <p className="text-muted-foreground">{todaysTip}</p>
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer border-red-200 bg-red-50/50">
                <Link to="/voyce" className="flex flex-col items-center text-center gap-3">
                  <div className="p-3 bg-red-100 rounded-full">
                    <Phone className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-red-900">Need Help Now?</h3>
                    <p className="text-sm text-red-700">Emergency contacts</p>
                  </div>
                </Link>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer border-blue-200 bg-blue-50/50">
                <Link to="/journal" className="flex flex-col items-center text-center gap-3">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <BookOpen className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900">My Journal</h3>
                    <p className="text-sm text-blue-700">Write your thoughts</p>
                  </div>
                </Link>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer border-green-200 bg-green-50/50">
                <Link to="/thoughts" className="flex flex-col items-center text-center gap-3">
                  <div className="p-3 bg-green-100 rounded-full">
                    <MessageCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-900">Community</h3>
                    <p className="text-sm text-green-700">Share your story</p>
                  </div>
                </Link>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer border-purple-200 bg-purple-50/50">
                <Link to="/library" className="flex flex-col items-center text-center gap-3">
                  <div className="p-3 bg-purple-100 rounded-full">
                    <Heart className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-purple-900">Learn</h3>
                    <p className="text-sm text-purple-700">Explore resources</p>
                  </div>
                </Link>
              </Card>
            </div>

            {/* My VOYCE at a Glance */}
            <div>
              <h2 className="text-2xl font-bold mb-4">My VOYCE at a Glance</h2>
              <StatsWidget />
            </div>

            {/* Mood & Journal Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <MoodChart />
              <JournalPreview />
            </div>

            {/* Learning Progress */}
            <ProgressWidget />
          </div>
        </main>
        <Footer />
      </div>
    </AuthGuard>
  );
}
