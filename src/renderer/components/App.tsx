import React from "react";
import "mobx-react/batchingForReactDom";
import styled, { createGlobalStyle } from "styled-components";
import { AppBackground } from "./AppBackground";
import { Logo } from "./Logo";
import { WindowDrag } from "./WindowDrag";
import { WindowControls } from "./WindowControls";
import { CloseButton } from "./buttons/CloseButton";
import { OptionsButton } from "./buttons/OptionsButton";
import { PlayButton } from "./buttons/PlayButton";
import { XMu } from "./XMu";
import { Sparks } from "./Sparks";
import { ProgressBar } from "./progress-bar/ProgressBar";
import { ConfigPanel } from "./config-panel/ConfigPanel";

const GlobalStyle = createGlobalStyle`
  html, body {
    background-color: transparent;
    margin: 0;
    overflow: hidden;
    font-family: 'Manrope', sans-serif;
  }

  body * {
    box-sizing: border-box;
  }
`;

const AppWrapper = styled.div`
  padding: 10px 20px 20px 20px;
`;

const AppLayout = styled.div`
  width: 100%;
  height: 520px;
  position: relative;
  font-family: "Manrope", sans-serif;

  ${AppBackground} {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    border-radius: 20px;
  }

  ${WindowControls} {
    position: absolute;
    top: 60px;
    right: 30px;
  }

  ${ProgressBar} {
    position: absolute;
    bottom: 105px;
    left: 30px;
    transform: translate(0, 50%);
    width: calc(100% - (30px + 30px + 30px + 150px));
  }
`;

export const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <AppWrapper>
        <AppLayout>
          <WindowDrag>
            <AppBackground src="assets/images/background.jpg" />
            <Sparks />
            <Logo src="assets/images/mu.png" />
          </WindowDrag>

          <XMu />

          <WindowControls>
            <OptionsButton />
            <CloseButton />
          </WindowControls>

          <ProgressBar />

          <PlayButton />

          <ConfigPanel />
        </AppLayout>
      </AppWrapper>
    </React.Fragment>
  );
};
