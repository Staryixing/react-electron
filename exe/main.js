const { app, BrowserWindow, ipcMain } = require('electron');
const { autoUpdater } = require('electron-updater');
let path = require('path');

const uploadUrl = 'http://192.168.1.24/test-demo/';
let winRemote;
function updaterHandle(){
  let message = {
    error: "检测更新出错...",
    checking: "正在检车更新...",
    updateAva: "检测到新版本，正在下载...",
    updateNotAva: "现在使用的就是新版本，不用更新"
  }
  autoUpdater.setFeedURL(uploadUrl);
  autoUpdater.on("error", function(){
    sendUpdaterMessage(message.error)
  })
  autoUpdater.on("checking-for-update", function(){
    sendUpdaterMessage(message.updateAva)
  })
  autoUpdater.on("updater-available", function(){
    sendUpdaterMessage(message.updateNotAva)
  })
  autoUpdater.on("download-progress", function(progressObj){
    winRemote.webContents.send("downloadProgress", progressObj)
  })
  autoUpdater.on("update-downloaded", function(){
    ipcMain.on("isUpdateNow",()=> {
      console.log('start updater');
      autoUpdater.quitAndInstall();
    })
    winRemote.webContents.send('isUpdateNow')
  })
  // 执行自动更新检查
  ipcMain.on("checkForUpdate",() => {
    autoUpdater.checkForUpdates()
  })
}

function sendUpdaterMessage(text){
  winRemote.webContents.send("message", text)
}
app.on('ready', function(){
    winRemote = new BrowserWindow({
        // fullscreen: true,
        width: 960,
        height: 540,
        webPreferences: {
          javascript: true,
          plugins: true,
          nodeIntegration: true,
          webSecurity: false
        }
    })
    winRemote.loadFile(path.join(__dirname, './render/index.html'))
    winRemote.webContents.openDevTools();
    winRemote.on("closed",function(){
      winRemote = null;
    })
    updaterHandle()
})
