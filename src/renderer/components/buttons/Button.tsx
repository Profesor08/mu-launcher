import React from "react";
import styled, { StyledComponent } from "styled-components";

interface IButtonProps {
  Icon: StyledComponent<({ ...props }: any) => JSX.Element, any, {}, never>;
}

export const Button = styled(({ Icon, ...props }: IButtonProps) => {
  return <Icon {...props} />;
})`
  width: 30px;
  height: 30px;
  stroke: rgb(200, 50, 0);
  fill: rgb(200, 50, 0);
  filter: drop-shadow(0px 0px 1px #54110b);

  &:hover {
    cursor: pointer;
    stroke: rgb(255, 50, 0);
    fill: rgb(255, 50, 0);
  }

  &:active {
    stroke: rgb(200, 30, 0);
    fill: rgb(200, 30, 0);
  }
`;
