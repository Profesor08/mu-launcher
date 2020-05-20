import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { GearIcon } from "../icons/GearIcon";
import { openConfigPanel } from "../config-panel/utils";
import { clickSound } from "./../../utils/sound";

const openOptions = async () => {
  clickSound();
  openConfigPanel();
};

export const OptionsButton = styled(({ ...props }) => {
  return <Button Icon={GearIcon} onClick={openOptions} {...props} />;
})``;
