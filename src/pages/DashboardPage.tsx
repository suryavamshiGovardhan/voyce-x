
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { 
  Heart, 
  BookOpen, 
  Trophy, 
  Phone, 
  Calendar,
  Star,
  Target,
  MessageCircle,
  Bookmark,
  TrendingUp,
  Users,
  Award
} from "lucide-react";
import { Link } from "react-router-dom";

export default function DashboardPage() {
  const { t } = useLanguage();
  const [moodRating, setMoodRating] = useState(0);

  const learningProgress = [
    { module: "Understanding Anxiety", progress: 80, badge: "Expert" },
    { module: "Stress Management", progress: 60, badge: "Intermediate" },
    { module: "Mindfulness Basics", progress: 100, badge: "Complete" },
    { module: "Building Resilience", progress: 30, badge: "Beginner" }
  ];

  const achievements = [
    { name: "First Steps", icon: Star, description: "Completed your first learning module" },
    { name: "Consistent Learner", icon: BookOpen, description: "7 days of continuous learning" },
    { name: "Community Helper", icon: Users, description: "Helped 5 community members" },
    { name: "Wellness Warrior", icon: Award, description: "Completed 10 wellness activities" }
  ];

  const todaysTip = "Remember: It's okay to not be okay. Every small step towards mental wellness counts.";

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-primary mb-2">Welcome back, Wellness Warrior!</h1>
            <p className="text-muted-foreground">Continue your journey towards better mental health</p>
          </div>

          {/* Quick Actions & SOS */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="bg-red-50 border-red-200">
              <CardContent className="p-4 text-center">
                <Phone className="h-8 w-8 text-red-600 mx-auto mb-2" />
                <h3 className="font-semibold text-red-800">Need Help Now?</h3>
                <Button asChild variant="destructive" size="sm" className="mt-2">
                  <a href="tel:14416">Call Tele MANAS</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-4 text-center">
                <BookOpen className="h-8 w-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold">Continue Learning</h3>
                <Button asChild variant="outline" size="sm" className="mt-2">
                  <Link to="/learning">Resume</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-4 text-center">
                <MessageCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold">Community</h3>
                <Button asChild variant="outline" size="sm" className="mt-2">
                  <Link to="/thoughts">Join Discussion</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-4 text-center">
                <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold">Find Support</h3>
                <Button asChild variant="outline" size="sm" className="mt-2">
                  <Link to="/professionals">Book Session</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Mood Check-in */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Heart className="h-5 w-5 mr-2 text-red-500" />
                    How are you feeling today?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2 mb-4">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <button
                        key={rating}
                        onClick={() => setMoodRating(rating)}
                        className={`w-12 h-12 rounded-full border-2 transition-all ${
                          moodRating >= rating
                            ? 'bg-primary text-white border-primary'
                            : 'border-gray-300 hover:border-primary'
                        }`}
                      >
                        {rating === 1 ? '😢' : rating === 2 ? '😞' : rating === 3 ? '😐' : rating === 4 ? '😊' : '😄'}
                      </button>
                    ))}
                  </div>
                  {moodRating > 0 && (
                    <p className="text-sm text-muted-foreground">
                      Thank you for sharing. Your mood has been recorded privately.
                    </p>
                  )}
                </CardContent>
              </Card>

              {/* Learning Progress */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="h-5 w-5 mr-2" />
                    Your Learning Journey
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {learningProgress.map((module, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{module.module}</span>
                          <Badge variant={module.progress === 100 ? "default" : "outline"}>
                            {module.badge}
                          </Badge>
                        </div>
                        <Progress value={module.progress} className="h-2" />
                        <p className="text-sm text-muted-foreground">{module.progress}% complete</p>
                      </div>
                    ))}
                  </div>
                  <Button asChild className="w-full mt-4">
                    <Link to="/learning">Continue Learning</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Latest Resources */}
              <Card>
                <CardHeader>
                  <CardTitle>Latest for You</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold">Managing Exam Stress</h4>
                      <p className="text-sm text-muted-foreground">New techniques for students during exam season</p>
                      <Button variant="link" className="p-0 h-auto">Read more →</Button>
                    </div>
                    <div className="border-l-4 border-secondary pl-4">
                      <h4 className="font-semibold">Rural Mental Health Initiative</h4>
                      <p className="text-sm text-muted-foreground">How communities are breaking mental health stigma</p>
                      <Button variant="link" className="p-0 h-auto">Read more →</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Daily Tip */}
              <Card className="bg-gradient-to-br from-primary/10 to-secondary/10">
                <CardHeader>
                  <CardTitle className="text-lg">💡 Today's Wellness Tip</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{todaysTip}</p>
                </CardContent>
              </Card>

              {/* Achievements */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Trophy className="h-5 w-5 mr-2 text-yellow-500" />
                    Your Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <achievement.icon className="h-8 w-8 text-primary" />
                        <div>
                          <p className="font-semibold text-sm">{achievement.name}</p>
                          <p className="text-xs text-muted-foreground">{achievement.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    Your Impact
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Days active</span>
                      <span className="font-semibold">23</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Modules completed</span>
                      <span className="font-semibold">7</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Community interactions</span>
                      <span className="font-semibold">15</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Wellness streak</span>
                      <span className="font-semibold">5 days</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Saved Items */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Bookmark className="h-5 w-5 mr-2" />
                    Saved Resources
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button variant="ghost" size="sm" className="w-full justify-start">
                      <Target className="h-4 w-4 mr-2" />
                      Breathing Exercises
                    </Button>
                    <Button variant="ghost" size="sm" className="w-full justify-start">
                      <Heart className="h-4 w-4 mr-2" />
                      Anxiety Management
                    </Button>
                    <Button variant="ghost" size="sm" className="w-full justify-start">
                      <Users className="h-4 w-4 mr-2" />
                      Support Groups
                    </Button>
                  </div>
                  <Button asChild variant="outline" size="sm" className="w-full mt-3">
                    <Link to="/saved">View All Saved</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
