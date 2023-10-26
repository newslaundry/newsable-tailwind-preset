import type { Config } from "tailwindcss";

import { coloursPlugin } from "./plugins/colours";
import { scalingPlugin } from "./plugins/scaling";
import { typographyPlugin } from "./plugins/typography";

/**
 * NewsAble Design System Tailwind CSS preset
 *
 * This preset includes colours, typography, spacing, contrast, animation, links and cursor plugins
 */
const newsableTailwindPreset = {
  content: [],
  plugins: [scalingPlugin, coloursPlugin, typographyPlugin]
} satisfies Config;

export { newsableTailwindPreset };
