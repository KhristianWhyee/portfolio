"use client";

import { useState } from "react";
import { projects, tracks, type Track } from "@/lib/projects";
import Reveal from "./Reveal";

const trackDot: Record<Track, string> = {
  Hardware: "var(--copper)",
  Software: "var(--phosphor)",
  AI: "#b07de0",
  Research: "#7aa2f7",
};

function StatusTag({ status }: { status: string }) {
  return (
    <span className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-faint">
      {status}
    </span>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<Track | "All">("All");
  const shown = projects.filter((p) => filter === "All" || p.track === filter);

  return (
    <section id="projects" className="relative mx-auto max-w-shell px-6 py-24">
      <Reveal className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow mb-3">
            <span className="refdes mr-2">02</span> The bill of materials
          </p>
          <h2 className="max-w-xl font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Projects, populated like a board.
          </h2>
          <p className="mt-3 max-w-md text-sm text-ink-dim">
            Every project gets a reference designator, the way every component
            on a PCB does. Hardware, software, and the ideas in between.
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {(["All", ...tracks] as const).map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`rounded-md border px-3 py-1.5 font-mono text-[0.75rem] tracking-wide transition-colors ${
                filter === t
                  ? "border-copper/60 bg-copper/10 text-copper-bright"
                  : "border-line text-ink-dim hover:border-line-bright hover:text-ink"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="grid gap-5 md:grid-cols-2">
        {shown.map((p, i) => (
          <Reveal
            key={p.ref}
            delay={(i % 2) * 80}
            className={p.featured ? "md:col-span-2" : ""}
          >
            <article
              className={`fiducial group relative h-full overflow-hidden rounded-xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-line-bright ${
                p.featured ? "md:grid md:grid-cols-[1.05fr_0.95fr] md:gap-8 md:p-8" : ""
              }`}
            >
              <div className="flex h-full flex-col">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="refdes text-base">{p.ref}</span>
                    <span className="flex items-center gap-2 rounded-full border border-line px-2.5 py-1 font-mono text-[0.68rem] uppercase tracking-wider text-ink-dim">
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ background: trackDot[p.track] }}
                      />
                      {p.track}
                    </span>
                  </div>
                  <StatusTag status={p.status} />
                </div>

                <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
                  {p.title}
                </h3>
                <p className="mt-1 font-mono text-[0.82rem] text-copper/90">
                  {p.tagline}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink-dim">
                  {p.description}
                </p>

                <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2 border-t border-line/70 pt-4">
                  {p.specs.map((s) => (
                    <div key={s.label} className="flex justify-between gap-2">
                      <dt className="font-mono text-[0.72rem] uppercase tracking-wide text-ink-faint">
                        {s.label}
                      </dt>
                      <dd className="text-right font-mono text-[0.72rem] text-ink">
                        {s.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-auto flex flex-wrap items-center gap-2 pt-6">
                  {p.href && (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-md border border-copper/50 bg-copper/10 px-3 py-1.5 font-mono text-[0.76rem] text-copper-bright transition-colors hover:bg-copper/20"
                    >
                      {p.hrefLabel ?? "Visit"} ↗
                    </a>
                  )}
                  {p.ref === "U1" && (
                    <a
                      href="/gerbers/diyspo2-gerbers.zip"
                      className="rounded-md border border-line px-3 py-1.5 font-mono text-[0.76rem] text-ink-dim transition-colors hover:border-line-bright hover:text-ink"
                    >
                      Download gerbers ↓
                    </a>
                  )}
                  {p.tools.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[0.72rem] text-ink-faint"
                    >
                      #{t.replace(/\s+/g, "")}
                    </span>
                  ))}
                </div>
              </div>

              {p.featured && p.ref === "U1" && (
                <div className="relative mt-6 md:mt-0">
                  <div className="absolute -inset-2 rounded-xl bg-[radial-gradient(circle_at_30%_20%,rgba(200,132,63,0.14),transparent_60%)]" />
                  <div className="relative overflow-hidden rounded-lg border border-line-bright bg-bg p-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/board/spo2-board-top.svg"
                      alt="Top copper render of the DIY SpO2 pulse-oximeter PCB, showing the MAX30102 module, SSD1306 OLED, Arduino Uno footprint, and button matrix on a black board with gold traces."
                      width={755}
                      height={510}
                      className="h-auto w-full"
                    />
                    <p className="mt-2 text-center font-mono text-[0.68rem] uppercase tracking-[0.2em] text-ink-faint">
                      Top copper · rendered from my gerbers
                    </p>
                  </div>
                </div>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
