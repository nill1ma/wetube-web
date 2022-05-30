import React, { useState } from "react";
import Finder from "../../components/Finder";
import VideoBox from "../../components/VideoBox";
import { Videos } from "../../models/videos";
import { IYoutube } from "../../models/youtube";
import { get, save } from "../../services/firebase";
import { findVideos } from "../../services/youtube";
import { Container, CurrentVideo, SuggestionedVideos } from "./styles";
export default function Home() {
  const [videos, setVideos] = useState<Videos[]>(get());
  const [keyWord, setKeyWord] = useState<string>("");

  async function getVideos() {
    const { items, nextPageToken, prevPageToken } = await findVideos(keyWord);
    console.log(items, '==>> ITEMS')
    const videos = mountRecentVideosResearched(items);
    setVideos([...videos]);
    save(videos);
  }

  const handleKeyWord = (e: string) => {
    setKeyWord(e);
  };

  const mountRecentVideosResearched = (response: IYoutube[]) => {
    return response.map((resp: IYoutube, index: number) => {
      return {
        title: resp.snippet.title,
        id: resp.id.videoId,
        favorite: false,
        fcolor: "",
        playlist: false,
        pcolor: "",
        current: index === 0,
      };
    });
  };

  return (
    <Container>
      <CurrentVideo>
        <Finder handleKeyWord={handleKeyWord} action={getVideos} />
        {videos
          .filter((_, index: number) => index === 0)
          .map((item: Videos) => (
            <VideoBox key={item.id} current={true} video={item} />
          ))}
      </CurrentVideo>
      <SuggestionedVideos>
        {videos
          .filter((_, index: number) => index !== 0)
          .map((item: Videos) => (
            <VideoBox current={false} video={item} />
          ))}
      </SuggestionedVideos>
    </Container>
  );
}
