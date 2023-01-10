import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    /*MAIN-COLORS*/
    --color-white: hsl(0deg 0% 100%);
    --color-background: hsl(220deg 20% 97%);

    --color-blue-primary: hsl(225deg 80% 56%);
    --color-blue-secondary: hsl(209deg 96% 67%);

    --color-confirm: hsl(81deg 76% 40%);
    --color-cancel: hsl(4deg 80% 48%);

    /*TYPOGRAPHY*/
    --app-font-family: 'Plus Jakarta Sans', sans-serif;
    --font-weight-bold: 700;
    --font-weight-semi-bold: 600;
    --font-weight-medium: 500;
    --font-weight-normal: 500;

    /*SPACING*/
    --spacing-veritical: 32px;
    --spacing-horizontal: 64px;

    --small-spacing-veritical: 25px;
    --small-spacing-horizontal: 32px;

    /*Other Reusables*/
    --border-radius-general: 10px;
  }

  /* Use a more-intuitive box-sizing model. */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  /* Remove default margin and padding */
  * {
    margin: 0;
    padding: 0;
  }

  /* Allow percentage-based heights in the application, main background color, font-family*/
  html, body, #root {
    width: 100%;
    height: 100%;

    font-family: var(--app-font-family);
    background-color: var(--color-background);
  }

  /* Add accessible line-height, Improve text rendering */
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  /* Remove built-in form typography styles */
  input, button, textarea, select {
    font: inherit;
  }

  /* Create a root stacking context */
  #root {
    isolation: isolate;
  }
`