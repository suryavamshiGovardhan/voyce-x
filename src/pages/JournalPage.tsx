import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { sanitizeDbError } from '@/lib/errorHandler';
import { AuthGuard } from '@/components/AuthGuard';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { BookOpen, Save, History } from 'lucide-react';

export default function JournalPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    if (!user || !content.trim()) {
      toast({
        title: 'Content required',
        description: 'Please write something before saving.',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);

    const { error } = await supabase
      .from('journal_entries')
      .insert({
        user_id: user.id,
        title: title.trim() || 'Untitled Entry',
        content: content.trim(),
      });

    setLoading(false);

    if (error) {
      toast({
        title: 'Error',
        description: sanitizeDbError(error),
        variant: 'destructive',
      });
    } else {
      toast({
        title: 'Entry saved!',
        description: 'Your thoughts have been safely recorded.',
      });
      setTitle('');
      setContent('');
    }
  };

  return (
    <AuthGuard>
      <SEOHead
        title="My Private Journal - VOYCE"
        description="Your safe, private space for self-reflection and journaling"
        keywords="journal, private journal, mental health journal, self-reflection"
      />

      <div className="min-h-screen bg-gradient-to-b from-background to-accent/20">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-primary/10 rounded-lg">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">My Private Journal</h1>
                <p className="text-muted-foreground">Your thoughts, your space, completely private</p>
              </div>
            </div>
            <Button
              onClick={() => navigate('/journal/history')}
              variant="outline"
              className="gap-2"
            >
              <History className="h-4 w-4" />
              View Past Entries
            </Button>
          </div>

          {/* Journal Entry Card */}
          <div className="bg-card rounded-lg border shadow-lg p-6 space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Entry Title (optional)</label>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Give your entry a title..."
                maxLength={100}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Your Thoughts</label>
              <Textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write freely... This is your private space. No one else will see this."
                rows={15}
                className="resize-none font-serif text-base leading-relaxed"
              />
              <p className="text-xs text-muted-foreground text-right">
                {content.length} characters
              </p>
            </div>

            <div className="flex justify-between items-center pt-4 border-t">
              <p className="text-sm text-muted-foreground">
                🔒 Your entries are encrypted and completely private
              </p>
              <Button
                onClick={handleSave}
                disabled={!content.trim() || loading}
                className="gap-2"
                size="lg"
              >
                <Save className="h-4 w-4" />
                {loading ? 'Saving...' : 'Save Entry'}
              </Button>
            </div>
          </div>

          {/* Privacy Notice */}
          <div className="mt-6 p-4 bg-muted/50 rounded-lg border border-border/50">
            <h3 className="font-semibold mb-2">About Your Privacy</h3>
            <p className="text-sm text-muted-foreground">
              Your journal entries are stored securely with Supabase's enterprise-grade encryption.
              Only you can access your entries. They are never shared, analyzed, or used for any purpose.
              This is your safe space.
            </p>
          </div>
        </div>
      </div>
    </AuthGuard>
  );
}
