import Link from "next/link";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-shell items-center justify-between px-6 py-4">
        <Link
          href="#top"
          className="group flex items-baseline gap-2 font-display text-sm font-semibold tracking-tight text-ink"
        >
          <span className="refdes text-copper">KW</span>
          <span className="text-ink-dim transition-colors group-hover:text-ink">
            / Khristian Whyee
          </span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-1.5 font-mono text-[0.78rem] tracking-wide text-ink-dim transition-colors hover:bg-surface hover:text-ink"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://github.com/KhristianWhyee"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 hidden rounded-md border border-line px-3 py-1.5 font-mono text-[0.78rem] tracking-wide text-copper transition-colors hover:border-copper/60 hover:bg-copper/5 sm:inline-block"
          >
            GitHub ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
