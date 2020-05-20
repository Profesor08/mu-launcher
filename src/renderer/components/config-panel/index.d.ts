interface IClientConfigResponse {
  resolution: number;
  screenMode: number;
  colorDeph: number;
  sound: number;
  music: number;
  language: string;
  availableResolution: string[];
  availableLanguages: [string, string][];
}
