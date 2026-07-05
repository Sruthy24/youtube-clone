import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import VideoCard from "./VideoCard";
import { searchVideos } from "../utils/api";

function Feed() {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
   searchVideos("popular movies")
      .then((data) => setVideos(data.items))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Box sx={{ display: "flex" }}>

      <Sidebar />

      <Box
        sx={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))",
          gap: 3,
          p: 3,
          background: "#0f0f0f"
        }}
      >
        {videos.map((video) => (
          <VideoCard key={video.id.videoId} video={video} />
        ))}
      </Box>

    </Box>
  );
}

export default Feed;
