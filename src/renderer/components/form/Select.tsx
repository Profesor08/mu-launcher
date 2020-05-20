import styled from "styled-components";

export const Select = styled.select`
  outline: none;
  border-radius: 3px;
  transition: ease filter 0.2s;
  filter: invert(20%);

  &:hover {
    filter: invert(0%);
  }
`;

export const Option = styled.option`
  outline: none;
`;
