import chalk from 'chalk';
import fs from 'fs-extra';
import { DIST, PUBLIC, INDEX } from '../webpackConfig/paths';

export function copyPublicFolder() {
  fs.copySync(PUBLIC, DIST, {
    dereference: true,
    filter: file => file !== INDEX
  });
  console.log(chalk.green(`=>  [\u2713] Synced files from public to dist`));
}