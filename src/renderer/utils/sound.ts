const sounds: Map<string, HTMLAudioElement> = new Map();

sounds.set("clickSound", new Audio("assets/sound/button.mp3"));

const playSound = (type: string) =>
  new Promise((resolve) => {
    const sound = sounds.get(type);

    const delay = (duration: number) => {
      setTimeout(() => {
        resolve();
      }, duration * 1000);
    };

    if (sound) {
      if (sound.readyState === 4) {
        sound.play();
        delay(sound.duration);
      } else {
        sound.addEventListener("canplay", () => {
          sound.play();
          delay(sound.duration);
        });
      }
    }
  });

export const clickSound = async () => {
  await playSound("clickSound");
};
