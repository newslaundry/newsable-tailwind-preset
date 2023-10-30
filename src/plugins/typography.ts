import plugin from "tailwindcss/plugin";

/**
 * A Tailwind CSS plugin for typography
 *
 * @param options An object containing at least one theme object.
 * @returns A Tailwind CSS plugin that sets font size, font weight, line height and letter spacing using data set properties
 */
export const typographyPlugin = plugin(
  ({ addBase, addComponents }) => {
    addBase({
      ':root,:root:where([data-font-size="medium"])': {
        "--typography-font-size-xs": "calc(12px * var(--scaling))",
        "--typography-font-size-sm": "calc(14px * var(--scaling))",
        "--typography-font-size-base": "calc(16px * var(--scaling))",
        "--typography-font-size-lg": "calc(18px * var(--scaling))",
        "--typography-font-size-xl": "calc(20px * var(--scaling))",
        "--typography-font-size-2xl": "calc(24px * var(--scaling))",
        "--typography-font-size-3xl": "calc(28px * var(--scaling))",
        "--typography-font-size-4xl": "calc(36px * var(--scaling))",
        "--typography-font-size-5xl": "calc(60px * var(--scaling))",
        "--typography-font-weight-light": "300",
        "--typography-font-weight-regular": "400",
        "--typography-font-weight-medium": "500",
        "--typography-font-weight-semibold": "600",
        "--typography-font-weight-bold": "700",
        "--typography-font-weight-extrabold": "800",
        "--typography-font-weight-black": "900",
        "--typography-line-height-xs": "calc(16px * var(--scaling))",
        "--typography-line-height-sm": "calc(20px * var(--scaling))",
        "--typography-line-height-base": "calc(24px * var(--scaling))",
        "--typography-line-height-lg": "calc(26px * var(--scaling))",
        "--typography-line-height-xl": "calc(28px * var(--scaling))",
        "--typography-line-height-2xl": "calc(30px * var(--scaling))",
        "--typography-line-height-3xl": "calc(32px * var(--scaling))",
        "--typography-line-height-4xl": "calc(40px * var(--scaling))",
        "--typography-line-height-5xl": "calc(60px * var(--scaling))",
        "--typography-heading-line-height-h6": "calc(24px * var(--scaling))",
        "--typography-heading-line-height-h5": "calc(28px * var(--scaling))",
        "--typography-heading-line-height-h4": "calc(30px * var(--scaling))",
        "--typography-heading-line-height-h3": "calc(32px * var(--scaling))",
        "--typography-heading-line-height-h2": "calc(40px * var(--scaling))",
        "--typography-heading-line-height-h1": "calc(60px * var(--scaling))",
        "--typography-letter-spacing-xs": "0.0025em",
        "--typography-letter-spacing-sm": "0em",
        "--typography-letter-spacing-base": "0em",
        "--typography-letter-spacing-lg": "-0.0025em",
        "--typography-letter-spacing-xl": "-0.005em",
        "--typography-letter-spacing-2xl": "-0.00625em",
        "--typography-letter-spacing-3xl": "-0.0075em",
        "--typography-letter-spacing-4xl": "-0.01em",
        "--typography-letter-spacing-5xl": "-0.025em"
      },
      '[data-font-size="small"]': {
        "--typography-font-size-xs": "calc(10px * var(--scaling))",
        "--typography-font-size-sm": "calc(12px * var(--scaling))",
        "--typography-font-size-base": "calc(14px * var(--scaling))",
        "--typography-font-size-lg": "calc(16px * var(--scaling))",
        "--typography-font-size-xl": "calc(18px * var(--scaling))",
        "--typography-font-size-2xl": "calc(20px * var(--scaling))",
        "--typography-font-size-3xl": "calc(24px * var(--scaling))",
        "--typography-font-size-4xl": "calc(28px * var(--scaling))",
        "--typography-font-size-5xl": "calc(36px * var(--scaling))",
        "--typography-font-weight-light": "300",
        "--typography-font-weight-regular": "400",
        "--typography-font-weight-medium": "500",
        "--typography-font-weight-semibold": "600",
        "--typography-font-weight-bold": "700",
        "--typography-font-weight-extrabold": "800",
        "--typography-font-weight-black": "900",
        "--typography-line-height-xs": "calc(12px * var(--scaling))",
        "--typography-line-height-sm": "calc(16px * var(--scaling))",
        "--typography-line-height-base": "calc(20px * var(--scaling))",
        "--typography-line-height-lg": "calc(24px * var(--scaling))",
        "--typography-line-height-xl": "calc(26px * var(--scaling))",
        "--typography-line-height-2xl": "calc(28px * var(--scaling))",
        "--typography-line-height-3xl": "calc(30px * var(--scaling))",
        "--typography-line-height-4xl": "calc(32px * var(--scaling))",
        "--typography-line-height-5xl": "calc(40px * var(--scaling))",
        "--typography-heading-line-height-h6": "calc(24px * var(--scaling))",
        "--typography-heading-line-height-h5": "calc(26px * var(--scaling))",
        "--typography-heading-line-height-h4": "calc(28px * var(--scaling))",
        "--typography-heading-line-height-h3": "calc(30px * var(--scaling))",
        "--typography-heading-line-height-h2": "calc(32px * var(--scaling))",
        "--typography-heading-line-height-h1": "calc(40px * var(--scaling))",
        "--typography-letter-spacing-xs": "0.00125em",
        "--typography-letter-spacing-sm": "0.0025em",
        "--typography-letter-spacing-base": "0em",
        "--typography-letter-spacing-lg": "0em",
        "--typography-letter-spacing-xl": "-0.0025em",
        "--typography-letter-spacing-2xl": "-0.005em",
        "--typography-letter-spacing-3xl": "-0.00625em",
        "--typography-letter-spacing-4xl": "-0.0075em",
        "--typography-letter-spacing-5xl": "-0.01em"
      },
      '[data-font-size="large"]': {
        "--typography-font-size-xs": "calc(14px * var(--scaling))",
        "--typography-font-size-sm": "calc(16px * var(--scaling))",
        "--typography-font-size-base": "calc(18px * var(--scaling))",
        "--typography-font-size-lg": "calc(20px * var(--scaling))",
        "--typography-font-size-xl": "calc(24px * var(--scaling))",
        "--typography-font-size-2xl": "calc(28px * var(--scaling))",
        "--typography-font-size-3xl": "calc(36px * var(--scaling))",
        "--typography-font-size-4xl": "calc(48px * var(--scaling))",
        "--typography-font-size-5xl": "calc(64px * var(--scaling))",
        "--typography-font-weight-light": "300",
        "--typography-font-weight-regular": "400",
        "--typography-font-weight-medium": "500",
        "--typography-font-weight-semibold": "600",
        "--typography-font-weight-bold": "700",
        "--typography-font-weight-extrabold": "800",
        "--typography-font-weight-black": "900",
        "--typography-line-height-xs": "calc(20px * var(--scaling))",
        "--typography-line-height-sm": "calc(24px * var(--scaling))",
        "--typography-line-height-base": "calc(26px * var(--scaling))",
        "--typography-line-height-lg": "calc(28px * var(--scaling))",
        "--typography-line-height-xl": "calc(30px * var(--scaling))",
        "--typography-line-height-2xl": "calc(32px * var(--scaling))",
        "--typography-line-height-3xl": "calc(40px * var(--scaling))",
        "--typography-line-height-4xl": "calc(56px * var(--scaling))",
        "--typography-line-height-5xl": "calc(72px * var(--scaling))",
        "--typography-heading-line-height-h6": "calc(28px * var(--scaling))",
        "--typography-heading-line-height-h5": "calc(30px * var(--scaling))",
        "--typography-heading-line-height-h4": "calc(32px * var(--scaling))",
        "--typography-heading-line-height-h3": "calc(40px * var(--scaling))",
        "--typography-heading-line-height-h2": "calc(56px * var(--scaling))",
        "--typography-heading-line-height-h1": "calc(72px * var(--scaling))",
        "--typography-letter-spacing-xs": "0em",
        "--typography-letter-spacing-sm": "0em",
        "--typography-letter-spacing-base": "-0.0025em",
        "--typography-letter-spacing-lg": "-0.005em",
        "--typography-letter-spacing-xl": "-0.00625em",
        "--typography-letter-spacing-2xl": "-0.0075em",
        "--typography-letter-spacing-3xl": "-0.01em",
        "--typography-letter-spacing-4xl": "-0.025em",
        "--typography-letter-spacing-5xl": "-0.05em"
      }
    });

    addComponents({
      ".typography-heading-styles-h1": {
        lineHeight: "var(--typography-heading-line-height-h1)",
        fontWeight: "var(--typography-font-weight-bold)",
        letterSpacing: "var(--typography-letter-spacing-5xl)",
        fontSize: "var(--typography-font-size-5xl)",
        color: "inherit",
        "@media screen and (max-width: 1024px)": {
          fontSize: "var(--typography-font-size-4xl)",
          letterSpacing: "var(--typography-letter-spacing-4xl)",
          lineHeight: "var(--typography-heading-line-height-h2)"
        }
      },
      ".typography-heading-styles-h2": {
        lineHeight: "var(--typography-heading-line-height-h2)",
        fontWeight: "var(--typography-font-weight-bold)",
        letterSpacing: "var(--typography-letter-spacing-4xl)",
        fontSize: "var(--typography-font-size-4xl)",
        color: "inherit",
        "@media screen and (max-width: 1024px)": {
          fontSize: "var(--typography-font-size-3xl)",
          letterSpacing: "var(--typography-letter-spacing-3xl)",
          lineHeight: "var(--typography-heading-line-height-h3)"
        }
      },
      ".typography-heading-styles-h3": {
        lineHeight: "var(--typography-heading-line-height-h3)",
        fontWeight: "var(--typography-font-weight-bold)",
        letterSpacing: "var(--typography-letter-spacing-3xl)",
        fontSize: "var(--typography-font-size-3xl)",
        color: "inherit",
        "@media screen and (max-width: 1024px)": {
          fontSize: "var(--typography-font-size-2xl)",
          letterSpacing: "var(--typography-letter-spacing-2xl)",
          lineHeight: "var(--typography-heading-line-height-h4)"
        }
      },
      ".typography-heading-styles-h4": {
        lineHeight: "var(--typography-heading-line-height-h4)",
        fontWeight: "var(--typography-font-weight-semibold)",
        letterSpacing: "var(--typography-letter-spacing-2xl)",
        fontSize: "var(--typography-font-size-2xl)",
        color: "inherit",
        "@media screen and (max-width: 1024px)": {
          fontSize: "var(--typography-font-size-xl)",
          letterSpacing: "var(--typography-letter-spacing-xl)",
          lineHeight: "var(--typography-heading-line-height-h5)"
        }
      },
      ".typography-heading-styles-h5": {
        lineHeight: "var(--typography-heading-line-height-h5)",
        fontWeight: "var(--typography-font-weight-semibold)",
        letterSpacing: "var(--typography-letter-spacing-xl)",
        fontSize: "var(--typography-font-size-xl)",
        color: "inherit",
        "@media screen and (max-width: 1024px)": {
          fontSize: "var(--typography-font-size-lg)",
          letterSpacing: "var(--typography-letter-spacing-lg)",
          lineHeight: "var(--typography-heading-line-height-h6)"
        }
      },
      ".typography-heading-styles-h6": {
        lineHeight: "var(--typography-heading-line-height-h6)",
        fontWeight: "var(--typography-font-weight-semibold)",
        letterSpacing: "var(--typography-letter-spacing-lg)",
        fontSize: "var(--typography-font-size-lg)",
        color: "inherit"
      },
      ".typography-paragraph-styles": {
        lineHeight: "var(--typography-line-height-base)",
        fontWeight: "var(--typography-font-weight-regular)",
        letterSpacing: "var(--typography-letter-spacing-base)",
        fontSize: "var(--typography-font-size-base)",
        color: "inherit"
      }
    });
  },
  {
    theme: {
      extend: {
        fontSize: {
          xs: "var(--typography-font-size-xs)",
          sm: "var(--typography-font-size-sm)",
          base: "var(--typography-font-size-base)",
          lg: "var(--typography-font-size-lg)",
          xl: "var(--typography-font-size-xl)",
          "2xl": "var(--typography-font-size-2xl)",
          "3xl": "var(--typography-font-size-3xl)",
          "4xl": "var(--typography-font-size-4xl)",
          "5xl": "var(--typography-font-size-5xl)"
        }
      }
    }
  }
);
