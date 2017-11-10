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
    font-family: 'Avenir', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  #root {
    min-height: 100%;
    min-width: 100%;
  }
  p,
  label {
    line-height: 1.5em;
  }
`;
