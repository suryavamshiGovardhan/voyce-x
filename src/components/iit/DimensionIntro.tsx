import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { IITDimension } from "@/data/invisibleInheritanceQuestions";

interface Props {
  dimension: IITDimension;
  number: number;
  total: number;
  onContinue: () => void;
}

export default function DimensionIntro({ dimension, number, total, onContinue }: Props) {
  useEffect(() => {
    const t = setTimeout(() => {
      // auto-advance hint only — user still confirms
    }, 800);
    return () => clearTimeout(t);
  }, [dimension.id]);

  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center text-center max-w-xl mx-auto px-4 animate-fade-in">
      <p className="text-[10px] tracking-[0.5em] text-muted-foreground mb-6">
        DIMENSION {String(number).padStart(2, "0")} OF {String(total).padStart(2, "0")}
      </p>
      <h2 className="text-3xl sm:text-4xl font-serif text-foreground mb-4 leading-tight">
        {dimension.title}
      </h2>
      <p className="text-base text-muted-foreground mb-10 leading-relaxed">
        {dimension.subtitle}
      </p>
      <blockquote className="text-sm italic text-foreground/70 border-l-2 border-emerald-500/40 pl-4 mb-10 max-w-md">
        {dimension.caption}
      </blockquote>
      <Button size="lg" onClick={onContinue} className="min-w-[160px]">
        Begin
      </Button>
    </div>
  );
}
