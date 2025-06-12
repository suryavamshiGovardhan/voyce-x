
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { hapticFeedback } from "@/utils/hapticFeedback";

export default function ShareStoryButton() {
  const handleClick = () => {
    hapticFeedback.onSuccess();
  };

  return (
    <div className="text-center mb-16">
      <Button
        asChild
        size="lg"
        className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white px-8 py-4 rounded-2xl text-lg font-medium shadow-xl hover:scale-105 transition-all duration-300"
        onClick={handleClick}
      >
        <Link to="/workbook" className="flex items-center space-x-3">
          <Heart className="h-6 w-6" />
          <span>Share Your VOYCE Story</span>
        </Link>
      </Button>
      <p className="text-slate-400 text-sm mt-3">
        Your journey matters. Share your story with the VOYCE community.
      </p>
    </div>
  );
}
