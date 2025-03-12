
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ExternalLink } from "lucide-react";
import { Newsletter } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface NewsletterCardProps {
  newsletter: Newsletter;
  onLike: (id: string) => void;
}

export default function NewsletterCard({ newsletter, onLike }: NewsletterCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const { toast } = useToast();

  const handleLike = () => {
    setIsLiked(!isLiked);
    onLike(newsletter.id);
    
    if (!isLiked) {
      toast({
        title: "Liked!",
        description: "You've liked this newsletter",
        duration: 2000,
      });
    }
  };

  return (
    <Card className="h-full flex flex-col overflow-hidden transition-all duration-200 hover:shadow-md">
      {newsletter.imageUrl && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={newsletter.imageUrl} 
            alt={newsletter.title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-xl">{newsletter.title}</CardTitle>
        <p className="text-sm text-muted-foreground">{new Date(newsletter.date).toLocaleDateString()}</p>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{newsletter.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between pt-4">
        <Button
          variant="ghost"
          size="sm"
          className={cn("gap-1", isLiked && "text-red-500")}
          onClick={handleLike}
        >
          <Heart className={cn("h-4 w-4", isLiked && "fill-current")} />
          <span>{isLiked ? newsletter.likes + 1 : newsletter.likes}</span>
        </Button>
        <Button asChild variant="outline" size="sm">
          <a href={newsletter.url} target="_blank" rel="noopener noreferrer">
            Read <ExternalLink className="ml-1 h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
