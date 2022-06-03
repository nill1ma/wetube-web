import { faListAlt, faStar } from "@fortawesome/free-solid-svg-icons";
import React, { memo } from "react";
import { Videos } from "../../models/videos";
import { Icon } from "../FloatMenu/styles";
import { Container, Video } from "./styles";

type VideoBoxProps = {
  video: Videos;
};

function VideoBox({ video }: VideoBoxProps) {
  return (
    <Container>
      <Video
        width="100%"
        height="100%"
        url={`https://www.youtube.com/watch?v=${video.id}`}
        controls="true"
      />
      <div>
        <Icon icon={faStar} />
        <span>
          {video.title.substring(0, 25)} {video.title.length > 25 && "..."}
        </span>
        <Icon icon={faListAlt} />
      </div>
    </Container>
  );
}

export default memo(VideoBox);
