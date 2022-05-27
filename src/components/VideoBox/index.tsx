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
        <Video opts={current ? opts : optsNoCurrent} videoId={video.id} title={video.title}  />
        <span>{video.title.substring(0, 35)} {video.title.length > 35 && '...'}</span>
      </Container>
  );
}

export default memo(VideoBox);
