/* eslint-disable */
import { injectGlobal } from 'styled-components';

injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
    -webkit-app-region: drag;
  }
  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  #root {
    min-height: 100%;
    min-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;