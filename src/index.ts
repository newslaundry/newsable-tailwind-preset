import type { Config } from "tailwindcss";

import { animationPlugin } from "./plugins/animation";
import { coloursPlugin } from "./plugins/colours";
import { contrastPlugin } from "./plugins/contrast";
import { cursorsPlugin } from "./plugins/cursors";
import { linksPlugin } from "./plugins/links";
import { scalingPlugin } from "./plugins/scaling";
import { spacingPlugin } from "./plugins/spacing";
import { typographyPlugin } from "./plugins/typography";

/**
 * NewsAble Design System Tailwind CSS preset
 *
 * This preset includes colours, typography, spacing, contrast, animation, links and cursor plugins
 */
const newsableTailwindPreset = {
  content: [],
  plugins: [
    scalingPlugin,
    coloursPlugin,
    contrastPlugin,
    typographyPlugin,
    spacingPlugin,
    cursorsPlugin,
    linksPlugin,
    animationPlugin
  ]
} satisfies Config;

export { newsableTailwindPreset };
