import { DimensionResult } from "@/lib/iit/scoring";

interface Props {
  dimensions: DimensionResult[];
}

const ZONE_STROKE: Record<DimensionResult["zone"], string> = {
  resonance: "#34d399",   // emerald-400
  tension:   "#fbbf24",   // amber-400
  blind_spot:"#fb7185",   // rose-400
};

/**
 * Radial constellation map — each dimension is a star pair
 * orbiting a shared centre. Resonance lines are drawn in,
 * tension dashed, blind-spot pulses.
 */
export default function CompatibilityMap({ dimensions }: Props) {
  const size = 520;
  const cx = size / 2;
  const cy = size / 2;
  const ringR = 200;
  const innerR = 70;
  const n = dimensions.length || 1;

  return (
    <div className="ii-glass-card rounded-2xl p-4 sm:p-6">
      <div className="flex items-center justify-between mb-2">
        <span className="ii-marginalia">PARTNER A</span>
        <span className="ii-marginalia">CONSTELLATION</span>
        <span className="ii-marginalia">PARTNER B</span>
      </div>

      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="w-full h-auto"
        aria-label="Constellation map of inherited patterns between Partner A and Partner B"
      >
        <defs>
          <radialGradient id="ii-center" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#34d399" stopOpacity="0.55" />
            <stop offset="60%" stopColor="#34d399" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="ii-link" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#34d399" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.9" />
          </linearGradient>
        </defs>

        {/* faint orbital rings */}
        {[innerR, ringR * 0.65, ringR].map((r) => (
          <circle key={r} cx={cx} cy={cy} r={r} fill="none" stroke="hsl(0 0% 100% / 0.06)" />
        ))}
        <circle cx={cx} cy={cy} r={innerR} fill="url(#ii-center)" />

        {dimensions.map((d, i) => {
          const angle = (i / n) * Math.PI * 2 - Math.PI / 2;
          const aAngle = angle - 0.13;
          const bAngle = angle + 0.13;
          const ax = cx + Math.cos(aAngle) * ringR;
          const ay = cy + Math.sin(aAngle) * ringR;
          const bx = cx + Math.cos(bAngle) * ringR;
          const by = cy + Math.sin(bAngle) * ringR;
          const lx = cx + Math.cos(angle) * (ringR + 30);
          const ly = cy + Math.sin(angle) * (ringR + 30);
          const stroke = ZONE_STROKE[d.zone];
          const dash = d.zone === "blind_spot" ? "2 6" : d.zone === "tension" ? "8 5" : undefined;

          return (
            <g key={d.dimensionId}>
              {/* link from A through centre to B */}
              <path
                d={`M ${ax} ${ay} Q ${cx} ${cy} ${bx} ${by}`}
                fill="none"
                stroke="url(#ii-link)"
                strokeOpacity={0.55}
                strokeWidth={1.3}
                className="ii-line-draw"
                style={{ animationDelay: `${i * 80}ms` }}
              />
              {/* zone halo */}
              <circle cx={ax} cy={ay} r={9} fill={stroke} opacity={0.18} />
              <circle cx={bx} cy={by} r={9} fill={stroke} opacity={0.18} />
              {/* stars */}
              <circle cx={ax} cy={ay} r={3.5} fill={stroke} className="ii-node-glow" />
              <circle cx={bx} cy={by} r={3.5} fill={stroke} className="ii-node-glow" />
              {dash && (
                <line x1={ax} y1={ay} x2={bx} y2={by} stroke={stroke} strokeOpacity={0.35} strokeWidth={1} strokeDasharray={dash} />
              )}
              {/* label */}
              <text
                x={lx}
                y={ly}
                textAnchor={Math.cos(angle) > 0.15 ? "start" : Math.cos(angle) < -0.15 ? "end" : "middle"}
                dominantBaseline="middle"
                className="fill-foreground/90"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 13 }}
              >
                {d.title}
              </text>
              <text
                x={lx}
                y={ly + 14}
                textAnchor={Math.cos(angle) > 0.15 ? "start" : Math.cos(angle) < -0.15 ? "end" : "middle"}
                dominantBaseline="middle"
                className="fill-muted-foreground"
                style={{ fontSize: 9, letterSpacing: "0.15em" }}
              >
                {d.alignment}% · {d.zone.replace("_", " ").toUpperCase()}
              </text>
            </g>
          );
        })}

        <text x={cx} y={cy - 4} textAnchor="middle" className="fill-foreground" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18 }}>
          The Two of You
        </text>
        <text x={cx} y={cy + 14} textAnchor="middle" className="fill-muted-foreground" style={{ fontSize: 9, letterSpacing: "0.3em" }}>
          BEFORE VOWS
        </text>
      </svg>

      <div className="flex flex-wrap gap-4 justify-center pt-4 border-t border-white/10 mt-2 text-xs text-muted-foreground">
        <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full" style={{ background: ZONE_STROKE.resonance }} /> Resonance</span>
        <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full" style={{ background: ZONE_STROKE.tension }} /> Tension</span>
        <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full" style={{ background: ZONE_STROKE.blind_spot }} /> Blind spot</span>
      </div>
    </div>
  );
}
