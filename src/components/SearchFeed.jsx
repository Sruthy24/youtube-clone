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
    <Box sx={{ display: "flex" }}>

      <Sidebar />

      <Box
        sx={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))",
          gap: 3,
          p: 3
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
