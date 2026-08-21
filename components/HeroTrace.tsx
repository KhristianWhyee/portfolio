/**
 * The hero signature: a routed signal path that reads like a snippet of a PCB
 * netlist — pads, traces, a via, and a live "blip" travelling the line.
 * It's the most characteristic thing in the subject's world, so it opens the page.
 */
export default function HeroTrace({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 520 360"
      fill="none"
      role="img"
      aria-label="A routed printed-circuit-board signal path"
    >
      <defs>
        <linearGradient id="cu" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--copper-bright)" />
          <stop offset="1" stopColor="var(--copper)" />
        </linearGradient>
      </defs>

      {/* base routed traces */}
      <g stroke="var(--line-bright)" strokeWidth="2" strokeLinecap="round">
        <path d="M40 60 H180 L230 110 H360 L410 60 H500" />
        <path d="M40 150 H120 L170 200 H300" />
        <path d="M300 200 L350 250 H500" />
        <path d="M40 300 H210 L260 250 H360" />
        <path d="M230 110 V200" />
      </g>

      {/* live signal overlay */}
      <g
        stroke="url(#cu)"
        strokeWidth="2.4"
        strokeLinecap="round"
        className="signal-flow"
      >
        <path d="M40 60 H180 L230 110 H360 L410 60 H500" />
        <path d="M40 300 H210 L260 250 H360" />
      </g>

      {/* phosphor signal on the lower branch */}
      <path
        d="M40 150 H120 L170 200 H300 L350 250 H500"
        stroke="var(--phosphor)"
        strokeWidth="2"
        strokeLinecap="round"
        className="signal-flow"
        style={{ animationDuration: "10s" }}
        opacity="0.85"
      />

      {/* pads */}
      <g>
        {[
          [40, 60],
          [500, 60],
          [40, 150],
          [40, 300],
          [500, 250],
          [360, 250],
          [300, 200],
        ].map(([x, y], i) => (
          <g key={i}>
            <rect
              x={x - 9}
              y={y - 9}
              width="18"
              height="18"
              rx="3"
              fill="var(--surface-2)"
              stroke="var(--copper)"
              strokeWidth="1.5"
            />
            <circle cx={x} cy={y} r="3.2" fill="var(--bg)" />
          </g>
        ))}
      </g>

      {/* a via */}
      <circle cx="230" cy="110" r="6.5" fill="none" stroke="var(--phosphor)" strokeWidth="2" />
      <circle cx="230" cy="110" r="2.2" fill="var(--phosphor)" />

      {/* travelling blips */}
      <circle cx="410" cy="60" r="4.5" fill="var(--copper-bright)" className="blip" />
      <circle
        cx="170"
        cy="200"
        r="4"
        fill="var(--phosphor)"
        className="blip"
        style={{ animationDelay: "1.1s" }}
      />
    </svg>
  );
}
