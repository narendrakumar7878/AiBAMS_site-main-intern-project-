import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      filter: {
        'green': 'brightness(0) saturate(100%) invert(69%) sepia(100%) saturate(2000%) hue-rotate(60deg) brightness(1.2) contrast(1)',
        'orange': 'brightness(0) saturate(100%) invert(75%) sepia(100%) saturate(2000%) hue-rotate(15deg) brightness(1.1) contrast(1)',
        'purple': 'brightness(0) saturate(100%) invert(50%) sepia(100%) saturate(2000%) hue-rotate(260deg) brightness(1.1) contrast(1)',
        'blue': 'brightness(0) saturate(100%) invert(65%) sepia(100%) saturate(1500%) hue-rotate(140deg) brightness(1) contrast(1)',
        'indigo': 'brightness(0) saturate(100%) invert(41%) sepia(100%) saturate(1500%) hue-rotate(210deg) brightness(1) contrast(1)',
        'red': 'brightness(0) saturate(100%) invert(35%) sepia(100%) saturate(2000%) hue-rotate(345deg) brightness(1.2) contrast(1)',
      },


      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        chart: {
          "1": "var(--chart-1)",
          "2": "var(--chart-2)",
          "3": "var(--chart-3)",
          "4": "var(--chart-4)",
          "5": "var(--chart-5)",
        },
        sidebar: {
          DEFAULT: "var(--sidebar-background)",
          foreground: "var(--sidebar-foreground)",
          primary: "var(--sidebar-primary)",
          "primary-foreground": "var(--sidebar-primary-foreground)",
          accent: "var(--sidebar-accent)",
          "accent-foreground": "var(--sidebar-accent-foreground)",
          border: "var(--sidebar-border)",
          ring: "var(--sidebar-ring)",
        },
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
        bounce: {
          '0%, 100%': {
            transform: 'translateY(0)'
          },
          '50%': {
            transform: 'translateY(-5px)'
          },
        }


        
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",

        // ✅ ADD THIS:
        "spin-slow": "spin 20s linear infinite",
        bounce: 'bounce 2s infinite',
      },
      // ✅ ADD THIS:
      dropShadow: {
        golden: "0 0 8px rgba(200,132,63,0.6)",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
