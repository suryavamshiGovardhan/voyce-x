
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { AuthGuard } from "@/components/AuthGuard";
import { SEOHead } from "@/components/SEOHead";
import { 
  Heart, 
  BookOpen, 
  Phone, 
  MessageCircle,
  PenSquare,
  Edit,
  Trash2,
  Eye,
  Star,
  Users,
  Award,
  User
} from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface UserBlog {
  id: string;
  title: string;
  slug: string;
  status: string;
  created_at: string;
  category: string;
}

export default function DashboardPage() {
  const { t } = useLanguage();
  const { user } = useAuth();
  const [userBlogs, setUserBlogs] = useState<UserBlog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchUserBlogs();
    }
  }, [user]);

  const fetchUserBlogs = async () => {
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select('id, title, slug, status, created_at, category')
        .eq('author_id', user?.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setUserBlogs(data || []);
    } catch (error: any) {
      toast.error('Failed to load your blogs');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string, title: string) => {
    try {
      const { error } = await supabase
        .from('blogs')
        .delete()
        .eq('id', id)
        .eq('author_id', user?.id);

      if (error) throw error;
      toast.success(`"${title}" deleted successfully`);
      fetchUserBlogs();
    } catch (error: any) {
      toast.error('Failed to delete blog');
    }
  };

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
    <AuthGuard>
      <SEOHead 
        title="Dashboard"
        description="Your personal VOYCE-X dashboard"
        noindex
      />
      <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Section */}
          <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-primary mb-2">
                Welcome back, {user?.user_metadata?.full_name || 'Wellness Warrior'}!
              </h1>
              <p className="text-muted-foreground">Continue your journey towards better mental health</p>
            </div>
            <div className="flex gap-2">
              <Button asChild variant="outline">
                <Link to="/profile">
                  <User className="mr-2 h-5 w-5" />
                  Profile
                </Link>
              </Button>
              <Button asChild size="lg">
                <Link to="/blog/create">
                  <PenSquare className="mr-2 h-5 w-5" />
                  Write a Blog
                </Link>
              </Button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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
                <MessageCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold">Community</h3>
                <Button asChild variant="outline" size="sm" className="mt-2">
                  <Link to="/thoughts">Join Discussion</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-4 text-center">
                <BookOpen className="h-8 w-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold">Read Blogs</h3>
                <Button asChild variant="outline" size="sm" className="mt-2">
                  <Link to="/blog">Browse</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* User's Blogs Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Your Blog Posts
                </span>
                <Button asChild variant="outline" size="sm">
                  <Link to="/blog/create">
                    <PenSquare className="mr-2 h-4 w-4" />
                    Create New
                  </Link>
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {loading ? (
                <p className="text-center text-muted-foreground">Loading your blogs...</p>
              ) : userBlogs.length === 0 ? (
                <div className="text-center py-8">
                  <Heart className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground mb-4">You haven't created any blogs yet</p>
                  <Button asChild>
                    <Link to="/blog/create">Write Your First Blog</Link>
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {userBlogs.map((blog) => (
                    <Card key={blog.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="font-semibold text-lg">{blog.title}</h3>
                              <Badge variant={blog.status === 'published' ? 'default' : 'secondary'}>
                                {blog.status}
                              </Badge>
                            </div>
                            <div className="flex gap-4 text-sm text-muted-foreground">
                              <span>{blog.category}</span>
                              <span>{new Date(blog.created_at).toLocaleDateString()}</span>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm" asChild>
                              <Link to={`/blog/${blog.slug}`}>
                                <Eye className="h-4 w-4" />
                              </Link>
                            </Button>
                            <Button variant="ghost" size="sm" asChild>
                              <Link to={`/blog/edit/${blog.slug}`}>
                                <Edit className="h-4 w-4" />
                              </Link>
                            </Button>
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button variant="ghost" size="sm">
                                  <Trash2 className="h-4 w-4 text-destructive" />
                                </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>Delete Blog Post?</AlertDialogTitle>
                                  <AlertDialogDescription>
                                    Are you sure you want to delete "{blog.title}"? This action cannot be undone.
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                                  <AlertDialogAction onClick={() => handleDelete(blog.id, blog.title)}>
                                    Delete
                                  </AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
    </AuthGuard>
  );
}
