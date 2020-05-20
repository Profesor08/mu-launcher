import { exec } from "child_process";
import { allowMultipleWindows } from "../config";
import { BrowserWindow } from "electron";

export const isProcessRunning = async (processName: string): Promise<boolean> => {
  const cmd = (() => {
    switch (process.platform) {
      case "win32":
        return `tasklist`;
      case "darwin":
        return `ps -ax | grep ${processName}`;
      case "linux":
        return `ps -A`;
      default:
        return false;
    }
  })();

  return new Promise((resolve, reject) => {
    require("child_process").exec(cmd, (err: Error, stdout: string, stderr: string) => {
      if (err) reject(err);

      resolve(stdout.toLowerCase().indexOf(processName.toLowerCase()) > -1);
    });
  });
};

export const start = (path: string, window: BrowserWindow): Promise<boolean> =>
  new Promise(async (resolve, reject) => {
    if (allowMultipleWindows === false && (await isProcessRunning("MU"))) {
      reject(false);
    } else {
      window.webContents.send("game-started");

      const main = exec(path, (err) => {
        if (err === null) {
          resolve(true);
        } else {
          reject(false);
        }
      });

      main.on("exit", () => {
        window.webContents.send("game-closed");
      });
    }
  });
