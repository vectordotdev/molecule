// Inspired by https://github.com/pbarbiero/basic-electron-react-boilerplate
// TODO: Look into https://github.com/electron-userland/electron-builder
'use strict';

// Import parts of electron to use
const { app, BrowserWindow } = require('electron');
const {
  default: installExtension,
  REACT_DEVELOPER_TOOLS,
  REDUX_DEVTOOLS
} = require('electron-devtools-installer');
const path = require('path');
const url = require('url');
const MenuBuilder = require('./menu');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

// Keep a reference for dev mode
let dev = false;
if (process.env.NODE_ENV === 'development') {
  dev = true;
}

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1268,
    height: 768,
    webPreferences: {
      nodeIntegration: false,
      allowpopups: true,
      webSecurity: false
    },
    titleBarStyle: 'hidden'
  });

  // Disable top menu bar on Windows/Linux
  mainWindow.setMenu(null);

  // and load the index.html of the app.
  let indexPath;
  if (dev) {
    indexPath = url.format({
      protocol: 'http:',
      host: 'localhost:3000',
      pathname: '/',
      slashes: true
    });
  } else {
    indexPath = url.format({
      protocol: 'file',
      pathname: 'index.html', // path.join(__dirname, 'dist', 'index.html'),
      slashes: true
    });
  }
  mainWindow.loadURL( indexPath );

  // Don't show until we are ready and loaded
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
    // Open the DevTools automatically if developing
    if (dev) {
      mainWindow.webContents.openDevTools();
    }
  });

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });

  // Build app menu
  const menuBuilder = new MenuBuilder(mainWindow);
  menuBuilder.buildMenu();
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
  // Allow electron to serve static files
  if (!dev) {
    require('electron').protocol.interceptFileProtocol('file', (request, callback) => {
      const url = request.url.substr(7)    /* all urls start with 'file://' */
      callback({ path: path.normalize(`${__dirname}/dist/${url}`)})
    }, (err) => {
      if (err) console.error('Failed to register protocol')
    })
  }

  // Create the Browser window
  if (dev) {
    installExtension(REACT_DEVELOPER_TOOLS)
      .then(() => installExtension(REDUX_DEVTOOLS))
      .then(() => createWindow());
  } else {
    createWindow();
  }
});

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});
