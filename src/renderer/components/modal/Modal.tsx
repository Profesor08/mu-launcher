import React from "react";
import styled from "styled-components";
import { clickSound } from "./../../utils/sound";
import { RemoveIcon } from "./../icons/RemoveIcon";

export const ModalBackFace = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: ease-in-out opacity 0.3s;
`;

export const CloseModal = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  width: 20px;
  height: 20px;
  opacity: 0.5;
  transition: ease opacity 0.3s;
  user-select: none;

  ${RemoveIcon} {
    width: 15px;
    height: 15px;
    stroke: white;
  }

  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;

export const ModalContent = styled.div`
  position: relative;
  background-color: white;
  padding: 10px;
  box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.34), 0 9px 46px 8px rgba(0, 0, 0, 0.32),
    0 11px 15px -7px rgba(0, 0, 0, 0.5);
  transition: ease-in-out opacity 0.3s, ease-in-out transform 0.3s;

  ${CloseModal} {
    position: absolute;
    top: 5px;
    right: 5px;
  }
`;

interface IModal {
  show?: boolean;
}

const ModalElement = styled.div<IModal>`
  position: absolute;
  top: 40px;
  left: ${(props) => (props.show ? 0 : "-99999px")};
  width: 100%;
  height: calc(100% - 40px);
  display: grid;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  overflow: hidden;
  transition: linear left 0s;
  transition-delay: ${(props) => (props.show ? "0s" : "0.3s")};

  ${ModalBackFace} {
    opacity: ${(props) => (props.show ? 0.5 : 0)};
  }

  ${ModalContent} {
    opacity: ${(props) => (props.show ? 1 : 0)};
    transform: translateY(${(props) => (props.show ? 0 : "-10px")});
  }
`;

interface IModalProps {
  show?: boolean;
  onClose?: () => void;
  children?: React.ReactNode | React.ReactNodeArray;
}

export const Modal = styled(({ show, onClose, children, ...props }: IModalProps) => {
  return (
    <ModalElement show={show} {...props}>
      <ModalBackFace onClick={onClose} />
      <ModalContent>
        <CloseModal
          onClick={async () => {
            if (onClose) {
              onClose();
            }

            await clickSound();
          }}
        >
          <RemoveIcon />
        </CloseModal>

        {children}
      </ModalContent>
    </ModalElement>
  );
})``;
