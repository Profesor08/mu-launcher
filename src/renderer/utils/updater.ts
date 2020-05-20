import { store } from "../store";

export const update = (): Promise<boolean> =>
  new Promise((resolve, reject) => {
    const files: string[] = [
      // "main.exe",
      // "Data/Local/ArcaBattleBootyMix.bmd",
      // "Data/Local/ElementalMixList.bmd",
      // "Data/Local/EvolutionMonsterBox.bmd",
      // "Data/Local/ExcellentWingOption.bmd",
      // "Data/Local/ExcellentCommonOption.bmd",
      // "Data/Local/InfoTooltip.bmd",
      // "Data/Local/ItemLevelTooltip.bmd",
      // "Data/Local/JewelOfHarmonyOption.bmd",
      // "Data/Local/MapCharacters.bmd",
      // "Data/Local/MonsterSkill.bmd",
      // "Data/Local/MuRummyOption.bmd",
      // "Data/Local/NPCDialogue.bmd",
      // "Data/Local/PetData.bmd",
      // "Data/Local/RuudShopViewInfo.bmd",
      // "Data/Local/SocketItem.bmd",
    ];

    store.progressStatus = "active";

    const delay = (timeout: number) =>
      new Promise((res) => {
        setTimeout(() => {
          res();
        }, timeout);
      });

    const fakeFileDownload = (file: string) =>
      new Promise(async (res) => {
        store.downloadingFile = file;
        store.fileProgress = 0;

        const fakeDownload = () => {
          if (store.fileProgress < 100) {
            store.fileProgress += 1;
            requestAnimationFrame(fakeDownload);
          } else {
            res();
          }
        };

        fakeDownload();

        // for (let i = 0; i < 10; i++) {
        //   store.fileProgress += 10;
        //   await delay(100);
        // }

        // res();
      });

    const fakeUpdate = async () => {
      const step = 100 / files.length;

      for (const file of files) {
        await fakeFileDownload(file);
        store.totalProgress += step;
      }

      await delay(100);

      store.totalProgress = 100;

      await delay(500);

      store.progressStatus = "idle";
      store.fileProgress = 0;
      store.totalProgress = 0;
      store.downloadingFile = "";

      resolve();
    };

    fakeUpdate();
  });
