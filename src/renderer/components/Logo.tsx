import styled from "styled-components";

export const Logo = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  height: 120px;
  width: auto;
  filter: drop-shadow(5px 5px 5px #222222);
  transition: ease filter 0.3s;
  z-index: 10;

  &:hover {
    filter: drop-shadow(5px 5px 5px #222222) contrast(150%);
  }
`;
