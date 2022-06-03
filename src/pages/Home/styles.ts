import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  height:calc(100vh - 70px);
`;
export const Content = styled.div`
  display: flex;
    flex-wrap:wrap;
    justify-content:space-around;
    width: 100%;
    overflow-y: auto;
    ::-webkit-scrollbar {
      width: 5px;
    }

    ::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px #fff;
    }

    ::-webkit-scrollbar-thumb {
      -webkit-box-shadow: inset 0 0 6px #fff;
    }
    ::-webkit-scrollbar-thumb:window-inactive {
    }
`;
export const OtherVideosFound = styled.div``;
