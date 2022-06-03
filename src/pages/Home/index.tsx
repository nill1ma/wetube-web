import React, { useState } from "react";
import Header from "../../components/Header";
import VideoBox from "../../components/VideoBox";
import { Videos } from "../../models/videos";
import { IYoutube } from "../../models/youtube";
import { get, save } from "../../services/firebase";
import { findVideos } from "../../services/youtube";
import { Container, Content } from "./styles";
export default function Home() {
  const [videos, setVideos] = useState<Videos[]>(get());
  const [keyWord, setKeyWord] = useState<string>("");
  const [prev, setPrev] = useState("");
  const [next, setNext] = useState("");
  async function getVideos(pageToken?: string) {
    const { items, nextPageToken, prevPageToken } = await findVideos(
      keyWord,
      pageToken
    );
    setNext(nextPageToken);
    prevPageToken && setPrev(prevPageToken);
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
      <Header handleKeyWord={handleKeyWord} action={getVideos} prev={prev} next={next} />
      <Content>
        {videos.map((item: Videos) => (
          <VideoBox key={item.id} video={item} />
        ))}
      </Content>
    </Container>
  );
}
