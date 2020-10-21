const { app, BrowserWindow } = require('electron');
let path = require('path');
app.on('ready', function(){
    winRemote = new BrowserWindow({
        // fullscreen: true,
        width: 960,
        height: 540
    })
    // winRemote.loadFile(`file://${__dirname}/./render/index.html`);
    
    winRemote.loadFile(path.join(__dirname, './index.html'))
    winRemote.webContents.openDevTools();
})
