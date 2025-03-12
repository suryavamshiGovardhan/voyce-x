
import { useState } from "react";
import { Thought, thoughts as initialThoughts } from "@/lib/data";
import ThoughtCard from "./ThoughtCard";
import { Button } from "@/components/ui/button";
import { SendHorizonal, Plus } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export default function ClearThoughts() {
  const [thoughts, setThoughts] = useState<Thought[]>(initialThoughts);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    content: "",
    author: "Anonymous",
  });
  const { toast } = useToast();

  const handleLike = (id: string) => {
    setThoughts(thoughts.map(thought => 
      thought.id === id 
        ? { ...thought, likes: thought.likes + 1 } 
        : thought
    ));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newThought: Thought = {
      id: Date.now().toString(),
      content: formData.content,
      author: formData.author || "Anonymous",
      date: new Date().toISOString().split('T')[0],
      likes: 0,
    };
    
    setThoughts(prev => [newThought, ...prev]);
    setFormData({ content: "", author: "Anonymous" });
    setOpen(false);
    
    toast({
      title: "Thought Shared",
      description: "Your thought has been shared with the community!",
    });
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-primary">Clear Thoughts</h2>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Share a Thought
              </Button>
            </DialogTrigger>
            <DialogContent>
              <form onSubmit={handleSubmit}>
                <DialogHeader>
                  <DialogTitle>Share Your Thought</DialogTitle>
                  <DialogDescription>
                    Express yourself freely in a supportive community.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="content">Your Thought</Label>
                    <Textarea
                      id="content"
                      name="content"
                      placeholder="Share what's on your mind..."
                      value={formData.content}
                      onChange={handleInputChange}
                      className="min-h-[100px]"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="author">
                      Your Name (optional, leave empty to remain anonymous)
                    </Label>
                    <Input
                      id="author"
                      name="author"
                      placeholder="Anonymous"
                      value={formData.author}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">
                    <SendHorizonal className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
        <div className="space-y-6">
          {thoughts.map((thought) => (
            <ThoughtCard 
              key={thought.id} 
              thought={thought} 
              onLike={handleLike} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
