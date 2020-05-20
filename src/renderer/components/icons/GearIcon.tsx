import React from "react";
import styled from "styled-components";
import { SvgIcon } from "./SvgIcon";

const Path = styled.path.attrs({
  d: `M429.9,408.2l-15-8.6c-50.2-29-112.9,7.2-112.9,65.2V482h-90.5v-17.3c0-57.9-62.7-94.2-112.9-65.2l-15,8.6l-45.2-78.4 l15-8.6c50.2-29,50.2-101.3,0-130.3l-15-8.6l45.2-78.4l15,8.6c50.2,29,112.9-7.2,112.9-65.2V30h90.5v17.3 c0,57.9,62.7,94.2,112.9,65.2l15-8.6l45.2,78.4l-15,8.6c-50.2,29-50.2,101.3,0,130.3l15,8.6L429.9,408.2z M256.8,151 c-57.9,0-105,47.1-105,105s47.1,105,105,105c57.9,0,105-47.1,105-105S314.7,151,256.8,151z`,
})<IPathProps>`
  transition: ease fill 0.3s;
`;

export const GearIcon = styled(({ color = "black", active = false, ...props }: IIcon) => {
  return (
    <SvgIcon width={512} height={512} {...props}>
      <Path active={active} />
    </SvgIcon>
  );
})``;
