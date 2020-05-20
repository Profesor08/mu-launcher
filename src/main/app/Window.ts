import { app, BrowserWindow, ipcMain, screen } from "electron";
import electronLocalshortcut from "electron-localshortcut";
import { mainPath, width, height, clientConfig } from "../config";
import { start } from "./GameClient";
import { getRegistryValue, setRegistryValue } from "./utils";
declare const MAIN_WINDOW_WEBPACK_ENTRY: any;

const development = process.argv.some((arg) => arg.startsWith("--role=development"));

export const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width,
    height,
    transparent: true,
    backgroundColor: "#00000000",
    frame: false,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // disable F11
  mainWindow.setMenu(null);

  mainWindow.setProgressBar(-1);

  mainWindow.once("ready-to-show", () => {
    mainWindow.show();
  });

  // main frame url, can be remote :)
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  if (development) {
    electronLocalshortcut.register(mainWindow, "F12", () => {
      mainWindow.webContents.toggleDevTools();
    });

    electronLocalshortcut.register(mainWindow, "F5", () => {
      mainWindow.reload();
    });
  }

  mainWindow.on("move", () => {
    mainWindow.webContents.send("window-moved");
  });

  // Exit
  ipcMain.once("close-app", () => {
    app.exit();
  });

  // Move Window
  ipcMain.handle("move-window", (event, { mouseX, mouseY }) => {
    const { x, y } = screen.getCursorScreenPoint();

    mainWindow.setBounds(
      {
        width,
        height,
        x: x - mouseX,
        y: y - mouseY,
      },
      false,
    );

    return true;
  });

  // Start Game
  ipcMain.handle("start-game", () => {
    try {
      return start(mainPath, mainWindow);
    } catch (err) {
      return err.message;
    }
  });

  ipcMain.handle("get-client-config", async () => {
    return {
      resolution: await getRegistryValue(clientConfig.resolution, 0),
      screenMode: await getRegistryValue(clientConfig.screenMode, 0),
      colorDeph: await getRegistryValue(clientConfig.colorDeph, 0),
      sound: await getRegistryValue(clientConfig.sound, 1),
      music: await getRegistryValue(clientConfig.music, 1),
      language: await getRegistryValue(clientConfig.language, "Eng"),
      user: await getRegistryValue(clientConfig.user, ""),
      availableResolution: clientConfig.availableResolution,
      availableLanguages: clientConfig.availableLanguages,
    };
  });

  ipcMain.handle("save-client-config", async (event, config: IClientConfigData) => {
    setRegistryValue(clientConfig.resolution, config.resolution);
    setRegistryValue(clientConfig.screenMode, config.screenMode);
    setRegistryValue(clientConfig.colorDeph, config.colorDeph);
    setRegistryValue(clientConfig.sound, config.sound);
    setRegistryValue(clientConfig.music, config.music);
    setRegistryValue(clientConfig.language, config.language);
    setRegistryValue(clientConfig.user, config.user);
    return true;
  });
};
