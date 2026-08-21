export type Track = "Hardware" | "Software" | "Research" | "AI";

export interface Project {
  /** Reference designator — the site's structural signature, one per project */
  ref: string;
  title: string;
  tagline: string;
  description: string;
  track: Track;
  /** Short "spec sheet" facts shown on the card */
  specs: { label: string; value: string }[];
  tools: string[];
  /** Optional live link */
  href?: string;
  hrefLabel?: string;
  status: "Shipped" | "In progress" | "Prototype" | "Published";
  featured?: boolean;
}

export const projects: Project[] = [
  {
    ref: "U1",
    title: "DIY SpO₂ Pulse Oximeter",
    tagline: "A from-scratch pulse-oximeter shield, laid out in KiCad.",
    description:
      "A four-layer Arduino-based board that reads blood-oxygen and heart rate off a MAX30102 sensor and drives an SSD1306 OLED. I schematic-captured, placed, and routed the whole thing in KiCad — silkscreen refdes and all — then generated the manufacturing gerbers. The board render on this card is my actual copper.",
    track: "Hardware",
    specs: [
      { label: "Tool", value: "KiCad" },
      { label: "Sensor", value: "MAX30102" },
      { label: "Display", value: "SSD1306 OLED" },
      { label: "Layers", value: "4" },
    ],
    tools: ["KiCad", "PCB layout", "Gerber", "Embedded"],
    status: "Prototype",
    featured: true,
  },
  {
    ref: "U2",
    title: "Corebid",
    tagline: "Count the job. We build the bid.",
    description:
      "Estimating software for electrical contractors that turns a set of plans into a bid faster than doing it by hand. Built to take the grind out of takeoffs so shops can quote more work in less time.",
    track: "Software",
    specs: [
      { label: "Domain", value: "Electrical estimating" },
      { label: "Built with", value: "Cursor" },
      { label: "For", value: "Contractors" },
    ],
    tools: ["Cursor", "Web app", "Estimating"],
    href: "https://corebid.pro",
    hrefLabel: "corebid.pro",
    status: "In progress",
    featured: true,
  },
  {
    ref: "U3",
    title: "Prestio",
    tagline: "Smart Study Scheduler for students.",
    description:
      "A study app that plans your sessions around what you actually have to get done — deadlines, workload, and the hours you have left — so studying stops being guesswork. Built as a student, for students.",
    track: "Software",
    specs: [
      { label: "Category", value: "EdTech" },
      { label: "Built with", value: "Lovable" },
      { label: "Users", value: "Students" },
    ],
    tools: ["Lovable", "Web app", "Scheduling"],
    href: "https://prestio.ai",
    hrefLabel: "prestio.ai",
    status: "In progress",
  },
  {
    ref: "U4",
    title: "Electrical Estimator",
    tagline: "Pricing electrical work without the spreadsheet gymnastics.",
    description:
      "An estimating tool for electrical work that takes the components and labor of a job and returns a defensible cost. The groundwork that grew into how I think about tools for the trades.",
    track: "Software",
    specs: [
      { label: "Domain", value: "Cost estimation" },
      { label: "Focus", value: "Electrical" },
    ],
    tools: ["Estimating", "Automation"],
    status: "In progress",
  },
  {
    ref: "U5",
    title: "AI Receptionist",
    tagline: "A front desk that answers on the first ring.",
    description:
      "An AI receptionist that fields calls and messages, books appointments, and routes what it can't handle — so small businesses never miss the customer on the other end of the line.",
    track: "AI",
    specs: [
      { label: "Type", value: "Voice / chat agent" },
      { label: "For", value: "Small business" },
    ],
    tools: ["LLMs", "Automation", "Voice"],
    status: "Prototype",
  },
  {
    ref: "U6",
    title: "Control Systems in Agriculture",
    tagline: "A paper on closing the loop in the field.",
    description:
      "A research paper on applying control-systems theory to agriculture — how feedback, sensing, and automation can make growing more precise and less wasteful. Where the coursework met a problem I actually cared about.",
    track: "Research",
    specs: [
      { label: "Format", value: "Paper" },
      { label: "Field", value: "Control systems" },
    ],
    tools: ["Control theory", "Research", "Writing"],
    status: "Published",
  },
];

export const tracks: Track[] = ["Hardware", "Software", "AI", "Research"];
