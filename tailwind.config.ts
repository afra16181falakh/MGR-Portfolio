import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#172432",
        paper: "#F7F6F2",
        bronze: "#A68A64",
        line: "#E5E3DC",
      },
    },
  },
  plugins: [],
};

export default config;
