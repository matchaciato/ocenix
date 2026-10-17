export interface DocContentData {
  title: string
  description: string
  badge?: 'New' | 'Updated' | 'Beta'
  content: string
}

export const docsContentMap: Record<string, DocContentData> = {
  introduction: {
    title: 'Introduction',
    description: 'Design philosophy, core architecture, and the native Ocenix UI component ecosystem.',
    content: `
## Design Philosophy

**Ocenix UI** is designed to deliver modern web interfaces with a **Full Native** approach: semantic HTML5, pure CSS3, and lightweight Vanilla JavaScript without framework or runtime lock-in.

We combine the greatest strengths of the modern web:

1. **Native-First Architecture**: Components execute seamlessly in plain HTML, Laravel, PHP, WordPress, Astro, or any modern framework template.
2. **WAI-ARIA Accessibility**: Standard keyboard navigation and screen reader semantics are built directly into native attributes (\`role\`, \`aria-expanded\`, \`aria-checked\`, \`aria-modal\`).
3. **Hardware-Accelerated CSS Motion**: Dynamic animations and transitions (Bento Grid, Border Beam, Marquee, Meteors) are powered by GPU CSS transforms.
4. **Zero-FOUC Dark Mode**: Instant, flicker-free dark mode switching powered by semantic CSS custom properties.

## Three Ways to Use Ocenix UI

1. **Via CDN**: Add the stylesheet \`<link>\` and script \`<script>\` directly to your HTML document.
2. **Download Asset Files**: Save \`ocenix.min.css\` and \`ocenix.min.js\` directly into your static assets directory.
3. **Modular Copy-Paste**: On every component documentation page, copy separate **HTML**, **CSS**, and **JS** tabs according to your project requirements.
`,
  },
  installation: {
    title: 'Installation & Setup',
    description: 'Complete guide to integrating native HTML, CSS, and JavaScript into your web project.',
    content: `
## Full Native Architecture

Ocenix UI requires no npm package installation (\`pnpm add\`). You can directly link the stylesheet and optional JavaScript runtime in your web project.

## Method 1: CDN Integration (Instant & Production-Ready)

Insert the stylesheet link and script tags inside the \`<head>\` tag of your HTML document:

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Web Project</title>

  <!-- Ocenix UI CSS -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ocenix/ui/dist/ocenix.min.css" />

  <!-- Ocenix UI JavaScript (Optional for interactive components) -->
  <script src="https://cdn.jsdelivr.net/npm/@ocenix/ui/dist/ocenix.min.js" defer></script>
</head>
<body class="bg-background text-foreground">
  <button type="button" class="ox-btn ox-btn-primary">
    Hello Ocenix UI
  </button>
</body>
</html>
\`\`\`

## Method 2: Local Static File Download

If you work offline or host your own assets:
1. Download \`ocenix.min.css\` and place it in your \`/css/ocenix.min.css\` folder.
2. Download \`ocenix.min.js\` and place it in your \`/js/ocenix.min.js\` folder.
3. Link both files in your HTML template:

\`\`\`html
<link rel="stylesheet" href="./css/ocenix.min.css" />
<script src="./js/ocenix.min.js" defer></script>
\`\`\`

## Method 3: Copy HTML, CSS & JS Tabs per Component

Every component in Ocenix UI documentation features separate tabs for:
* **HTML**: Semantic markup structure and ARIA accessibility attributes.
* **CSS**: Clean styling and keyframe animations customizable through design tokens.
* **JS**: Vanilla JavaScript to handle interactivity (such as dialogs, accordions, tabs, and switches).
`,
  },
  theming: {
    title: 'Theming & Tokens',
    description: 'Customizing semantic color variables, border radiuses, and typography scales.',
    content: `
## Semantic Design Token Structure

Ocenix UI separates color tokens into an abstract semantic layer so that light and dark modes toggle instantaneously:

| Semantic Token | Usage Description |
| :--- | :--- |
| \`--background\` | Main canvas background color. |
| \`--foreground\` | Primary text and content color. |
| \`--card\` | Surface color for cards, panels, and modals. |
| \`--primary\` | Accent color for buttons and primary actions. |
| \`--muted\` | Secondary background and subtle text. |
| \`--destructive\` | Error states, validation failures, and destructive actions. |

## Border Radius Tokens

Control component corner curvature centrally using the \`--radius\` custom property:
* \`sm\`: 0.25rem (4px)
* \`md\`: 0.375rem (6px)
* \`lg\`: 0.5rem (8px) – Default standard
`,
  },
  'dark-mode': {
    title: 'Dark Mode Integration',
    description: 'Flicker-free (Zero-FOUC) dark mode architecture with system preference detection and localStorage persistence.',
    content: `
## Understanding FOUC in Production

Most dark mode implementations suffer from **Flash of Unstyled Color (FOUC)** because client-side JavaScript reads stored preferences after the browser has already initiated page rendering.

## The Ocenix UI Zero-FOUC Solution

Place an inline blocking script directly inside the \`<head>\` tag of your \`index.html\` before stylesheets and scripts render:

\`\`\`html
<script>
  (function() {
    try {
      var storageKey = 'ocenix-ui-theme';
      var stored = localStorage.getItem(storageKey);
      var mql = window.matchMedia('(prefers-color-scheme: dark)');
      var isDark = stored === 'dark' || (!stored && mql.matches);
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch (e) {}
  })();
</script>
\`\`\`
`,
  },
  accessibility: {
    title: 'Accessibility Standards',
    description: 'Commitment to WAI-ARIA guidelines, visible focus rings, and full keyboard navigation.',
    content: `
## Accessibility Principles

Every component in Ocenix UI adheres to the following accessibility standards:

1. **High-Contrast Focus Rings**: All interactive controls feature visible outline rings when navigated via keyboard.
2. **Automated ARIA Semantics**: Native usage of \`role="switch"\`, \`role="dialog"\`, \`aria-checked\`, and \`aria-expanded\`.
3. **Reduced Motion**: For users with motion sensitivities (\`prefers-reduced-motion\`), CSS transitions and animations are automatically reduced.

## Standard Keyboard Navigation

* \`Tab\` / \`Shift + Tab\`: Move focus forward and backward across elements.
* \`Enter\` / \`Space\`: Trigger button clicks or toggle switch state.
* \`Escape\`: Dismiss mobile navigation drawers, dialog modals, or popovers.
`,
  },
  'tokens/colors': {
    title: 'Colors Palette',
    description: 'Semantic neutral palettes, primary accents, and status indicators.',
    content: `
## Semantic Color System

Neutral zinc and slate color palettes deliver optimal readability and WCAG AA contrast ratios:

| Color | Light Variant | Dark Variant | Intended Role |
| :--- | :--- | :--- | :--- |
| **Canvas** | #ffffff | #09090b | Main page background |
| **Card** | #ffffff | #121215 | Elevated container surfaces |
| **Primary** | #09090b | #fafafa | Primary action buttons |
| **Border** | #e4e4e7 | #27272a | Component borders and input outlines |
| **Destructive** | #ef4444 | #ef4444 | Error badges and destructive actions |
`,
  },
}
