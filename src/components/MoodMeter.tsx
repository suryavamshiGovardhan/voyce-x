
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Smile, Frown, Angry, Meh } from 'lucide-react';

const moodTips = {
  happy: {
    icon: Smile,
    tip: "Gratitude magnifies happiness. Take a moment to think of three things you're grateful for right now.",
    color: "text-green-500",
  },
  sad: {
    icon: Frown,
    tip: "It's okay to feel sad. Acknowledge the feeling without judgment. Try listening to some calming music or talking to a friend.",
    color: "text-blue-500",
  },
  angry: {
    icon: Angry,
    tip: "Anger is energy. Channel it constructively. Try a short, intense burst of exercise or deep, slow breathing for one minute.",
    color: "text-red-500",
  },
  meh: {
    icon: Meh,
    tip: "Feeling indifferent can be a sign of burnout. Try a small, novel activity. Step outside for 5 minutes or listen to a new song.",
    color: "text-gray-500",
  },
};

type Mood = keyof typeof moodTips;

export default function MoodMeter() {
  const [selectedMood, setSelectedMood] = useState<Mood | null>(null);

  return (
    <div className="py-20 px-4 bg-slate-50 rounded-t-2xl -mt-4 relative z-10">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">How are you feeling right now?</h2>
        <p className="text-slate-600 mb-8">Click an icon to get a micro-tip tailored for your mood.</p>
        <div className="flex justify-center items-center gap-4 md:gap-8 mb-8">
          {(Object.keys(moodTips) as Mood[]).map((mood) => {
            const CurrentIcon = moodTips[mood].icon;
            return (
              <button
                key={mood}
                onClick={() => setSelectedMood(mood)}
                className={`p-4 rounded-full transition-all duration-300 ${selectedMood === mood ? 'bg-slate-200 scale-110 shadow-lg' : 'hover:bg-slate-100 hover:scale-110'}`}
                aria-label={`Select ${mood} mood`}
              >
                <CurrentIcon className={`${moodTips[mood].color} w-10 h-10 md:w-12 md:h-12`} />
              </button>
            )
          })}
        </div>
        
        <div className="min-h-[120px] flex items-center justify-center">
            {selectedMood && (
                <Card className="bg-white text-center transition-all duration-500 animate-fade-in w-full shadow-xl">
                    <CardContent className="p-6">
                        <p className="text-lg text-slate-700">{moodTips[selectedMood].tip}</p>
                    </CardContent>
                </Card>
            )}
        </div>
      </div>
    </div>
  );
}
