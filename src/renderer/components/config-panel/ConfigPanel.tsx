import React from "react";
import { store } from "../../store";
import { observer } from "mobx-react";
import { Modal, ModalContent, CloseModal } from "../modal/Modal";
import styled from "styled-components";
import { clientConfig } from "./clientConfigStore";
import { saveClientConfig, closeConfigPanel } from "./utils";
import { Radio } from "../form/Radio";
import { Select, Option } from "../form/Select";
import { InputGroup } from "../form/InputGroup";
import { Checkbox } from "../form/Checkbox";
import { ButtonsGroup } from "../form/ButtonsGroup.";
import { FormButton } from "../form/FormButton";
import { clickSound } from "./../../utils/sound";

const color = {
  heading: `#00ff00`,
  text: `yellow`,
  input: `#EEE`,
  icon: `#EEE`,
};

const ConfigModal = styled(Modal)`
  ${ModalContent} {
    background-image: url(assets/images/options.png);
    background-position: center top;
    border-radius: 5px;
  }

  ${CloseModal} {
    stroke: white;
  }
`;

const ConfigContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 5px;
`;

const ConfigBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 3px;
  max-width: 300px;

  ${Select} {
    font-size: 12px;
    justify-self: start;
  }

  ${Radio}, ${Checkbox} {
    font-size: 10px;
    color: ${color.input};
  }

  ${FormButton} {
    width: 50px;
  }

  ${Select} {
    background: transparent;
    color: ${color.input};
    border-color: ${color.input};

    ${Option} {
      color: black;
      background: transparent;
    }
  }
`;

const ConfigHeading = styled.h3`
  margin: 0;
  font-size: 12px;
  user-select: none;
  color: ${color.heading};
`;

const ConfigDescription = styled.p`
  margin: 0;
  font-size: 10px;
  user-select: none;
  color: ${color.text};
`;

export const ConfigPanel = observer(() => {
  return (
    <ConfigModal
      show={store.showOptions}
      onClose={async () => {
        await saveClientConfig();
        closeConfigPanel();
      }}
    >
      <ConfigContainer>
        <ConfigBlock>
          <ConfigHeading>Screen Resolution</ConfigHeading>
          <ConfigDescription>
            Setting the resolution highter will result in better visual quality but requires high system requirements.
          </ConfigDescription>
          <Select
            value={clientConfig.resolution}
            onChange={(e) => {
              clientConfig.resolution = Number(e.target.value);
            }}
          >
            {clientConfig.availableResolution.map((resolution, index) => (
              <Option key={`resolution-${index}`} value={index}>
                {resolution}
              </Option>
            ))}
          </Select>
        </ConfigBlock>
        <ConfigBlock>
          <ConfigHeading>Screen Mode</ConfigHeading>

          <InputGroup>
            <Radio
              label="Full Screen"
              checked={clientConfig.screenMode === 1}
              onChange={() => {
                clientConfig.screenMode = 1;
              }}
              color={color.icon}
            />
            <Radio
              label="Windowed Mode"
              checked={clientConfig.screenMode === 0}
              onChange={() => {
                clientConfig.screenMode = 0;
              }}
              color={color.icon}
            />
          </InputGroup>
        </ConfigBlock>
        <ConfigBlock>
          <ConfigHeading>Color Deph</ConfigHeading>
          <ConfigDescription>
            Higher color depth provides a wide range of color to use with higher quality rendering.
          </ConfigDescription>
          <InputGroup>
            <Radio
              label="Min Color (16 bit)"
              checked={clientConfig.colorDeph === 0}
              onChange={() => {
                clientConfig.colorDeph = 0;
              }}
              color={color.icon}
            />
            <Radio
              label="Min Color (32 bit)"
              checked={clientConfig.colorDeph === 1}
              onChange={() => {
                clientConfig.colorDeph = 1;
              }}
              color={color.icon}
            />
          </InputGroup>
        </ConfigBlock>
        <ConfigBlock>
          <ConfigHeading>Sound</ConfigHeading>
          <ConfigDescription>To enable sound, check the appropriate checkbox.</ConfigDescription>
          <InputGroup>
            <Checkbox
              label="Sound Effects"
              checked={clientConfig.sound === 1}
              onChange={() => {
                clientConfig.sound = 1 - clientConfig.sound;
              }}
              color={color.icon}
            />
            <Checkbox
              label="Background Music"
              checked={clientConfig.music === 1}
              onChange={() => {
                clientConfig.music = 1 - clientConfig.music;
              }}
              color={color.icon}
            />
          </InputGroup>
        </ConfigBlock>
        <ConfigBlock>
          <ConfigHeading>Language</ConfigHeading>
          <Select
            value={clientConfig.language}
            onChange={(e) => {
              clientConfig.language = e.target.value;
            }}
          >
            {clientConfig.availableLanguages.map(([value, name], index) => (
              <Option key={`resolution-${index}`} value={value}>
                {name}
              </Option>
            ))}
          </Select>
        </ConfigBlock>
        <ConfigBlock>
          <ButtonsGroup>
            <FormButton
              onClick={async () => {
                clickSound();
                await saveClientConfig();
                closeConfigPanel();
              }}
            >
              Save
            </FormButton>
            <FormButton
              onClick={async () => {
                clickSound();
                closeConfigPanel();
              }}
            >
              Cancel
            </FormButton>
          </ButtonsGroup>
        </ConfigBlock>
      </ConfigContainer>
    </ConfigModal>
  );
});
