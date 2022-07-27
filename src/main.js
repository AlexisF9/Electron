const { app, BrowserWindow } = require("electron");
const path = require("path");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadURL("http://localhost:3000/");
  //win.loadFile("index.html");
};

app.whenReady().then(() => {
  createWindow();
});

// Sur windows/linux, quand toutes les fenetres sont fermés celle ci est fermé automatiquement
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
