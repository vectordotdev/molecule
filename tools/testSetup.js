const ignoredExtensions = [
  '.css', '.scss',
  '.gif', '.jpg', '.jpeg', '.png', '.webp', '.svg',
  '.mp4', '.m4a', '.webm', '.ogv', '.oga', '.ogg', '.mp3', '.wav',
];

ignoredExtensions.forEach((ext) => {
  require.extensions[ext] = () => null;
});

require('babel-register')();

const jsdom = require('jsdom').jsdom;

global.document = jsdom('');
global.window = document.defaultView;

Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js',
};
