import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import VideoCard from "./VideoCard";
import { searchVideos } from "../utils/api";

function Feed() {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    searchVideos("popular movies")
      .then((data) => setVideos(data))
      .catch(console.log);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        background: "#0f0f0f",
        minHeight: "100vh"
      }}
    >
      <Sidebar />

      <Box
        sx={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2,1fr)",
            md: "repeat(3,1fr)",
            lg: "repeat(4,1fr)"
          },
          gap: 3,
          p: 2
        }}
      >
        {videos.map((video) => (
          <VideoCard
            key={video.id.videoId}
            video={video}
          />
        ))}
      </Box>
    </Box>
  );
}

export default Feed;
