/** Shared keyframes + utility classes for The Art of AI Agents legacy workshop UI */
export const ART_OF_AI_AGENTS_LEGACY_STYLES = `
  :root {
    --bg: #0a0a0f;
    --fg: #e0e0e0;
    --accent1: #7f5af0;
    --accent2: #ff6ac1;
    --accent3: #42d392;
  }

  @keyframes glitch {
    0% { transform: translateX(0); }
    25% { transform: translateX(-2px); }
    50% { transform: translateX(2px); }
    75% { transform: translateX(-1px); }
    100% { transform: translateX(0); }
  }

  @keyframes gradientBorder {
    0% { border-image: linear-gradient(45deg, var(--accent1), var(--accent2), var(--accent3)) 1; }
    50% { border-image: linear-gradient(225deg, var(--accent1), var(--accent2), var(--accent3)) 1; }
    100% { border-image: linear-gradient(45deg, var(--accent1), var(--accent2), var(--accent3)) 1; }
  }

  .glitch-text {
    position: relative;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }

  .glitch-text::before,
  .glitch-text::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--bg);
  }

  .glitch-text::before {
    left: 2px;
    text-shadow: -2px 0 var(--accent1);
    animation: glitch 0.3s infinite;
  }

  .glitch-text::after {
    left: -2px;
    text-shadow: 2px 0 var(--accent2);
    animation: glitch 0.3s infinite reverse;
  }

  .neon-border {
    border: 1px solid transparent;
    animation: gradientBorder 4s linear infinite;
  }

  .neon-gradient {
    background: linear-gradient(45deg, var(--accent1), var(--accent2));
    background-size: 200% 200%;
    animation: gradient 4s ease infinite;
  }

  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  .noise-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    mix-blend-mode: overlay;
    opacity: 0.05;
    pointer-events: none;
  }
`
