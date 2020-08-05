import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  br + br, .line-break + .line-break { display: none; }

  .line-break {
    display: block !important;
    margin: 14px 0;
  }

  [hidden] {
    display: none;
  }

  [hide] {
    opacity: 0;
    visibility: hidden;
  }

  .MuiDrawer-paper {
    background: #eaefff;
    background: -webkit-linear-gradient(to bottom, #7394a9, #f0f3ff);
    background: linear-gradient(to bottom, #7394a9, #f0f3ff);
  }

  body {
    font-family: Ubuntu, "BPG Nino Mtavruli", sans-serif;
    padding: 0;
    margin:  0;
    color: #242A33;
    background-color: #fafafa;
  }

  .app-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .contents-wrapper {
    flex-grow: 1;
  }

  a {
    text-decoration: none;
  }

  a:-webkit-any-link:active {
    color: unset;
  }

  img {
    user-select: none;
  }
  
  h1, h2, h3, h4, h5, h6, p {
    margin-block-start: unset;
    margin-block-end: unset;
    margin-inline-start: unset;
    margin-inline-end: unset;
    font-weight: unset;
  }

  * {
    box-sizing: border-box;
    transition: 0.2s;
    
    ::-webkit-scrollbar-track {
      border-radius: 0;
      background-color: #f9f9f97a;
    }

    ::-webkit-scrollbar {
      width: 8px;
      background-color: #d9d9eb;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 3px;
      background-color: #d1d1de;
    }
  }

  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%; 
    scroll-behavior: smooth;
  }

  strong, b {
    font-weight: 500;
  }

  img {
    border-style: none;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; 
    font-size: 100%; 
    line-height: 1.15; 
    margin: 0; 
  }

  button,
  input { 
    overflow: visible;
  }

  button,
  select { 
    text-transform: none;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  .content-section {
    margin-bottom: 20px;
  }
`;
