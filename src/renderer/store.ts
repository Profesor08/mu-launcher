import { observable } from "mobx";
import { TProgressStatus } from "./components/progress-bar/ProgressBar";
import { ipcRenderer } from "electron";

class Store {
  @observable progressStatus: TProgressStatus = "idle";
  @observable downloadingFile: string = "";
  @observable fileProgress: number = 0;
  @observable totalProgress: number = 0;
  @observable showOptions: boolean = false;
  @observable gameStarted: boolean = false;
}

export const store = new Store();

ipcRenderer.on("game-started", () => {
  store.gameStarted = true;
});

ipcRenderer.on("game-closed", () => {
  store.gameStarted = false;
});
