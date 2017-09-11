import { injectGlobal } from "styled-components";

// Global styles
const resetCSS = () => injectGlobal`
  html {
    font-size: 62.5%;
    box-sizing: border-box;
    height: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    font-size: 1.6rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    line-height: 1;
    margin: 0;
    padding: 0;
    height: 100%;
  }
  a,
  button {
    text-decoration: none;
    color: inherit;
    font: inherit;
    letter-spacing: inherit;
    border: 0;
    background: none;
    cursor: pointer;
  }
  @import url('https://fonts.googleapis.com/css?family=Lora:400,700');
  
`;

export default resetCSS;
