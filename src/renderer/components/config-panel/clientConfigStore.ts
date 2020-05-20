import { observable, action } from "mobx";

class ClientConfig {
  [key: string]: string | number | any;
  @observable resolution: number = 0;
  @observable screenMode: number = 0;
  @observable colorDeph: number = 0;
  @observable sound: number = 1;
  @observable music: number = 1;
  @observable language: string = "Eng";
  @observable availableResolution: string[] = [];
  @observable availableLanguages: [string, string][] = [];

  @action
  update({
    resolution,
    screenMode,
    colorDeph,
    sound,
    music,
    language,
    availableResolution,
    availableLanguages,
  }: IClientConfigResponse) {
    clientConfig.colorDeph = colorDeph;
    clientConfig.language = language;
    clientConfig.music = music;
    clientConfig.resolution = resolution;
    clientConfig.screenMode = screenMode;
    clientConfig.sound = sound;
    clientConfig.availableResolution = availableResolution;
    clientConfig.availableLanguages = availableLanguages;
  }
}

export const clientConfig = new ClientConfig();
