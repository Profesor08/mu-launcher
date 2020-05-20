import React from "react";
import styled from "styled-components";
import { ipcRenderer } from "electron";

const staticState = {
  dragging: false,
  mouse: {
    x: 0,
    y: 0,
  },
  blocked: false,
};

interface IWindowDrag {
  children: React.ReactNode | React.ReactNodeArray | undefined;
}

export const WindowDrag = styled(({ children, ...rest }: IWindowDrag) => {
  let mouseX = 0;
  let mouseY = 0;

  return (
    <div
      onMouseDown={(e) => {
        e.persist();
        staticState.dragging = true;
        mouseX = e.clientX;
        mouseY = e.clientY;
      }}
      onMouseUp={() => {
        staticState.dragging = false;
      }}
      onMouseLeave={() => {
        staticState.dragging = false;
      }}
      onMouseMove={async (e) => {
        if (staticState.dragging) {
          await ipcRenderer.invoke("move-window", {
            mouseX,
            mouseY,
          });
        }
      }}
      {...rest}
    >
      {children}
    </div>
  );
})`
  -webkit-user-drag: none;
  user-select: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  * {
    -webkit-user-drag: none;
  }
`;
