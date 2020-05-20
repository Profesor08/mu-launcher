import styled, { css } from "styled-components";
import { clickSound } from "../../utils/sound";
import { update } from "../../utils/updater";
import { observer } from "mobx-react";
import { store } from "../../store";
import { ipcRenderer } from "electron";

const isActive = () => store.progressStatus === "idle" && store.gameStarted === false;

export const PlayButton = observer(styled.div.attrs({
  onClick: async () => {
    await clickSound();
    await update();
    await ipcRenderer.invoke("start-game");
  },
})`
  position: absolute;
  bottom: 30px;
  right: 30px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  background: url(assets/images/play-button.png) no-repeat;

  filter: grayscale(${() => (isActive() ? "0" : "70%")});
  pointer-events: ${() => (isActive() ? "all" : "none")};

  &:before {
    content: "";
    display: block;
    width: 150px;
    height: 150px;
    background: url(assets/images/play-button-active.png) no-repeat;
    opacity: 0;
    transition: ease opacity 0.3s, ease filter 0.3s;
  }

  &:hover {
    cursor: pointer;

    &:before {
      opacity: 1;
    }
  }

  &:active {
    &:before {
      filter: contrast(150%);
    }
  }
`);
