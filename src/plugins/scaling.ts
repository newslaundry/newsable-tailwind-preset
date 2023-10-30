import plugin from "tailwindcss/plugin";

/**
 * A Tailwind CSS plugin that defines root scaling variable
 *
 * @param options An object containing at least one theme object.
 * @returns A Tailwind CSS plugin that defines root scaling variable
 */
export const scalingPlugin = plugin(({ addBase }) => {
  addBase({
    ':root,:root:where([data-spacing="default"])': { "--scaling": "1" },
    ':where([data-scaling="compact"])': { "--scaling": "0.9" },
    ':where([data-scaling="comfortable"])': { "--scaling": "1.1" }
  });
});
