import React from "react";
import styled from "styled-components";
import { SvgIcon } from "./SvgIcon";

const RadioPath = styled.circle.attrs({
  cx: 50,
  cy: 50,
  r: 30,
})<IPathProps>`
  stroke-width: 0;
  transition: transform 0.2s ease-in 0s;
  transform-origin: 50% 50%;
  transform: scale(${(p) => (p.active ? 1 : 0)});
`;

const RadioBorder = styled.circle.attrs(() => ({
  cx: 50,
  cy: 50,
  r: 46,
  fill: "none",
  stroke: "color",
  strokeWidth: 8,
}))``;

export const RadioIcon = styled(({ color = "black", active = true, ...props }: IIcon) => {
  return (
    <SvgIcon width={100} height={100} {...props}>
      <RadioBorder color={color} />
      <RadioPath color={color} active={active} />
    </SvgIcon>
  );
})``;
