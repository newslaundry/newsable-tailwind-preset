import plugin from "tailwindcss/plugin";

/**
 * A Tailwind CSS plugin for support of bigger cursors
 *
 * @param options An object containing at least one theme object.
 * @returns A Tailwind CSS plugin that swaps default and pointer cursors using data set properties
 */
export const cursorsPlugin = plugin(
  ({ addBase }) => {
    addBase({
      ':root,:root:where([data-cursor="normal"])': {
        "--cursor-default": "default",
        "--cursor-pointer": "pointer"
      },
      '[data-cursor="bigger"]': {
        "--cursor-default": 'url("../assets/pointer.svg"), default',
        "--cursor-pointer": 'url("../assets/hand-finger.svg"), pointer'
      }
    });
  },
  {
    theme: {
      extend: {
        cursor: {
          default: "var(--cursor-default)",
          pointer: "var(--cursor-pointer)"
        }
      }
    }
  }
);
