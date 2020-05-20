import React from "react";
import styled from "styled-components";
import { SvgIcon } from "./SvgIcon";

const CheckboxRect = styled.rect.attrs(() => ({
  x: 0,
  y: 0,
  width: 100,
  height: 100,
}))`
  fill: none;
  stroke-width: 15;
`;

const CheckboxPath = styled.path.attrs({
  d: "M 10 50 L 40 86 L 90 10",
})<IPathProps>`
  fill: none;
  stroke-dasharray: 140;
  stroke-dashoffset: ${(p) => (p.active ? 0 : 140)};
  stroke-width: 17px;
  transform-origin: 50% 50%;
  transform: scale(0.8);
  transition: stroke-dashoffset 0.2s ease-in 0s, ease stroke 0.3s;
`;

export const CheckboxIcon = styled(({ color = "black", active = true, ...props }: IIcon) => {
  return (
    <SvgIcon width={100} height={100} {...props}>
      <CheckboxRect />
      <CheckboxPath active={active} />
    </SvgIcon>
  );
})``;
