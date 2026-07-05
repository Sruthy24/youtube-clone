import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import VideoCard from "./VideoCard";
import { getRelatedVideos } from "../utils/api";
import { useParams } from "react-router-dom";

function RecommendedVideos() {
const { id } = useParams();
  const [videos, setVideos] = useState([]);

 useEffect(() => {

    getRelatedVideos(id)
      .then((data) => setVideos(data))
      .catch(console.log);

}, [id]);

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
