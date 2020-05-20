export const width: number = 960;
import Registry from "winreg";

export const height: number = 540;

export const mainPath: string = "E:\\Games\\Mu\\main.exe";

export const allowMultipleWindows: boolean = false;

export const registryKey = "HKCU\\Software\\WEBZEN\\Mu\\Config";

export const clientConfig: IClientConfig = {
  resolution: {
    hive: Registry.HKCU,
    key: "\\Software\\WEBZEN\\Mu\\Config",
    value: "DisplayDeviceModeIndex",
    type: "REG_DWORD",
  },
  screenMode: {
    hive: Registry.HKCU,
    key: "\\Software\\WEBZEN\\Mu\\Config",
    value: "FullScreenMode",
    type: "REG_DWORD",
  },
  colorDeph: {
    hive: Registry.HKCU,
    key: "\\Software\\WEBZEN\\Mu\\Config",
    value: "DisplayColorBit",
    type: "REG_DWORD",
  },
  sound: {
    hive: Registry.HKCU,
    key: "\\Software\\WEBZEN\\Mu\\Config",
    value: "SoundOn",
    type: "REG_DWORD",
  },
  music: {
    hive: Registry.HKCU,
    key: "\\Software\\WEBZEN\\Mu\\Config",
    value: "MusicOn",
    type: "REG_DWORD",
  },
  language: {
    hive: Registry.HKCU,
    key: "\\Software\\WEBZEN\\Mu\\Config",
    value: "LangSelection",
    type: "REG_SZ",
  },
  user: {
    hive: Registry.HKCU,
    key: "\\Software\\WEBZEN\\Mu\\Config",
    value: "UserID",
    type: "REG_SZ",
  },
  availableResolution: [
    "0: 800x600 (4:3)",
    "1: 1024x768 (4:3)",
    "2: 1152x864 (4:3)",
    "3: 1280x720 (16:9) [Wide]",
    "4: 1280x800 (16:10) [Wide]",
    "5: 1280x960 (4:3)",
    "6: 1600x900 (16:9) [Wide]",
    "7: 1600x1200 (4:3)",
    "8: 1680x1050 (16:10) [Wide]",
    "9: 1920x1080 (16:9) [Wide]",
    "10: 1920x1200 (16:10) [Wide]",
    "11: 1920x1440 (4:3)",
    "12: 2048x1536 (4:3)",
    "13: 2560x1440 (16:9) [Wide]",
    "14: 2560x1600 (16:10) [Wide]",
    "15: 3480x2160 (16:9) [Wide]",
  ],
  availableLanguages: [
    ["Eng", "English"],
    ["Por", "Portuguese"],
    ["Spn", "Spanish"],
  ],
};
