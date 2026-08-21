import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        line: "var(--line)",
        copper: "var(--copper)",
        "copper-bright": "var(--copper-bright)",
        phosphor: "var(--phosphor)",
        ink: "var(--text)",
        "ink-dim": "var(--text-dim)",
        "ink-faint": "var(--text-faint)",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        shell: "1180px",
      },
    },
  },
  plugins: [],
};

export default config;
