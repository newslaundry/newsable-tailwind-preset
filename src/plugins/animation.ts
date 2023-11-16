import plugin from "tailwindcss/plugin";

/**
 * A Tailwind CSS plugin that controls animation duration
 *
 * @param options An object containing at least one theme object.
 * @returns A Tailwind CSS plugin that sets animation duration value using data set properties
 */
export const animationPlugin = plugin(
  ({ addBase }) => {
    addBase({
      ":root": {
        "--animation-timing-default": "200ms",
        "@media (prefers-reduced-motion)": {
          "--animation-timing-default": "0ms"
        }
      },
      '[data-reduced-motion="enabled"]': {
        "--animation-timing-default": "0ms"
      },
      '[data-reduced-motion="disabled"]': {
        "--animation-timing-default": "200ms"
      }
    });
  },
  {
    theme: {
      extend: {
        transitionDuration: {
          default: "var(--animation-timing-default)"
        }
      }
    }
  }
);
