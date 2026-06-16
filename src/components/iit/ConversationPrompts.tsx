interface Props {
  prompts: string[];
}

export default function ConversationPrompts({ prompts }: Props) {
  return (
    <div className="space-y-3">
      {prompts.map((p, i) => (
        <div
          key={i}
          className="border border-border rounded-md p-5 bg-card/20 hover:bg-card/40 transition-colors"
        >
          <p className="text-[10px] tracking-[0.3em] text-muted-foreground mb-2">
            CONVERSATION {String(i + 1).padStart(2, "0")}
          </p>
          <p className="text-sm sm:text-base text-foreground leading-relaxed">{p}</p>
        </div>
      ))}
    </div>
  );
}
