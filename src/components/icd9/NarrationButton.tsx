import { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface NarrationButtonProps {
  text: string;
  language?: string;
}

export default function NarrationButton({ text, language = "en-US" }: NarrationButtonProps) {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const speak = () => {
    if (!('speechSynthesis' in window)) {
      toast.error("Speech synthesis not supported in this browser");
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language;
    utterance.rate = 0.9;
    utterance.pitch = 1;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => {
      setIsSpeaking(false);
      toast.error("Failed to play narration");
    };

    window.speechSynthesis.speak(utterance);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={speak}
      className="gap-2"
      title={isSpeaking ? "Stop narration" : "Listen to description"}
    >
      {isSpeaking ? (
        <VolumeX className="h-4 w-4" />
      ) : (
        <Volume2 className="h-4 w-4" />
      )}
      <span className="text-xs">{isSpeaking ? "Stop" : "Listen"}</span>
    </Button>
  );
}
