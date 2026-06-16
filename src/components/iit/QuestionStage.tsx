import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { IITQuestion } from "@/data/invisibleInheritanceQuestions";

interface Props {
  question: IITQuestion;
  index: number;
  total: number;
  onAnswer: (value: number) => void;
}

export default function QuestionStage({ question, index, total, onAnswer }: Props) {
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    setSelected(null);
  }, [question.id]);

  return (
    <div className="min-h-[80vh] flex flex-col justify-between max-w-2xl mx-auto px-4 py-10 animate-fade-in">
      <div>
        <p className="text-[10px] tracking-[0.4em] text-muted-foreground mb-8">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </p>

        <p className="text-sm italic text-muted-foreground mb-6 leading-relaxed">
          {question.scene}
        </p>

        <h2 className="text-2xl sm:text-3xl font-serif text-foreground mb-10 leading-snug">
          {question.prompt}
        </h2>

        <div className="space-y-3" role="radiogroup" aria-label={question.prompt}>
          {question.options.map((opt) => {
            const isSelected = selected === opt.value;
            return (
              <button
                key={opt.value}
                role="radio"
                aria-checked={isSelected}
                onClick={() => setSelected(opt.value)}
                className={[
                  "w-full text-left p-5 rounded-md border transition-all",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  isSelected
                    ? "border-emerald-500/60 bg-emerald-500/5 text-foreground"
                    : "border-border hover:border-foreground/40 text-foreground/80 hover:text-foreground",
                ].join(" ")}
              >
                <span className="text-sm sm:text-base leading-relaxed">{opt.text}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-10 flex justify-end">
        <Button
          size="lg"
          disabled={selected === null}
          onClick={() => selected !== null && onAnswer(selected)}
          className="min-w-[140px]"
        >
          {index + 1 === total ? "Finish" : "Continue"}
        </Button>
      </div>
    </div>
  );
}
