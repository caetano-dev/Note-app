const { app, BrowserWindow } = require("electron");

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 617,
    height: 616,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // and load the index.html of the app.
  win.loadFile("index.html");
}

app.whenReady().then(createWindow);
