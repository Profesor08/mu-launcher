import styled from "styled-components";

export const FormButton = styled.div`
  outline: none;
  border-radius: 3px;
  color: black;
  background-color: rgba(200, 32, 0, 0.8);
  border: 1px solid orangered;
  font-size: 12px;
  line-height: 1;
  padding: 2px 5px 3px 5px;
  user-select: none;
  color: rgba(255, 255, 255, 0.8);
  transition: ease all 0.3s;
  text-align: center;

  &:hover {
    cursor: pointer;
    background-color: rgba(200, 50, 0, 1);
  }

  &:active {
    background-color: rgba(160, 30, 0, 1);
  }
`;
