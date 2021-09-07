import styled from "styled-components";

export const SvgIcon = styled.svg.attrs<ISvgIconProps>(
  ({ width = 24, height = 24, viewBox }) => ({
    width: `${width}px`,
    height: `${height}px`,
    viewBox: `${viewBox || `0 0 ${width} ${height}`} `,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  }),
)`
  width: ${(p) => p.width};
  height: ${(p) => p.height};
  color: ${(p) => (p.color ? p.color : "inherit")};
`;
