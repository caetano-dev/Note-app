const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 617,
    height: 616,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadFile("index.html");
}

app.whenReady().then(createWindow);
