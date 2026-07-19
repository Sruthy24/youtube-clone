import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import VideoCard from "./VideoCard";
import { searchVideos } from "../utils/api";

function SearchFeed() {
  const { searchTerm } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    searchVideos(searchTerm)
      .then((data) => setVideos(data))
      .catch((err) => console.log(err));
  }, [searchTerm]);

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

export default SearchFeed;
