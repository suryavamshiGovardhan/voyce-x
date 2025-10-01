import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Sparkles } from "lucide-react";

const welcomeQuotes = [
  "Happiness is not something ready made. It comes from your own actions. — Dalai Lama",
  "The greatest glory in living lies not in never falling, but in rising every time we fall. — Nelson Mandela",
  "Believe you can and you're halfway there. — Theodore Roosevelt",
  "The only way to do great work is to love what you do. — Steve Jobs",
  "In the middle of difficulty lies opportunity. — Albert Einstein"
];

interface WelcomeQuoteDialogProps {
  userName: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function WelcomeQuoteDialog({ userName, open, onOpenChange }: WelcomeQuoteDialogProps) {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    if (open) {
      const randomQuote = welcomeQuotes[Math.floor(Math.random() * welcomeQuotes.length)];
      setQuote(randomQuote);
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <DialogTitle className="text-2xl">Welcome to Voyce! 🌱</DialogTitle>
          </div>
          <DialogDescription className="text-lg">
            Hello <span className="font-semibold text-primary">{userName}</span>
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 p-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg border border-primary/20">
          <p className="text-sm text-muted-foreground mb-2">Here's a quote to start your journey:</p>
          <p className="text-base italic text-foreground">{quote}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
