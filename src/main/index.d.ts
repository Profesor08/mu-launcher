declare module "electron-squirrel-startup";

type TValueType = "REG_SZ" | "REG_MULTI_SZ" | "REG_EXPAND_SZ" | "REG_DWORD" | "REG_QWORD" | "REG_BINARY" | "REG_NONE";

interface IRegistryKey {
  hive: string;
  key: string;
  value: string;
  type: TValueType;
}

interface IClientRegistry {
  resolution: IRegistryKey;
  screenMode: IRegistryKey;
  colorDeph: IRegistryKey;
  sound: IRegistryKey;
  music: IRegistryKey;
  language: IRegistryKey;
  user: IRegistryKey;
}

interface IClientConfig extends IClientRegistry {
  availableResolution: string[];
  availableLanguages: [string, string][];
}

interface IClientConfigData {
  resolution: number;
  screenMode: number;
  colorDeph: number;
  sound: number;
  music: number;
  language: string;
  user: string;
}
