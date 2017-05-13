/* eslint-disable no-console */
/* eslint-disable comma-dangle */

import chalk from 'chalk';

console.log(chalk.cyan(
`
=>  Starting development server to serve files from ${chalk.white.bold('src')} folder...
=>  Mocha and ESLint will run on every file save...
=>  Live reload with Hot Module Replacement, React Hot Loader 3, Browsersync...

:)  Enjoy!
`
));
