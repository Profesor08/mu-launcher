import React from "react";
import { ipcRenderer } from "electron";
import { RemoveIcon } from "./../icons/icons";
import { clickSound } from "../../utils/sound";
import styled from "styled-components";
import { Button } from "./Button";

const closeApp = async () => {
  await clickSound();
  ipcRenderer.send("close-app");
};

export const CloseButton = styled(({ ...props }) => {
  return <Button Icon={RemoveIcon} onClick={closeApp} {...props} />;
})``;
