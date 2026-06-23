interface Props {
  prompts: string[];
}

export default function ConversationPrompts({ prompts }: Props) {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {prompts.map((p, i) => (
        <div
          key={i}
          className="ii-glass-card ii-glass-card-hover rounded-xl p-6 relative overflow-hidden"
        >
          <span
            className="absolute -top-4 -right-2 ii-display text-7xl text-white/5 select-none"
            aria-hidden
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <p className="ii-marginalia mb-3 relative">CONVERSATION {String(i + 1).padStart(2, "0")}</p>
          <p className="ii-serif text-base sm:text-lg text-foreground/90 leading-relaxed relative">
            {p}
          </p>
        </div>
      ))}
    </div>
  );
}
