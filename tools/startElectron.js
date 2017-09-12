/*
 * this script tests the status of the dev server
 * before starting electron. Once the server is running,
 * electron will be run via `yarn electron`
*/
const net = require('net');
const { exec } = require('child_process');
const chalk = require('chalk');

const port = 3000;

let startedElectron = false;
const client = new net.Socket();
const tryConnection = () => client.connect({ port }, () => {
  client.end();
  if (!startedElectron) {
    console.log(chalk.yellow(
      '=>  Dev server detected, starting electron app...'
    ));
    startedElectron = true;
    exec('yarn electron');
  }
});

tryConnection();

client.on('error', () => {
  setTimeout(tryConnection, 1000);
});
