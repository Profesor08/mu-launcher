import styled from "styled-components";

export const SvgIcon = styled.svg.attrs(({ width, height, ...props }: ISvgIconProps) => ({
  viewBox: `0 0 ${width} ${height}`,
  width,
  height,
  xmlns: "http://www.w3.org/2000/svg",
  ...props,
}))<ISvgIconProps>`
  stroke: black;
  fill: black;
`;
