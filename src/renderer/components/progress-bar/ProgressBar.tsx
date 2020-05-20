import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react";
import { store } from "../../store";

export type TProgressStatus = "idle" | "active";

interface IThumbProps {
  status: TProgressStatus;
  progress: number;
}

const Thumb = styled.div<IThumbProps>`
  position: absolute;
  top: 0;
  height: 100%;
  border-radius: inherit;
  background-color: grey;
  background: linear-gradient(to right, #bf1d10 0%, #ff00d7 100%) left/100% fixed;
  width: ${(props) => (props.status === "active" ? props.progress : 0)}%;
  /* transition: linear width 0.1s; */
`;

interface IBarProps {
  status: TProgressStatus;
  progress: number;
}

const Bar = styled.div<IBarProps>`
  position: relative;
  height: 10px;
  border-radius: 5px;
  background: ${(props) =>
    props.status === "idle" ? `linear-gradient(to right, #a7be00, #498b34)` : `rgba(255, 255, 255, 0.2)`};
  opacity: 0.7;
`;

interface IValueProps {
  show: boolean;
}

const Value = styled.div<IValueProps>`
  position: relative;
  color: white;
  font-size: 10px;
  line-height: 1;
  text-align: center;
  color: white;
  display: ${(props) => (props.show ? "block" : "none")};
`;

const Label = styled.div`
  color: white;
  font-size: 10px;
  line-height: 1;
  text-align: right;
`;

const Container = styled.div`
  user-select: none;
  pointer-events: none;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.2);
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 5px;
  align-items: center;
  padding: 5px 10px;
`;

const File = styled.div`
  grid-column: 2;
  color: white;
  font-size: 11px;
`;

const FileDownloadProgress = observer(() => (
  <Bar progress={store.fileProgress} status={store.progressStatus}>
    <Thumb status={store.progressStatus} progress={store.fileProgress}></Thumb>
    <Value show={store.progressStatus === "active"}>{Math.floor(store.fileProgress)}%</Value>
  </Bar>
));

const TotalDownloadProgress = observer(() => (
  <Bar progress={store.totalProgress} status={store.progressStatus}>
    <Thumb status={store.progressStatus} progress={store.totalProgress}></Thumb>
    <Value show={store.progressStatus === "active"}>{Math.floor(store.totalProgress)}%</Value>
  </Bar>
));

const DonloadingFile = observer(() => <File>{store.downloadingFile || "Click Play to start game"}</File>);

export const ProgressBar = styled(({ ...props }) => {
  return (
    <Container {...props}>
      <DonloadingFile />
      <Label>File</Label>
      <FileDownloadProgress />
      <Label>Total</Label>
      <TotalDownloadProgress />
    </Container>
  );
})``;
