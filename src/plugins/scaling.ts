import plugin from "tailwindcss/plugin";

export const scalingPlugin = plugin(({ addBase }) => {
  addBase({
    ':root,:root:where([data-spacing="default"])': { "--scaling": "1" },
    ':where([data-scaling="compact"])': { "--scaling": "0.9" },
    ':where([data-scaling="comfortable"])': { "--scaling": "1.1" }
  });
});
