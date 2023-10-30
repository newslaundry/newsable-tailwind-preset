import plugin from "tailwindcss/plugin";

/**
 * A Tailwind CSS plugin that controls underlining of anchor elements
 *
 * @param options An object containing at least one theme object.
 * @returns A Tailwind CSS plugin with data set property support for underlined links
 */
export const linksPlugin = plugin(({ addBase }) => {
  addBase({
    ":root": {
      a: { color: "inherit", textDecoration: "inherit" },
      "a:hover": { textDecoration: "underline", textUnderlineOffset: "4px" }
    },
    '[data-links="underlined"]': {
      a: {
        color: "inherit",
        textDecoration: "underline",
        textUnderlineOffset: "4px"
      },
      "a:hover": { textDecoration: "underline", textUnderlineOffset: "4px" }
    }
  });
});
