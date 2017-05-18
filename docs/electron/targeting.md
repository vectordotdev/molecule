### Browser

This comes preconfigured, you don't have to do anything :clap:

### Electron Renderer

1. Add `target: 'electron-renderer'` to both `webpack.dev.config.js` and `webpack.dll.js`
2. In `main.js` set `webPreferences.nodeIntegration` to `true`


### Electron Main Process

1. Add `target: 'electron-main'` to both `webpack.dev.config.js` and `webpack.dll.js`
2. Fill in...