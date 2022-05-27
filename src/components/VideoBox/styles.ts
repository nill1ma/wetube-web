import YouTube from "react-youtube";
import styled from "styled-components";

type VideoBoxContainerProps = {
    current:boolean
}

export const Container = styled.div<VideoBoxContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height:${({current})=> current && 'calc(100vh - 132px)'};
  align-items: center;
  color: #ffffff;
`;

export const Video = styled(YouTube)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color:orange;
  border-radius:10px;
`;
export const opts = {
  height: "700",
  width: "1000",
};

export const optsNoCurrent = {
  height: "200",
  width: "400",
};