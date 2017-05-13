# webpack-react-redux-starter

:rocket: Modern starter kit for React projects.

## Features

- **Every** dependency in project devDependencies is listed in the README and has a description with it's **purpose** explanation
- Not too complex, but at the same time not oversimplified
- Only cutting-edge technologies
- Great developer experience: 
  - **Advanced live reload** (with **Hot Module Replacement** :heart:) on every file save
  - **Linting** JavaScript code with **[ESLint](http://eslint.org/)** on every file save
  - **Linting** stylesheets with **[stylelint](https://stylelint.io/)** on every file save
  - **Unit testing** with **[Mocha](https://mochajs.org/)** on every file save
  - **Syncronized browser testing support** with **[Browsersync](https://browsersync.io/)**
- Assets pipeline

> *NOTE: Not intended for isomorphic apps!*

> *NOTE: Work in progress. See [TODO](#todo)*

## Prerequisites

You should have [Node.js](https://nodejs.org/en/) installed. Optionally you can install and use [Yarn](https://yarnpkg.com/) as package manager, but it's possible to use **npm** instead, which ships with **Node.js**.


## Installation

- Clone this repo with **`git clone https://github.com/stsiarzhanau/webpack-react-redux-starter`** or (if you don't use Git) just click on the green **Clone or download** button and then on **Download ZIP**
- Unzip downloaded file (if you have used 2nd option)
- Open terminal and [go to the project's root folder](http://www.wikihow.com/Change-Directories-in-Command-Prompt)  (**webpack-react-redux-starter**)
- Run **`yarn install`** (or **`npm install`**) to install project dependencies

## Usage

- Run **`npm run dev -s`** (or **`yarn run dev`**) to start development server

  > *NOTE: The `-s` flag is optional. It enables silent mode, which suppresses unnecessary messages from npm, and so we get cleaner output.*
  
    
- Open **Layout.js** file in **src/components/Layout** folder and follow instructions to see how lint and syntax errors are being handled and watch **Hot Module Replacement** in action
- Open **Layout.test.js** file in **src/components/Layout** folder and follow instructions to see how Mocha reports about failed unit tests
- Open **Layout.css** file in **src/components/Layout** folder and play with CSS to see how style changes are hot reloaded on file save without full page refresh
- Stop development server.

  >  *NOTE: In most cases it could be done by hitting `Ctrl+C` in the terminal*


- Run **`npm run build -s`** (or **`yarn run build`**) to bundle our project, then look at terminal output. If build was successful, Browsersync server will automatically start to serve files from **dist** folder, so we can test production version of our app




## What's Inside?

| **Package** | **Description / Purpose** |
| ----------- | --------------- |
|  | **Module Bundler / Development Server** |
| [webpack](https://github.com/webpack/webpack) | It's an incredibly configurable multi-purpose tool which do a lot of useful things. Out of the box it just bundles our JavaScript and JSON files (though do it extremely well). But with the help of **plugins** and **loaders** it can handle other file types too. So we can easily implement full **assets pipeline**. Also, in most cases, with the help of **npm scripts** it can be a good substitution for **task runners** (such as **gulp** or **Grunt**). Moreover, when combined with additional packages (such as [webpack-dev-server](https://github.com/webpack/webpack-dev-server), [express](https://github.com/expressjs/express) or **browser-sync** (with the help of **webpack-dev-middleware** in the last two cases)), it can provide us with super handy development environment. |
| [browser-sync](https://github.com/BrowserSync/browser-sync) | This package provides us with a server which we use to serve our files during development. It also starts to serve our production files from **dist** folder when we successfully bundle our project with **`npm run build -s`** (or **`yarn run build`**) command. The main advantage of using **browser-sync** over servers like **express** is that it can sync multiple browsers. It means that, when we have multiple browsers opened and make some interactions in one of them (like scrolling, for example), we can see the result of that interaction in other browsers too (which is really great feature for **cross-browser testing**). Moreover, it can sync browsers not only on the same machine but also on all devices connected to the same network. So, we can, for example, test how our responsive design looks simultaneously on desktop, laptop, as well as on different tablets and phones. |
| [webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware) | This package is a glue between **browser-sync** (or any other server that we use instead) and **webpack**. One of it's cool features is that files emitted from webpack during development aren't being written on disk and can be served directly from the memory, which is much faster approach.|
| [webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware) | This bit of software allows us to use (with **webpack-dev-middleware**) really awesome webpack feature: **Hot Module Replacement (HMR)**. It's sort of better **live reload**. When we update some code and save our file, we can immediately see those changes in browser. Moreover, it happens without full page reload, cause only changes that affect updated module (file) are being injected. Another cool feature that **webpack-dev-middleware** gives to us is an overlay with error messages which appears in our browser window when any error occurs. So there's no need to keep our terminal and devTools console constantly opened.|
| [connect-history-api-fallback](https://github.com/bripkens/connect-history-api-fallback) | This tiny middleware provides us with fallback to *index.html* for applications that are using the **HTML 5 history API**. [More on this.](https://github.com/bripkens/connect-history-api-fallback#introduction) |
| [react-hot-loader](https://github.com/gaearon/react-hot-loader) | React Hot Loader (RHL) is a plugin that allows React components to be live reloaded without the loss of state. It works with webpack (as **loader**) and other bundlers that support both **Hot Module Replacement (HMR)** and Babel plugins. |
|  | **Babel** |
| [babel-cli](https://github.com/babel/babel/tree/master/packages/babel-cli) | Babel command line. Contains a bunch of other packages, including [babel-node](https://www.npmjs.com/package/babel-node) that allow us to use `babel-node` command in our **npm scripts**. To have `babel-node` command in our disposal is necessary if we want to use **ES6 modules** syntax (like `import webpack from 'webpack;`) in our scripts that will run in **Node.js** environment (like scripts located in **tools** and **webpackConfig** folders). |
| [babel-core](https://github.com/babel/babel/tree/master/packages/babel-core) | Babel compiler core. This package is required to other Babel related packages work properly. *NOTE: babel-core is already included into babel-cli, but installed separately to be independent from it and explicit.* |
| [babel-preset-latest](https://github.com/babel/babel/tree/master/packages/babel-preset-latest) | Out of the box (if we didn't provide any **plugin** or **preset**) Babel will just parse our ES6+ code to some structure known as **Abstract Syntax Tree (AST)** and then generate it back. Output code will be the same as input code (ES6+). As we want to transform ES6+ to ES5 we need to include **transformers (plugins)** that will transform ES6+ code parsed by Babel compiler before it will be generated back. **Preset** is a collection of plugins. **babel-preset-latest** includes all plugins that provide transformations for standardized ES6+ features (that are in ES2015, ES2016, ES2017... specs). [More about presets and plugins.](https://babeljs.io/docs/plugins/) |
| [babel-preset-stage-3](https://github.com/babel/babel/tree/master/packages/babel-preset-stage-3) | JavaScript constantly evolves. New proposed features before coming a part of a release (such as ES6/ES2015) should be approved. **babel-preset-stage-3** includes plugins for proposed features that have a complete spec and initial browser implementations. So we can safely use them in production. [More about proposed features.](https://github.com/tc39/proposals) |
| [babel-preset-react](https://github.com/babel/babel/tree/master/packages/babel-preset-react) | Preset of Babel plugins which allow to transform syntaxes that are not part of JavaScript itself, but are commonly used in React applications (such as **JSX** or **flow**), to ES5.|
| [babel-register](https://github.com/babel/babel/tree/master/packages/babel-register) | We need this package to run our Mocha tests that include **ES6 modules** syntax. Mocha runs in Node.js environment and Node.js (at least Node.js v6 and below) doesn't support **ES6 modules**. So we have to use Babel. With **babel-register** Mocha is able to compile ES6+ into ES5 (including **ES6 modules** syntax) on the fly. |
| [babel-plugin-react-css-modules](https://github.com/gajus/babel-plugin-react-css-modules) | This plugin is very handy when we style our project using [CSS Modules](https://github.com/css-modules/css-modules). **CSS modules** are great, but the way we write class names for our components using them is not very convinient. **babel-plugin-react-css-modules** adds some syntactic sugar and also works around some other **CSS Modules** limitations. To know more, look at plugin README, it's very well written. *NOTE: You must install babel-plugin-react-css-modules as a DIRECT dependency of the project.* |
| [babel-loader](https://github.com/babel/babel-loader) | Loader module for webpack. With this package webpack is able to transform ES6+ to ES5 while it bundles our files. It happens not only when we make production build with **`npm run build -s`** (or **`yarn run build`**) command, but everytime we save our *.js / .jsx* files during development (thanks to our development server). |
|  | **webpack Plugins** |
| [html-webpack-plugin](https://github.com/ampedandwired/html-webpack-plugin) | To serve our files server needs **index.html** file which contains `<script src="...">` tag(s) pointing to our bundle(s). But there are different webpack usage scenarios when bundle name(s) are being changed during every compilation. **html-webpack-plugin** basically do the following. It takes provided template and generates new **index.html** file with correct bundle name(s) every time we compile our project. This plugin also has a lot of additional options and [third party addons](https://github.com/ampedandwired/html-webpack-plugin#third-party-addons) which extend it's basic functionality. |
|  | **ESLint** |
| [eslint](https://github.com/eslint/eslint) | ESLint is a tool to check our JavaScript coding style. It not only helps to keep our code clean and consistent, but prevents many possible errors which can break our app. To check any given file(s) you can run **`eslint`** command with path(s) to the file(s) and optional arguments (see [ESLint CLI reference](http://eslint.org/docs/user-guide/command-line-interface)) from command line. If your code has any stylistic issues you'll see ESLint messages in your console window. This starter kit also has preconfigured `eslint` **npm script**. If you run **`npm run eslint`** (or **`yarn run eslint`**) command it will check all files located in **src**, **tools**, and **webpackConfig** folders, as well as in the root of your project. This project sticks to [Airbnb Style Guide](https://github.com/airbnb/javascript) (with the help of **eslint-config-airbnb** package), but you can easily override any [rules](http://eslint.org/docs/rules/) in **.eslintrc.js** file (which is located in the project root) or just use another style guide that better fits your needs and habits. It also worth mentioning that ESLint itself (not only it's rules) is [highly configurable](http://eslint.org/docs/user-guide/configuring) tool. |
| [babel-eslint](https://github.com/babel/babel-eslint) | Alternative [parser](http://eslint.org/docs/user-guide/configuring#specifying-parser) for ESLint that allows you to lint ALL valid Babel code. We don't need to use **babel-eslint** if we are using ES2015 (ES6), ES2016 (ES7) or ES2017 (ES8). ESLint actually supports ES2015/ES2016/ES2017, JSX, and *object rest/spread* by default now. But as we use **babel-preset-stage-3** (and probably you'll want to try other experimental features) I've included this package into the project. |
| [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) | Generally it's just a set of rules and preconfigured [parser options](http://eslint.org/docs/user-guide/configuring#specifying-parser-options) (we can look at which parser options it includes [here](https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/index.js)). **NOTE: This package relies on rules that are defined in *eslint* package itself as well as in *eslint-plugin-import*, *eslint-plugin-jsx-a11y* and *eslint-plugin-react* packages. So it's important to have the CORRECT VERSIONS of those packages installed! See *eslint-config-airbnb* package README for instructions.** |
| [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import) | This ESLint plugin intends to support linting of **ES2015+ (ES6+) import/export syntax**, and prevent issues with misspelling of file paths and import names. |
| [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y) | This ESLint plugin allows us to check if our JSX code meets accessibility standards ([WAI-ARIA](https://www.w3.org/WAI/intro/aria)) so our app will be more accessible to people with disabilities. |
| [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) | This package adds React specific linting rules to ESLint. |
| [eslint-loader](https://github.com/MoOx/eslint-loader) | **Loader** for webpack. With the help of this package it's not necessary to manually run **`eslint`** command every time when we want to check our files. With **eslint-loader** our files will be checked on every file save during development and also when we bundle our project with **`npm run build -s`** (or **`yarn run build`**) command. If our JavaScript code has any style issues, linter messages will be shown in the console window. As alternative you can use [eslint-watch](https://github.com/rizowski/eslint-watch) package. |
| [eslint-import-resolver-webpack](https://github.com/benmosher/eslint-plugin-import/tree/master/resolvers/webpack) | When we bundle our code with webpack it's possible to simplify file paths in our **ES6 import statements** (due to resolver library that webpack uses under the hood, and `resolve` configuration object settings in webpack config). For example, we can omit the file extension and part of the file path (just use `import MyComponent from 'MyComponent'` instead of `import MyComponent from './src/components/MyComponent.js'`). But with such approach we'll end up with lint errors from **eslint-plugin-import**, cause it will think that we probably misspell path to our module. **eslint-import-resolver-webpack** provides **eslint-plugin-import** with information about our `resolve` settings to prevent false-positive lint errors and warnings. **NOTE: We need to configure this package settings in our *.eslintrc.js* file (see package README).** |
|  | **Unit Testing** |
| [jsdom](https://github.com/tmpvar/jsdom) | React code is intended to run in browsers. Our test framework (Mocha) is able to run tests in browsers. Also we can use Mocha with **Karma** test runner that can run tests in real browsers like Chrome or headless browsers (browsers without graphical interface) like PhantomJS and do many other cool stuff. But testing in browsers is relatively slow (partly because of slow speed of **Document Object Model (DOM)** interface). **jsdom** is a lightweight and fast JavaScript implementation of DOM for Node.js which allows our Mocha tests to run much faster. |
| [mocha](https://github.com/mochajs/mocha) | Mocha is a JavaScript test framework. It's very popular testing tool and have a lot of [features](https://mochajs.org/#features). Though, there are good alternatives to Mocha. For example [AVA](https://github.com/avajs/ava) and [Jest](https://github.com/facebook/jest). |
| [chai](https://github.com/chaijs/chai) | Mocha has no built-in **assertion library**. But it allows us to use any **assertion library** that we want. We'll use here **chai** as it provides a lot of assertions out of the box, has many plugins (extensions), and can be used both for **Behaviour Driven Development (BDD)** and **Test Driven Development (TDD)**. There are many alternatives for **chai**. For example [mjackson/expect](https://github.com/mjackson/expect). |
| [sinon](https://github.com/sinonjs/sinon) | Sinon is a library that provides **test spies**, **stubs** and **mocks** for testing JavaScript code and works with any unit testing framework. [More about spies, stubs and mocks](https://www.sitepoint.com/sinon-tutorial-javascript-testing-mocks-spies-stubs/). |
| [sinon-chai](https://github.com/domenic/sinon-chai) | This package provides a set of custom assertions for using **sinon** with **chai**. |
| [react-addons-test-utils](https://www.npmjs.com/package/react-addons-test-utils) | React has it's own specific features (like **Virtual DOM**). So, to test React components we need specific test utilities. **react-addons-test-utils** is an addition to React library that provides us with such utilities. In this starter we will use another testing utility instead (called **enzyme**) but still need this package to be installed in order that **enzyme** can work. |
| [enzyme](https://github.com/airbnb/enzyme) | This package is another React-specific testing utility. It's built on top of **react-addons-test-utils**, but with Enzyme it's much easier to assert, manipulate, and traverse React components' output. Enzyme's API is meant to be intuitive and flexible by mimicking jQuery's API for DOM manipulation and traversal.|
| [chai-enzyme](https://github.com/producthunt/chai-enzyme) | This **chai** plugin provides additional assertions for testing React components with Enzyme. |
|  | **Assets/Styles** |
| [file-loader](https://github.com/webpack-contrib/file-loader) | This loader helps us to handle assets (like images, custom fonts, video, etc.). When in our code we refer to some asset (for example *logo.png*), **file-loader** copies that *logo.png* file into output directory (**dist**) and creates an entry with path to this file inside of resulting bundle (**bundle.js**). So, our production code in resulting bundle, which needs the *logo.png*, knows where to find that image. **file-loader** can be configured through options. To read more about possible options see package README. |
| [url-loader](https://github.com/webpack-contrib/url-loader) | **url-loader** is a wrapper around the **file-loader**. If file size of some asset is smaller than a specified limit (in bytes) this loader can just inline it into resulting bundle as **base64 encoded Data URI**. Otherwise file will be automatically processed by the **file-loader**. Such an approach allows us to save some additional HTTP requests, but also increases resulting bundle size. So we should specify the right limit to observe balance. We can pass to **url-loader** all the options of **file-loader** and, of course, **limit** option. |
| [svg-url-loader](https://github.com/bhovhannes/svg-url-loader) | This loader behaves like **url-loader** but inlines SVG files as **utf-8 encoded Data URI** (rather than base64 encoded). It allows to reduce the size of inlined SVGs. [More info](https://css-tricks.com/probably-dont-base64-svg/). |
| [react-svg-loader](https://github.com/boopathi/react-svg-loader) | This webpack loader inlines SVG files as React components, so we can style them in CSS and perform different interactions. |
| [style-loader](https://github.com/webpack-contrib/style-loader) | Basically this loader does the following. It takes project's CSS code and injects it into the resulting bundle together with some JavaScript code that wraps that CSS into `<style>` tag and then dynamically (on runtime) injects that `<style>` tag into markup (**index.html**). Such approach is good for development, as it allows styles to be hot reloaded without full page refresh (thanks to **Hot Module Replacement**). For production build it's better to use **extract-text-webpack-plugin** (which generates separate CSS bundle(s)) instead of the **style-loader**. Also it's worth mentioning that **style-loader** should be used together with other loaders (usually **css-loader**) that will actually transform CSS, so it could be injected into resulting bundle. **style-loader** is just responsible for injecting itself. **style-loader** have some options. To read more about possible options see package README. |
| [css-loader](https://github.com/webpack-contrib/css-loader) | It's possible just to convert CSS into string (with [raw-loader](https://github.com/webpack-contrib/raw-loader)) and then pass it to **style-loader**. The latter will inject that CSS string into JS bundle and our CSS will work as expected. But if our CSS code contains some "calls" to assets inside CSS files (like `@import 'style.css'` or `background: url(path/to/asset.js)`) those assets will be unaccessible. It happens cause they were not actually required by webpack and so neither copied into otput directory nor inlined into resulting bundle. **css-loader** solves that problem. It finds all those `@import`'s and `url()`'s in CSS code and **require** assets they point to. Then appropriate loaders (like **url-loader** or **file-loader**) do their job (see above) and we have our assets inlined into JS bundle or copied into **dist** folder. We can also extend **css-loader** functionality (through it's options). For example, we can enable [CSS Modules](https://github.com/css-modules/css-modules) support or minification. To read more about possible options see package README. If you are not familiar with **CSS Modules** take a look at [this](http://andrewhfarmer.com/what-are-css-modules/) article and also at [this](http://andrewhfarmer.com/css-modules-by-example/) one. |
| [extract-text-webpack-plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin) | This plugin is useful for production builds. Instead of inlining CSS code into resulting JavaScript bundle (like **style-loader** does) it creates separated CSS bundle file(s). If our total stylesheet volume is big, it will be faster because the CSS bundle is loaded in parallel to the JS bundle. |
| [postcss-loader](https://github.com/postcss/postcss-loader) | This loader allows us to process our stylesheets with [PostCSS](http://postcss.org/) plugins. It reads plugins configuration from **postcss.config.js** file. |
| [imagemin-webpack-plugin](https://github.com/Klathmon/imagemin-webpack-plugin) | This plugin is useful for production builds. It allows us to minify (compress) our image assets and SVG's. Under the hood it uses a bunch of [imagemin](https://github.com/imagemin/imagemin) plugins. To read more about included plugins and their options see package README. |
|  | **PostCSS Plugins** |
| [autoprefixer](https://github.com/postcss/autoprefixer) | The most popular **PostCSS** plugin. It automatically adds **vendor prefixes** to CSS rules using data from **Can I Use** website. NOTE: We can list browsers to support in **browserslist** configuration file. |
| [lost](https://github.com/peterramsing/lost) | This PostCSS plugin provides us with a powerful and easy to use grid system. [More info.](http://lostgrid.org/docs.html#getting-started) |
|  | **stylelint** |
| [stylelint-webpack-plugin](https://github.com/JaKXz/stylelint-webpack-plugin) | This webpack plugin allows us to lint our stylesheets when we make our production build and also on every file save during development. If our stylesheets code have any stylistic issues, linter messages will be shown in the console window. This package includes [stylelint](https://github.com/stylelint/stylelint) itself. |
| [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) | The standard shareable config for **stylelint**. It's recommended by **stylelint** team as foundation for your own config. |
|  | **Misc** |
| [cross-env](https://github.com/kentcdodds/cross-env) | In some of our **npm scripts** we need to set environment variables. For example, NODE_ENV, which we use to tell webpack and friends in which environment (development or production) given command should run. But in different OS we have to set it in a slightly different way. For UNIX based OS we shoud use syntax like `NODE_ENV=production`. For Windows - `set NODE_ENV=production`. **cross-env** package allows us to set environment variables in Unix style and have it work on Windows too. |
| [npm-run-all](https://github.com/mysticatea/npm-run-all) | This package allows us to run multiple **npm scripts** in parallel or sequential (and do it in a cross-platform way). For example, we can write `run-p serve:src test:watch` instead of `npm run serve:src & test:watch`. So, with **npm-run-all** our **npm scripts** not only look more concise, but work fine on Windows (which treats **`&`** operator in a different way than UNIX based OS). |
| [rimraf](https://github.com/isaacs/rimraf) | This bit of software provides us with `rimraf` command (the cross-platform equivalent to Unix `rm -rf` command, which allows us to remove folders with all their contents). |
| [chalk](https://github.com/chalk/chalk) | This package allows us to choose colors for *console.log* messages that some of our scripts in **tools** folder print to terminal. |





## Acknowledgements

This project is inspired by Cory House [coryhouse/react-slingshot](https://github.com/coryhouse/react-slingshot)

Sample app initial implementation is taken from Dan Abramov [gaearon/react-hot-boilerplate](https://github.com/gaearon/react-hot-boilerplate/tree/next)

Some ideas are taken from following starter kits:
- Michael Pevzner [mihap/webpack-react-hot-bolerplate](https://github.com/mihap/webpack-react-hot-bolerplate)
- Dmitriy Haponov [sunstorymvp/playground](https://github.com/sunstorymvp/playground)

Juho Vepsäläinen ["SurviveJS - Webpack"](http://survivejs.com/webpack/introduction/) book was a huge help.


## TODO

- [x] Choose example app for initial implementation
- [x] Configure webpack for development
  - [x] Set up Babel
  - [x] Choose development server configuration
  - [x] Set up development config, tools and development related npm scripts
- [x] Configure webpack for production (initial implementation)
  - [x] Set up production config, tools and production related npm scripts
- [x] Set up ESLint
- [x] Set up test environment
- [x] Add README (for initial implementation)
- [x] Implement assets pipeline
- [x] Choose methodology for styling
- [x] Set up stylelint
- [ ] Extend PostCSS config (add more plugins)
- [ ] Replace example app with more advanced one that will utilize such technologies as:
  - [ ] React Router v3 or v4
  - [ ] Redux
  - [ ] redux-saga
- [ ] Write test suites that will demonstrate all test tools, which are used in the project, in action
- [ ] Tweak webpack production config:
  - [ ] Set up additional optimization plugins
  - [ ] Choose and add tools for bundle analysing

