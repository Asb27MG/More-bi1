/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Obsidian Kinetic Evolved — surfaces
        surface: {
          DEFAULT: "#15121b",
          dim: "#15121b",
          bright: "#3b3742",
          lowest: "#100d16",
          low: "#1d1a23",
          card: "#1c1826",
          container: "#211e27",
          high: "#2c2832",
          highest: "#37333d",
          variant: "#37333d",
        },
        // Text on surface
        ink: {
          DEFAULT: "#e7e0ed",
          dim: "#cbc3d7",
          mute: "#958ea0",
        },
        // Structural lines
        line: {
          DEFAULT: "#2d2838",
          variant: "#494454",
          mute: "#37333d",
        },
        // Primary (Royal Blue)
        violet: {
          DEFAULT: "#4169e1",
          50: "#eef4ff",
          200: "#bed1ff",
          300: "#92b1ff",
          400: "#6f8dff",
          500: "#4169e1",
          600: "#3656c2",
          700: "#2c45a2",
          800: "#20347b",
          deep: "#142458",
        },
        // Tertiary (Amber)
        amber: {
          DEFAULT: "#ffb869",
          200: "#ffdcbb",
          400: "#ffb869",
          600: "#ca801e",
          800: "#673d00",
        },
        // States
        ok: "#a7f3d0",
        warn: "#ffb869",
        danger: "#ffb4ab",
      },
      fontFamily: {
        sans: [
          "Geist",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "sans-serif",
        ],
        display: ["Geist", "Inter", "sans-serif"],
        mono: ["Geist Mono", "JetBrains Mono", "ui-monospace", "monospace"],
      },
      fontSize: {
        // Mapped to the design system typography scale
        "headline-xl": ["48px", { lineHeight: "1.1", letterSpacing: "-0.04em", fontWeight: "800" }],
        "headline-lg": ["32px", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-lg-m": ["24px", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-md": ["20px", { lineHeight: "1.4", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "1.6" }],
        "body-md": ["16px", { lineHeight: "1.5" }],
        "label-bold": ["14px", { lineHeight: "1.0", fontWeight: "700" }],
        "code": ["14px", { lineHeight: "1.5" }],
      },
      borderRadius: {
        none: "0",
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
      borderWidth: {
        DEFAULT: "1px",
        2: "2px",
        3: "3px",
      },
      boxShadow: {
        // Hard-offset shadows — no blur
        "neo-sm": "3px 3px 0 0 #4169e1",
        "neo": "4px 4px 0 0 #4169e1",
        "neo-lg": "8px 8px 0 0 #4169e1",
        "neo-black": "4px 4px 0 0 #000000",
        "neo-black-lg": "8px 8px 0 0 #000000",
        "neo-amber": "4px 4px 0 0 #ffb869",
        "neo-line": "4px 4px 0 0 #2d2838",
        "neo-line-lg": "8px 8px 0 0 #2d2838",
        "neo-none": "0 0 0 0 #4169e1",
        "focus-ring": "0 0 0 2px #4169e1",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fade-in 0.8s ease-out forwards",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
        "marquee": "marquee 32s linear infinite",
      },
    },
  },
  plugins: [],
}
