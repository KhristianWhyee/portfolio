import Nav from "@/components/Nav";
import HeroTrace from "@/components/HeroTrace";
import Projects from "@/components/Projects";
import Reveal from "@/components/Reveal";

const emails = [
  { label: "Personal", value: "khristianwhyee@gmail.com" },
  { label: "Temple", value: "khristian.whyee@temple.edu" },
];

export default function Home() {
  return (
    <div id="top">
      <Nav />

      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="trace-grid pointer-events-none absolute inset-0" />
        <div className="relative mx-auto grid max-w-shell items-center gap-12 px-6 pb-24 pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:pt-28">
          <div>
            <p className="eyebrow mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-copper" />
              Aspiring Electrical Engineer · Temple University
            </p>
            <h1 className="font-display text-[2.6rem] font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl">
              Hi, I&apos;m Khristian.
              <span className="mt-2 block text-ink-dim">
                I build the{" "}
                <span className="text-copper">hardware</span>, the{" "}
                <span className="text-phosphor">software</span>, and whatever
                the idea turns into.
              </span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-ink-dim">
              This is my digital portfolio — a place I&apos;ll keep updating as
              new projects and ideas show up. Starting small and working my way
              up to cooler, bigger builds. From a hand-routed PCB to software
              for the trades, everything here is something I actually made.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="rounded-md bg-copper px-5 py-2.5 font-mono text-sm font-medium text-bg transition-colors hover:bg-copper-bright"
              >
                See the work
              </a>
              <a
                href="#contact"
                className="rounded-md border border-line px-5 py-2.5 font-mono text-sm text-ink transition-colors hover:border-line-bright"
              >
                Get in touch
              </a>
              <a
                href="https://github.com/KhristianWhyee"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline font-mono text-sm text-ink-dim"
              >
                github.com/KhristianWhyee
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="fiducial relative rounded-xl border border-line bg-surface/60 p-4">
              <div className="mb-3 flex items-center justify-between font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ink-faint">
                <span>net · signal path</span>
                <span className="refdes">NET&#95;01</span>
              </div>
              <HeroTrace className="w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Marquee spec strip ─────────────────────────────── */}
      <div className="border-y border-line bg-surface/40">
        <div className="mx-auto flex max-w-shell flex-wrap items-center justify-between gap-y-3 px-6 py-4 font-mono text-[0.74rem] tracking-wide text-ink-dim">
          {[
            ["Discipline", "Electrical Engineering"],
            ["Focus", "Hardware × Software"],
            ["Design tool", "KiCad"],
            ["Status", "Always building"],
          ].map(([k, v]) => (
            <span key={k} className="flex items-center gap-2">
              <span className="text-ink-faint">{k}:</span>
              <span className="text-ink">{v}</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── About ──────────────────────────────────────────── */}
      <section id="about" className="mx-auto max-w-shell px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="eyebrow mb-3">
              <span className="refdes mr-2">01</span> About
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              An engineer, still early, and moving fast.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="space-y-5 text-base leading-relaxed text-ink-dim">
              <p>
                I&apos;m Khristian, an aspiring electrical engineer at Temple
                University. I like the whole stack of making something real —
                from the copper traces on a board to the software that gives it
                a reason to exist.
              </p>
              <p>
                I&apos;m starting off small on purpose, but the plan is to keep
                reaching for cooler and bigger projects. This portfolio is
                deliberately a living document: whenever an idea shows up and I
                chase it down, it lands here.
              </p>
              <ul className="grid gap-3 pt-2 sm:grid-cols-2">
                {[
                  "PCB design & layout in KiCad",
                  "Web software for real-world trades",
                  "Control systems & research",
                  "AI-assisted tools and agents",
                ].map((item) => (
                  <li
                    key={item}
                    className="pad-bullet pl-5 font-mono text-sm text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Projects ───────────────────────────────────────── */}
      <Projects />

      {/* ── Contact ────────────────────────────────────────── */}
      <section id="contact" className="border-t border-line bg-surface/30">
        <div className="mx-auto max-w-shell px-6 py-24">
          <Reveal>
            <p className="eyebrow mb-3">
              <span className="refdes mr-2">03</span> Contact
            </p>
            <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Have a project, a question, or an idea? Let&apos;s connect.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {emails.map((e, i) => (
              <Reveal key={e.value} delay={i * 70}>
                <a
                  href={`mailto:${e.value}`}
                  className="fiducial group relative block rounded-xl border border-line bg-surface p-6 transition-colors hover:border-copper/50"
                >
                  <p className="font-mono text-[0.72rem] uppercase tracking-[0.2em] text-ink-faint">
                    {e.label} email
                  </p>
                  <p className="mt-2 break-all font-mono text-sm text-ink transition-colors group-hover:text-copper-bright">
                    {e.value}
                  </p>
                  <span className="mt-4 inline-block font-mono text-[0.72rem] text-copper opacity-0 transition-opacity group-hover:opacity-100">
                    Send a message →
                  </span>
                </a>
              </Reveal>
            ))}
            <Reveal delay={210}>
              <a
                href="https://github.com/KhristianWhyee"
                target="_blank"
                rel="noopener noreferrer"
                className="fiducial group relative block rounded-xl border border-line bg-surface p-6 transition-colors hover:border-phosphor/50"
              >
                <p className="font-mono text-[0.72rem] uppercase tracking-[0.2em] text-ink-faint">
                  Code
                </p>
                <p className="mt-2 font-mono text-sm text-ink transition-colors group-hover:text-phosphor">
                  github.com/KhristianWhyee
                </p>
                <span className="mt-4 inline-block font-mono text-[0.72rem] text-phosphor opacity-0 transition-opacity group-hover:opacity-100">
                  View profile ↗
                </span>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-shell flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[0.74rem] text-ink-faint">
            <span className="refdes">KW</span> · Khristian Whyee — Digital
            Portfolio
          </p>
          <p className="font-mono text-[0.74rem] text-ink-faint">
            Designed &amp; built by Khristian · {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}
