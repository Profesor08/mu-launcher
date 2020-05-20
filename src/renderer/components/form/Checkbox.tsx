import React from "react";
import styled from "styled-components";
import { CheckboxIcon } from "../icons/icons";

const CheckboxInput = styled.label<{ color: string }>`
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

  ${CheckboxIcon} {
    width: 12px;
    height: 12px;
    stroke: ${(p) => p.color};
  }
`;

const CheckboxLabel = styled.div``;

const CheckboxElement = styled.input.attrs({
  type: "checkbox",
})`
  margin: 0;
  display: none;
`;

interface ICheckboxProps {
  label?: string;
  checked?: boolean;
  onChange?: () => void;
  color?: string;
}

export const Checkbox = styled(({ checked, label, onChange, color = "black", ...props }: ICheckboxProps) => (
  <CheckboxInput color={color} {...props}>
    <CheckboxElement checked={checked} onChange={onChange} />
    <CheckboxIcon active={checked} />
    {label ? <CheckboxLabel>{label}</CheckboxLabel> : null}
  </CheckboxInput>
))``;
