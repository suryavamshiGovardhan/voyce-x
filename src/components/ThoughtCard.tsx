
import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import { Thought } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface ThoughtCardProps {
  thought: Thought;
  onLike: (id: string) => void;
}

export default function ThoughtCard({ thought, onLike }: ThoughtCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const { toast } = useToast();

  const handleLike = () => {
    setIsLiked(!isLiked);
    onLike(thought.id);
    
    if (!isLiked) {
      toast({
        title: "Liked!",
        description: "You've liked this thought",
        duration: 2000,
      });
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Shared thought from VOYCE',
        text: thought.content,
        url: window.location.href,
      })
      .then(() => {
        toast({
          title: "Shared!",
          description: "Thought shared successfully",
        });
      })
      .catch((error) => {
        console.error('Error sharing:', error);
      });
    } else {
      // Fallback for browsers that don't support navigator.share
      navigator.clipboard.writeText(thought.content);
      toast({
        title: "Copied to clipboard!",
        description: "You can now paste and share this thought",
      });
    }
  };

  return (
    <Card className="transition-all duration-200 hover:shadow-md animate-fade-in">
      <CardContent className="pt-6">
        <p className="text-lg mb-4">{thought.content}</p>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>{thought.author}</span>
          <span>{new Date(thought.date).toLocaleDateString()}</span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-4 border-t">
        <Button
          variant="ghost"
          size="sm"
          className={cn("gap-1", isLiked && "text-red-500")}
          onClick={handleLike}
        >
          <Heart className={cn("h-4 w-4", isLiked && "fill-current")} />
          <span>{isLiked ? thought.likes + 1 : thought.likes}</span>
        </Button>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm" onClick={handleShare}>
            <Share2 className="h-4 w-4 mr-1" />
            Share
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
