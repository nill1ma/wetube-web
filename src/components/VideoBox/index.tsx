import React, { memo } from "react";

import { Videos } from "../../models/videos";
import { opts, Video, Container, optsNoCurrent } from "./styles";

type VideoBoxProps = {
  video: Videos;
  current: boolean;
};

function VideoBox({ video, current }: VideoBoxProps) {
  return (
    <Container current={current}>
      <Video width='calc(80% + 20px)' height='90%' url={`https://www.youtube.com/watch?v=${video.id}`} controls='true' />
      <span>{video.title.substring(0, 25)} {video.title.length > 25 && '...'}</span>
    </Container>
  );
}

export default memo(VideoBox);
