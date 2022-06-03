import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactPlayer from "react-player";
import styled from "styled-components";

type VideoBoxContainerProps = {
  current: boolean;
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(30% - 20px);
  height: calc(50% - 100px);
  color: #ffffff;
  background-color: rgba(235, 149, 50, 0.8);
  font-weight: bold;
  padding: 10px 10px 0 10px;
  margin-top: 10px;
  border-radius: 10px;
  div {
    padding: 10px 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

export const Video = styled(ReactPlayer)``;

export const Icon = styled(FontAwesomeIcon)`
  cursor: pointer;
`;
