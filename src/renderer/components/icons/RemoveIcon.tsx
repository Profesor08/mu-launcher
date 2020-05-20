import React from "react";
import styled from "styled-components";
import { SvgIcon } from "./SvgIcon";

const Line = styled.line<IPathProps>`
  fill: none;
  stroke-width: 20px;
  stroke-linecap: round;
  transform-origin: 50px 50px;
  transition: ease transform 0.3s, ease opacity 0s, ease stroke 0.3s;
`;

const Line1 = styled(Line)<IPathProps>`
  transform: rotate(${(p) => (p.active ? 0 : 45)}deg);
  transition-delay: ${(p) => (p.active ? 0 : 0.3)}s, 0s, 0s;
`;

const Line2 = styled(Line)<IPathProps>`
  transform: rotate(${(p) => (p.active ? 0 : -45)}deg);
  transition-delay: ${(p) => (p.active ? 0 : 0.3)}s, 0s, 0s;
`;

const Line3 = styled(Line)<IPathProps>`
  opacity: ${(p) => (p.active ? 1 : 0)};
  transform: translateY(${(p) => (p.active ? -35 : 0)}px);
  transition-delay: ${(p) => (p.active ? 0.3 : 0)}s, ${(p) => (p.active ? 0.3 : 0.3)}s, 0s;
`;

const Line4 = styled(Line)<IPathProps>`
  opacity: ${(p) => (p.active ? 1 : 0)};
  transform: translateY(${(p) => (p.active ? 35 : 0)}px);
  transition-delay: ${(p) => (p.active ? 0.3 : 0)}s, ${(p) => (p.active ? 0.3 : 0.3)}s, 0s;
`;

export const RemoveIcon = styled(({ active = false, ...props }: IIcon) => {
  const width = 100;
  const height = 100;
  const p = 10;

  return (
    <SvgIcon
      width={width}
      height={height}
      viewBox={`${-p} ${-p} ${width + p * 2} ${height + p * 2}`}
      x={-10}
      y={100}
      {...props}
    >
      <Line1 x1="0" y1="50" x2="100" y2="50" active={active} />
      <Line2 x1="0" y1="50" x2="100" y2="50" active={active} />
      <Line3 x1="0" y1="50" x2="100" y2="50" active={active} />
      <Line4 x1="0" y1="50" x2="100" y2="50" active={active} />
    </SvgIcon>
  );
})``;
