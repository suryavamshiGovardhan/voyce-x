import { DimensionResult } from "@/lib/iit/scoring";

interface Props {
  dimensions: DimensionResult[];
}

const ZONE_COLOR: Record<DimensionResult["zone"], string> = {
  resonance: "stroke-emerald-500/70",
  tension: "stroke-amber-500/70",
  blind_spot: "stroke-rose-500/70",
};

const ZONE_DOT: Record<DimensionResult["zone"], string> = {
  resonance: "bg-emerald-500",
  tension: "bg-amber-500",
  blind_spot: "bg-rose-500",
};

export default function CompatibilityMap({ dimensions }: Props) {
  const rowHeight = 64;
  const height = dimensions.length * rowHeight + 40;
  const leftX = 30;
  const rightX = 270;

  return (
    <div className="border border-border rounded-lg p-4 sm:p-6 bg-card/30 backdrop-blur-sm overflow-x-auto">
      <div className="flex justify-between text-[10px] tracking-[0.3em] text-muted-foreground mb-2 px-1">
        <span>PARTNER A</span>
        <span>PARTNER B</span>
      </div>

      <svg
        viewBox={`0 0 300 ${height}`}
        className="w-full"
        style={{ minWidth: 320 }}
        aria-label="Compatibility constellation map between Partner A and Partner B"
      >
        {dimensions.map((d, i) => {
          const y = 20 + i * rowHeight;
          return (
            <g key={d.dimensionId}>
              <circle cx={leftX} cy={y} r={5} className={ZONE_DOT[d.zone].replace("bg-", "fill-")} />
              <circle cx={rightX} cy={y} r={5} className={ZONE_DOT[d.zone].replace("bg-", "fill-")} />
              <line
                x1={leftX + 6}
                y1={y}
                x2={rightX - 6}
                y2={y}
                className={ZONE_COLOR[d.zone]}
                strokeWidth={1.2}
                strokeDasharray={d.zone === "blind_spot" ? "3 4" : d.zone === "tension" ? "6 3" : undefined}
              />
              <text x={150} y={y - 10} textAnchor="middle" className="fill-foreground text-[10px] font-serif">
                {d.title}
              </text>
              <text x={150} y={y + 14} textAnchor="middle" className="fill-muted-foreground text-[9px]">
                {d.alignment}% aligned
              </text>
              <text x={leftX} y={y + 20} textAnchor="middle" className="fill-muted-foreground text-[9px]">
                {d.partnerA.archetype}
              </text>
              <text x={rightX} y={y + 20} textAnchor="middle" className="fill-muted-foreground text-[9px]">
                {d.partnerB.archetype}
              </text>
            </g>
          );
        })}
      </svg>

      <div className="flex flex-wrap gap-4 justify-center pt-4 border-t border-border mt-4 text-xs text-muted-foreground">
        <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500" /> Resonance</span>
        <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-amber-500" /> Tension</span>
        <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-rose-500" /> Blind spot</span>
      </div>
    </div>
  );
}
