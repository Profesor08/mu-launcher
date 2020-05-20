import { ipcRenderer } from "electron";
import { clientConfig } from "./clientConfigStore";
import { store } from "../../store";

export const openConfigPanel = async () => {
  const config = await (ipcRenderer.invoke("get-client-config") as Promise<IClientConfigResponse>);

  clientConfig.update(config);
  store.showOptions = true;
};

export const closeConfigPanel = async (save: boolean = false) => {
  store.showOptions = false;

  if (save) {
    await saveClientConfig();
  }
};

export const saveClientConfig = async () => {
  return await (ipcRenderer.invoke("save-client-config", {
    resolution: clientConfig.resolution,
    screenMode: clientConfig.screenMode,
    colorDeph: clientConfig.colorDeph,
    sound: clientConfig.sound,
    music: clientConfig.music,
    language: clientConfig.language,
  }) as Promise<boolean>);
};
