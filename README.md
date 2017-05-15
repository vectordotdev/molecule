# molecule

:atom_symbol: – :atom: Modern starter kit for React + Electron projects.

## Features

- :couple: Builds target both web and native
- :atom: React
- :recycle: Redux
- :blue_book: Redux Saga
- :link: React Router
- :fire: Hot reloading
- :computer: Webpack dashboard
- :zap: Optimized webpack builds (DLL and CommonsChunks)
- :anchor: Immutable.js
- :six: ES6/ES2015
- :curly_loop: Yarn
- :lipstick: Styled Components
- :black_joker: Testing with Jest
- :file_folder: Feature based structure
- :wrench: absolute project imports `import Navigation from 'components/Navigation'`

## Getting Started
1. `yarn`
2. `yarn dev`
3. `yarn electron` (different tab)

## Inspiration (Major thanks to these awesome projects/contributors)

- https://github.com/mxstbr/react-boilerplate/
- https://github.com/stsiarzhanau/webpack-react-redux-starter/
- https://github.com/chentsulin/electron-react-boilerplate
- https://github.com/facebookincubator/create-react-app

## Hot reloading in action (web & native simultaneously)
<a href="https://github.com/timberio/molecule">
  <img alt="hot reloading" src="http://g.recordit.co/iHAbdaTheO.gif" height="300px" />
</a>

## TODO

- [] jest tests
- [] don't include node_modules in electron builds
- [] look into electron-builder for multi platform builds
- [] hot reloading sagas/reducers
- [] electron cross process communication (https://github.com/samiskin/redux-electron-store)
- [] provide stack examples + installation
- [] iterate over deve dependencies instead of using explicit vendors.js