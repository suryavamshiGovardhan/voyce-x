
import { useState } from "react";
import { Newsletter, newsletters as initialNewsletters } from "@/lib/data";
import NewsletterCard from "./NewsletterCard";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function Newsletters() {
  const [newsletters, setNewsletters] = useState<Newsletter[]>(initialNewsletters);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    url: "",
    imageUrl: "",
  });
  const { toast } = useToast();

  const handleLike = (id: string) => {
    setNewsletters(newsletters.map(newsletter => 
      newsletter.id === id 
        ? { ...newsletter, likes: newsletter.likes + 1 } 
        : newsletter
    ));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newNewsletter: Newsletter = {
      id: Date.now().toString(),
      title: formData.title,
      description: formData.description,
      url: formData.url,
      imageUrl: formData.imageUrl || undefined,
      date: new Date().toISOString().split('T')[0],
      likes: 0,
    };
    
    setNewsletters(prev => [newNewsletter, ...prev]);
    setFormData({ title: "", description: "", url: "", imageUrl: "" });
    setOpen(false);
    
    toast({
      title: "Newsletter Added",
      description: "Your newsletter has been added successfully!",
    });
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-primary">Mental Health Newsletters</h2>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button>
                <PlusCircle className="h-4 w-4 mr-2" />
                Add Newsletter
              </Button>
            </DialogTrigger>
            <DialogContent>
              <form onSubmit={handleSubmit}>
                <DialogHeader>
                  <DialogTitle>Add New Newsletter</DialogTitle>
                  <DialogDescription>
                    Share mental health resources with the community.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      name="title"
                      placeholder="Newsletter title"
                      value={formData.title}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      name="description"
                      placeholder="Brief description of the newsletter"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="url">Newsletter URL</Label>
                    <Input
                      id="url"
                      name="url"
                      type="url"
                      placeholder="https://example.com/newsletter"
                      value={formData.url}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="imageUrl">Image URL (optional)</Label>
                    <Input
                      id="imageUrl"
                      name="imageUrl"
                      placeholder="https://example.com/image.jpg"
                      value={formData.imageUrl}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Add Newsletter</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsletters.map((newsletter) => (
            <NewsletterCard 
              key={newsletter.id} 
              newsletter={newsletter} 
              onLike={handleLike} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
