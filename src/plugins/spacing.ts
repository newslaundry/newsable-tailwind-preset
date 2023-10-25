import plugin from "tailwindcss/plugin";

export const spacingPlugin = plugin(
  ({ addBase, addUtilities }) => {
    addBase({
      ':root:where([data-spacing="default"])': {
        "--space-xxs": "calc(4px * var(--scaling))",
        "--space-xs": "calc(8px * var(--scaling))",
        "--space-sm": "calc(12px * var(--scaling))",
        "--space-base": "calc(16px * var(--scaling))",
        "--space-lg": "calc(24px * var(--scaling))",
        "--space-xl": "calc(32px * var(--scaling))",
        "--space-2xl": "calc(40px * var(--scaling))",
        "--space-3xl": "calc(48px * var(--scaling))",
        "--space-4xl": "calc(64px * var(--scaling))"
      },
      ':where([data-spacing="compact"])': {
        "--space-xxs": "calc(2px * var(--scaling))",
        "--space-xs": "calc(4px * var(--scaling))",
        "--space-sm": "calc(8px * var(--scaling))",
        "--space-base": "calc(12px * var(--scaling))",
        "--space-lg": "calc(16px * var(--scaling))",
        "--space-xl": "calc(24px * var(--scaling))",
        "--space-2xl": "calc(32px * var(--scaling))",
        "--space-3xl": "calc(40px * var(--scaling))",
        "--space-4xl": "calc(48px * var(--scaling))"
      },
      ':where([data-spacing="comfortable"])': {
        "--space-xxs": "calc(8px * var(--scaling))",
        "--space-xs": "calc(12px * var(--scaling))",
        "--space-sm": "calc(16px * var(--scaling))",
        "--space-base": "calc(24px * var(--scaling))",
        "--space-lg": "calc(32px * var(--scaling))",
        "--space-xl": "calc(40px * var(--scaling))",
        "--space-2xl": "calc(48px * var(--scaling))",
        "--space-3xl": "calc(60px * var(--scaling))",
        "--space-4xl": "calc(68px * var(--scaling))"
      }
    });

    addUtilities({
      ".component-padding-base": { "@apply px-space-sm py-space-xs": {} },
      ".component-padding-x-base": { "@apply px-space-sm": {} },
      ".component-padding-y-base": { "@apply py-space-xs": {} },
      ".component-padding-t-base": { "@apply pt-space-xs": {} },
      ".component-padding-b-base": { "@apply pb-space-xs": {} },
      ".component-padding-l-base": { "@apply pl-space-sm": {} },
      ".component-padding-r-base": { "@apply pr-space-sm": {} },
      ".component-padding-sm": { "@apply px-space-xs py-space-xxs": {} },
      ".component-padding-x-sm": { "@apply px-space-xs": {} },
      ".component-padding-y-sm": { "@apply py-space-xxs": {} },
      ".component-padding-t-sm": { "@apply pt-space-xxs": {} },
      ".component-padding-b-sm": { "@apply pb-space-xxs": {} },
      ".component-padding-l-sm": { "@apply pl-space-xs": {} },
      ".component-padding-r-sm": { "@apply pr-space-xs": {} },
      ".component-padding-lg": { "@apply px-space-base py-space-sm": {} },
      ".component-padding-x-lg": { "@apply px-space-base": {} },
      ".component-padding-y-lg": { "@apply py-space-sm": {} },
      ".component-padding-t-lg": { "@apply pt-space-sm": {} },
      ".component-padding-b-lg": { "@apply pb-space-sm": {} },
      ".component-padding-l-lg": { "@apply pl-space-base": {} },
      ".component-padding-r-lg": { "@apply pr-space-base": {} }
    });
  },
  {
    theme: {
      extend: {
        spacing: {
          "space-xxs": "var(--space-xxs)",
          "space-xs": "var(--space-xs)",
          "space-sm": "var(--space-sm)",
          "space-base": "var(--space-base)",
          "space-lg": "var(--space-lg)",
          "space-xl": "var(--space-xl)",
          "space-2xl": "var(--space-2xl)",
          "space-3xl": "var(--space-3xl)",
          "space-4xl": "var(--space-4xl)"
        }
      }
    }
  }
);
