import plugin from "tailwindcss/plugin";

/**
 * A Tailwind CSS plugin that swaps CSS colour variables for high contrast modes
 *
 * @param options An object containing at least one theme object.
 * @returns A Tailwind CSS plugin that controls colour variables for default and high contrast modes using prefers-contrast CSS and data set properties
 */
export const contrastPlugin = plugin(({ addBase }) => {
  addBase({
    ":root": {
      "@media (prefers-contrast: more)": {
        "--text-neutral-default": "var(--neutral-12)",
        "--text-neutral-muted": "var(--neutral-12)",
        "--text-accent-default": "var(--accent-12)",
        "--text-accent-muted": "var(--accent-12)",
        "--text-success-default": "var(--success-12)",
        "--text-success-muted": "var(--success-12)",
        "--text-attention-default": "var(--attention-12)",
        "--text-attention-muted": "var(--attention-12)",
        "--text-danger-default": "var(--danger-12)",
        "--text-danger-muted": "var(--danger-12)",
        "--background-neutral-default": "var(--neutral-1)",
        "--background-neutral-muted": "var(--neutral-1)",
        "--background-accent-default": "var(--accent-1)",
        "--background-accent-muted": "var(--accent-1)",
        "--background-success-default": "var(--success-1)",
        "--background-success-muted": "var(--success-1)",
        "--background-attention-default": "var(--attention-1)",
        "--background-attention-muted": "var(--attention-1)",
        "--background-danger-default": "var(--danger-1)",
        "--background-danger-muted": "var(--danger-1)",
        "--border-neutral-muted": "var(--neutral-8)",
        "--border-neutral-default": "var(--neutral-8)",
        "--border-neutral-dark": "var(--neutral-8)",
        "--border-accent-muted": "var(--accent-8)",
        "--border-accent-default": "var(--accent-8)",
        "--border-accent-dark": "var(--accent-8)",
        "--border-success-muted": "var(--success-8)",
        "--border-success-default": "var(--success-8)",
        "--border-success-dark": "var(--success-8)",
        "--border-attention-muted": "var(--attention-8)",
        "--border-attention-default": "var(--attention-8)",
        "--border-attention-dark": "var(--attention-8)",
        "--border-danger-muted": "var(--danger-8)",
        "--border-danger-default": "var(--danger-8)",
        "--border-danger-dark": "var(--danger-8)",
        "--ring-neutral": "var(--neutral-8)",
        "--ring-accent": "var(--accent-8)",
        "--ring-success": "var(--success-8)",
        "--ring-attention": "var(--attention-8)",
        "--ring-danger": "var(--danger-8)",
        "--separator-neutral": "var(--neutral-7)",
        "--separator-accent": "var(--accent-7)",
        "--separator-success": "var(--success-7)",
        "--separator-attention": "var(--attention-7)",
        "--separator-danger": "var(--danger-7)",
        "--component-background-neutral-default": "var(--neutral-3)",
        "--component-background-neutral-hover": "var(--neutral-4)",
        "--component-background-neutral-pressed": "var(--neutral-5)",
        "--component-background-neutral-dark": "var(--neutral-6)",
        "--component-background-neutral-solid-default": "var(--neutral-9)",
        "--component-background-neutral-solid-hover": "var(--neutral-10)",
        "--component-background-accent-default": "var(--accent-3)",
        "--component-background-accent-hover": "var(--accent-4)",
        "--component-background-accent-pressed": "var(--accent-5)",
        "--component-background-accent-dark": "var(--accent-6)",
        "--component-background-accent-solid-default": "var(--accent-9)",
        "--component-background-accent-solid-hover": "var(--accent-10)",
        "--component-background-success-default": "var(--success-3)",
        "--component-background-success-hover": "var(--success-4)",
        "--component-background-success-pressed": "var(--success-5)",
        "--component-background-success-dark": "var(--success-6)",
        "--component-background-success-solid-default": "var(--success-9)",
        "--component-background-success-solid-hover": "var(--success-10)",
        "--component-background-attention-default": "var(--attention-3)",
        "--component-background-attention-hover": "var(--attention-4)",
        "--component-background-attention-pressed": "var(--attention-5)",
        "--component-background-attention-dark": "var(--attention-6)",
        "--component-background-attention-solid-default": "var(--attention-9)",
        "--component-background-attention-solid-hover": "var(--attention-10)",
        "--component-background-danger-default": "var(--danger-3)",
        "--component-background-danger-hover": "var(--danger-4)",
        "--component-background-danger-pressed": "var(--danger-5)",
        "--component-background-danger-dark": "var(--danger-6)",
        "--component-background-danger-solid-default": "var(--danger-9)",
        "--component-background-danger-solid-hover": "var(--danger-10)"
      }
    },
    '[data-high-contrast="enabled"]': {
      "--text-neutral-default": "var(--neutral-12)",
      "--text-neutral-muted": "var(--neutral-12)",
      "--text-accent-default": "var(--accent-12)",
      "--text-accent-muted": "var(--accent-12)",
      "--text-success-default": "var(--success-12)",
      "--text-success-muted": "var(--success-12)",
      "--text-attention-default": "var(--attention-12)",
      "--text-attention-muted": "var(--attention-12)",
      "--text-danger-default": "var(--danger-12)",
      "--text-danger-muted": "var(--danger-12)",
      "--background-neutral-default": "var(--neutral-1)",
      "--background-neutral-muted": "var(--neutral-1)",
      "--background-accent-default": "var(--accent-1)",
      "--background-accent-muted": "var(--accent-1)",
      "--background-success-default": "var(--success-1)",
      "--background-success-muted": "var(--success-1)",
      "--background-attention-default": "var(--attention-1)",
      "--background-attention-muted": "var(--attention-1)",
      "--background-danger-default": "var(--danger-1)",
      "--background-danger-muted": "var(--danger-1)",
      "--border-neutral-muted": "var(--neutral-8)",
      "--border-neutral-default": "var(--neutral-8)",
      "--border-neutral-dark": "var(--neutral-8)",
      "--border-accent-muted": "var(--accent-8)",
      "--border-accent-default": "var(--accent-8)",
      "--border-accent-dark": "var(--accent-8)",
      "--border-success-muted": "var(--success-8)",
      "--border-success-default": "var(--success-8)",
      "--border-success-dark": "var(--success-8)",
      "--border-attention-muted": "var(--attention-8)",
      "--border-attention-default": "var(--attention-8)",
      "--border-attention-dark": "var(--attention-8)",
      "--border-danger-muted": "var(--danger-8)",
      "--border-danger-default": "var(--danger-8)",
      "--border-danger-dark": "var(--danger-8)",
      "--ring-neutral": "var(--neutral-8)",
      "--ring-accent": "var(--accent-8)",
      "--ring-success": "var(--success-8)",
      "--ring-attention": "var(--attention-8)",
      "--ring-danger": "var(--danger-8)",
      "--separator-neutral": "var(--neutral-7)",
      "--separator-accent": "var(--accent-7)",
      "--separator-success": "var(--success-7)",
      "--separator-attention": "var(--attention-7)",
      "--separator-danger": "var(--danger-7)",
      "--component-background-neutral-default": "var(--neutral-3)",
      "--component-background-neutral-hover": "var(--neutral-4)",
      "--component-background-neutral-pressed": "var(--neutral-5)",
      "--component-background-neutral-dark": "var(--neutral-6)",
      "--component-background-neutral-solid-default": "var(--neutral-9)",
      "--component-background-neutral-solid-hover": "var(--neutral-10)",
      "--component-background-accent-default": "var(--accent-3)",
      "--component-background-accent-hover": "var(--accent-4)",
      "--component-background-accent-pressed": "var(--accent-5)",
      "--component-background-accent-dark": "var(--accent-6)",
      "--component-background-accent-solid-default": "var(--accent-9)",
      "--component-background-accent-solid-hover": "var(--accent-10)",
      "--component-background-success-default": "var(--success-3)",
      "--component-background-success-hover": "var(--success-4)",
      "--component-background-success-pressed": "var(--success-5)",
      "--component-background-success-dark": "var(--success-6)",
      "--component-background-success-solid-default": "var(--success-9)",
      "--component-background-success-solid-hover": "var(--success-10)",
      "--component-background-attention-default": "var(--attention-3)",
      "--component-background-attention-hover": "var(--attention-4)",
      "--component-background-attention-pressed": "var(--attention-5)",
      "--component-background-attention-dark": "var(--attention-6)",
      "--component-background-attention-solid-default": "var(--attention-9)",
      "--component-background-attention-solid-hover": "var(--attention-10)",
      "--component-background-danger-default": "var(--danger-3)",
      "--component-background-danger-hover": "var(--danger-4)",
      "--component-background-danger-pressed": "var(--danger-5)",
      "--component-background-danger-dark": "var(--danger-6)",
      "--component-background-danger-solid-default": "var(--danger-9)",
      "--component-background-danger-solid-hover": "var(--danger-10)"
    },
    '[data-high-contrast="disabled"]': {
      "--text-neutral-default": "var(--neutral-12)",
      "--text-neutral-muted": "var(--neutral-11)",
      "--text-accent-default": "var(--accent-12)",
      "--text-accent-muted": "var(--accent-11)",
      "--text-success-default": "var(--success-12)",
      "--text-success-muted": "var(--success-11)",
      "--text-attention-default": "var(--attention-12)",
      "--text-attention-muted": "var(--attention-11)",
      "--text-danger-default": "var(--danger-12)",
      "--text-danger-muted": "var(--danger-11)",
      "--background-neutral-default": "var(--neutral-1)",
      "--background-neutral-muted": "var(--neutral-2)",
      "--background-accent-default": "var(--accent-1)",
      "--background-accent-muted": "var(--accent-2)",
      "--background-success-default": "var(--success-1)",
      "--background-success-muted": "var(--success-2)",
      "--background-attention-default": "var(--attention-1)",
      "--background-attention-muted": "var(--attention-2)",
      "--background-danger-default": "var(--danger-1)",
      "--background-danger-muted": "var(--danger-2)",
      "--border-neutral-muted": "var(--neutral-6)",
      "--border-neutral-default": "var(--neutral-7)",
      "--border-neutral-dark": "var(--neutral-8)",
      "--border-accent-muted": "var(--accent-6)",
      "--border-accent-default": "var(--accent-7)",
      "--border-accent-dark": "var(--accent-8)",
      "--border-success-muted": "var(--success-6)",
      "--border-success-default": "var(--success-7)",
      "--border-success-dark": "var(--success-8)",
      "--border-attention-muted": "var(--attention-6)",
      "--border-attention-default": "var(--attention-7)",
      "--border-attention-dark": "var(--attention-8)",
      "--border-danger-muted": "var(--danger-6)",
      "--border-danger-default": "var(--danger-7)",
      "--border-danger-dark": "var(--danger-8)",
      "--ring-neutral": "var(--neutral-7)",
      "--ring-accent": "var(--accent-7)",
      "--ring-success": "var(--success-7)",
      "--ring-attention": "var(--attention-7)",
      "--ring-danger": "var(--danger-7)",
      "--separator-neutral": "var(--neutral-6)",
      "--separator-accent": "var(--accent-6)",
      "--separator-success": "var(--success-6)",
      "--separator-attention": "var(--attention-6)",
      "--separator-danger": "var(--danger-6)",
      "--component-background-neutral-default": "var(--neutral-3)",
      "--component-background-neutral-hover": "var(--neutral-4)",
      "--component-background-neutral-pressed": "var(--neutral-5)",
      "--component-background-neutral-dark": "var(--neutral-6)",
      "--component-background-neutral-solid-default": "var(--neutral-9)",
      "--component-background-neutral-solid-hover": "var(--neutral-10)",
      "--component-background-accent-default": "var(--accent-3)",
      "--component-background-accent-hover": "var(--accent-4)",
      "--component-background-accent-pressed": "var(--accent-5)",
      "--component-background-accent-dark": "var(--accent-6)",
      "--component-background-accent-solid-default": "var(--accent-9)",
      "--component-background-accent-solid-hover": "var(--accent-10)",
      "--component-background-success-default": "var(--success-3)",
      "--component-background-success-hover": "var(--success-4)",
      "--component-background-success-pressed": "var(--success-5)",
      "--component-background-success-dark": "var(--success-6)",
      "--component-background-success-solid-default": "var(--success-9)",
      "--component-background-success-solid-hover": "var(--success-10)",
      "--component-background-attention-default": "var(--attention-3)",
      "--component-background-attention-hover": "var(--attention-4)",
      "--component-background-attention-pressed": "var(--attention-5)",
      "--component-background-attention-dark": "var(--attention-6)",
      "--component-background-attention-solid-default": "var(--attention-9)",
      "--component-background-attention-solid-hover": "var(--attention-10)",
      "--component-background-danger-default": "var(--danger-3)",
      "--component-background-danger-hover": "var(--danger-4)",
      "--component-background-danger-pressed": "var(--danger-5)",
      "--component-background-danger-dark": "var(--danger-6)",
      "--component-background-danger-solid-default": "var(--danger-9)",
      "--component-background-danger-solid-hover": "var(--danger-10)"
    }
  });
});
