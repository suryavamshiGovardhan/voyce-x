import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useBlogs } from '@/hooks/useBlogs';
import { Skeleton } from '@/components/ui/skeleton';
import { AlertCircle, PenSquare } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { initializeSampleBlogs } from '@/utils/initializeSampleBlogs';
import { SEOHead } from '@/components/SEOHead';

export default function BlogPage() {
  const { blogs, loading, error, refetch } = useBlogs();
  const { user } = useAuth();

  useEffect(() => {
    // Initialize sample blogs if none exist
    initializeSampleBlogs().then(() => {
      refetch();
    });
  }, []);

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <AlertCircle className="mx-auto h-12 w-12 text-destructive mb-4" />
              <h2 className="text-xl font-semibold text-foreground mb-2">Error Loading Posts</h2>
              <p className="text-muted-foreground">{error}</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <SEOHead 
        title="Mental Health Blog"
        description="Read insightful articles on mental health, mindfulness, psychology, and emotional wellbeing from the VOYCE-X community."
        keywords="mental health blog, psychology articles, mindfulness tips, emotional wellbeing, mental health resources"
      />
      <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              VOYCE-X Blog
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Insights, stories, and resources for mental health and wellbeing
            </p>
            {user && (
              <Button asChild size="lg">
                <Link to="/blog/create">
                  <PenSquare className="mr-2 h-5 w-5" />
                  Write a Blog
                </Link>
              </Button>
            )}
          </header>

          {/* Featured Philosophy Articles */}
          <div className="space-y-6 mb-8">
            <Card className="overflow-hidden border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardHeader>
                <Badge className="w-fit mb-2" variant="outline">Featured Philosophy</Badge>
                <CardTitle className="text-2xl">
                  <Link to="/article/desire-suffering-journey" className="hover:text-primary transition-colors">
                    Desire, Suffering & The Human Journey
                  </Link>
                </CardTitle>
                <p className="text-sm text-muted-foreground">The Debate Buddha Never Finished</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  For thousands of years, people have repeated: "Desire is the root of suffering." But if that's really true... why does the entire universe run on desire? VOYCE questions the wisdom the world blindly repeats.
                </p>
                <Button asChild variant="outline">
                  <Link to="/article/desire-suffering-journey">
                    Read Full Article →
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardHeader>
                <Badge className="w-fit mb-2" variant="outline">Featured Philosophy</Badge>
                <CardTitle className="text-2xl">
                  <Link to="/article/atheism-doctrines" className="hover:text-primary transition-colors">
                    Doctrines of Atheism: The Rebel's Reason
                  </Link>
                </CardTitle>
                <p className="text-sm text-muted-foreground">The pursuit of truth without excuses</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Atheism isn't the worship of disbelief. It is the pursuit of truth without excuses — a journey through philosophy, reason, and the courage to question everything we've been taught to accept.
                </p>
                <Button asChild variant="outline">
                  <Link to="/article/atheism-doctrines">
                    Read Full Article →
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {loading ? (
            <div className="grid gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <Card key={i} className="overflow-hidden">
                  <CardHeader>
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-1/4" />
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-2/3" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : blogs.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-foreground mb-2">No Posts Yet</h2>
              <p className="text-muted-foreground">Check back soon for new content!</p>
            </div>
          ) : (
            <div className="grid gap-6">
              {blogs.map((blog) => (
                <Card key={blog.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  {blog.featured_image && (
                    <div className="w-full h-48 overflow-hidden">
                      <img 
                        src={blog.featured_image} 
                        alt={blog.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-start justify-between flex-wrap gap-2">
                      <CardTitle className="text-xl hover:text-primary transition-colors flex-1">
                        <Link to={`/blog/${blog.slug}`}>
                          {blog.title}
                        </Link>
                      </CardTitle>
                      <div className="flex gap-2">
                        <Badge variant="secondary">
                          {new Date(blog.date).toLocaleDateString()}
                        </Badge>
                        {blog.category && (
                          <Badge variant="outline">{blog.category}</Badge>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">By {blog.author}</p>
                  </CardHeader>
                  {blog.summary && (
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{blog.summary}</p>
                      <Link 
                        to={`/blog/${blog.slug}`}
                        className="text-primary hover:underline font-medium"
                      >
                        Read more →
                      </Link>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
    </>
  );
}