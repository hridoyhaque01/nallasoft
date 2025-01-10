import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "575px",
      },
      fontSize: {
        xxs: "0.625rem",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        text: {
          "50": "#fff",
          "100": "#F5F5F5",
          "200": "#E5E5E5",
          "300": "#D4D4D4",
          "400": "#A3A3A3",
          "500": "#737373",
          "600": "#525252",
          "700": "#404040",
          "800": "#262626",
          "900": "#171717",
          "950": "#0A0A0A",
        },
        neutral: {
          "50": "#FAFAFA",
          300: "#D9D9D9",
        },
        black: {
          "800": "#1E1E1E",
          "900": "#0A0A0A",
          "950": "#010101",
          DEFAULT: "#000000",
          rgb40: "rgba(10, 10, 10, 0.40)",
        },
        red: {
          "50": "#FFF2F1",
          "100": "#FFE1DF",
          "200": "#FFC8C5",
          "300": "#FFA29D",
          "400": "#FF6C64",
          "500": "#FF3B30",
          "600": "#ED2015",
          "700": "#C8170D",
          "800": "#A5170F",
          "900": "#881A14",
          "950": "#4B0804",
        },
        blue: {
          "50": "#EDFAFF",
          "100": "#D6F2FF",
          "200": "#B5EAFF",
          "300": "#83DFFF",
          "400": "#48CBFF",
          "500": "#1EACFF",
          "600": "#068EFF",
          "700": "#007AFF",
          "800": "#085DC5",
          "900": "#0D519B",
          "950": "#0E315D",
        },
        orange: {
          "50": "#FFFBEA",
          "100": "#FFF1C5",
          "200": "#FFE485",
          "300": "#FFCF46",
          "400": "#FFB91B",
          "500": "#FF9500",
          "600": "#E26E00",
          "700": "#BB4A02",
          "800": "#983908",
          "900": "#7C2F0B",
          "950": "#481600",
        },
        lime: {
          "50": "#F5FEE7",
          "100": "#E9FCCB",
          "200": "#D5F99D",
          "300": "#BAF264",
          "400": "#A0E635",
          "500": "#84CC16",
          "600": "#68A30D",
          "700": "#517C0F",
          "800": "#426212",
          "900": "#3A5314",
          "950": "#1E2E05",
        },
        teal: {
          "50": "#EEFFFC",
          "100": "#C6FFF8",
          "200": "#8EFFF2",
          "300": "#4DFBEB",
          "400": "#19E8DB",
          "500": "#00C7BE",
          "600": "#00A4A1",
          "700": "#028381",
          "800": "#086767",
          "900": "#0C5555",
          "950": "#003234",
        },
        status: {
          success: "#34C759",
          error: "#FF3B30",
          warning: "#FF9500",
          info: "#1EACFF",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        nav: "0px 0px 4px 0px #A0E635",
      },
      fontFamily: {
        chillax: ["var(--font-chillax)"],
        "sf-sans": ["var(--font-sf-sans)"],
        nunita: ["var(--font-nunita)"],
      },
      backgroundImage: {
        greenGradient:
          "linear-gradient(119deg, #A0E635 20.09%, #68A30D 79.34%)",
        greenGradientBdr:
          "linear-gradient(90deg, #000 0%, #A0E635 50%, #A0E635 100%)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.4s ease-out",
        "accordion-up": "accordion-up 0.4s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("daisyui")],
} satisfies Config;
