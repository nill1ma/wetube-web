import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: calc(100vw - 12px);
  span{
      padding:5px 0;
  }
`;
export const OtherVideosFound = styled.div``;

export const CurrentVideo = styled.div`
  width: calc(70% - 60px);
  height: calc(100vh - 82px);
`;

export const SuggestionedVideos = styled.div`
  padding: 5px 0;
  width: calc(28% - 2px);
  height: calc(100vh - 10px);
  overflow: auto;
`;
