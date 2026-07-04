import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import VideoCard from "./VideoCard";
import { fetchVideos } from "../utils/api";

function RecommendedVideos() {

  const [videos, setVideos] = useState([]);

  useEffect(() => {

    fetchVideos("popular")

      .then((data) => setVideos(data.items))

      .catch(console.log);

  }, []);

  return (

    <Box
      sx={{
        width: "380px",
        ml: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2
      }}
    >

      {videos.map((video) => (

        <VideoCard

          key={video.id.videoId}

          video={video}

        />

      ))}

    </Box>

  );
}

export default RecommendedVideos;
