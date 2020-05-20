import React from "react";
import styled from "styled-components";
import { RadioIcon } from "../icons/icons";

const RadioInput = styled.label<{ color: string }>`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 3px;
  align-items: center;
  user-select: none;
  transition: ease filter 0.2s;
  filter: invert(20%);

  &:hover {
    filter: invert(0%);
  }

  ${RadioIcon} {
    width: 12px;
    height: 12px;
    fill: ${(p) => p.color};
    stroke: ${(p) => p.color};
  }
`;

const RadioLabel = styled.div``;

const RadioElement = styled.input.attrs({
  type: "radio",
})`
  margin: 0;
  display: none;
`;

interface IRadioProps {
  label?: string;
  checked?: boolean;
  onChange?: () => void;
  color?: string;
}

export const Radio = styled(({ checked, label, onChange, color = "black", ...props }: IRadioProps) => (
  <RadioInput color={color} {...props}>
    <RadioElement checked={checked} onChange={onChange} />
    <RadioIcon active={checked} />
    {label ? <RadioLabel>{label}</RadioLabel> : null}
  </RadioInput>
))``;
