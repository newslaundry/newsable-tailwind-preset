import type { Config } from "tailwindcss";

import { coloursPlugin } from "./plugins/colours";
import { scalingPlugin } from "./plugins/scaling";

/**
 * NewsAble Design System Tailwind CSS preset
 *
 * This preset includes colours, typography, spacing, contrast, animation, links and cursor plugins
 */
const newsableTailwindPreset = {
  darkMode: ["class", "[data-theme='dark']"],
  content: [],
  plugins: [scalingPlugin, coloursPlugin]
} satisfies Config;

export { newsableTailwindPreset };
