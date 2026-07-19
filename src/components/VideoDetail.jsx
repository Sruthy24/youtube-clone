import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { getVideoDetails, searchVideos } from "../utils/api";
import VideoCard from "./VideoCard";

function VideoDetail() {

  const { id } = useParams();

  const [video, setVideo] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);

  useEffect(() => {

    getVideoDetails(id)
      .then((data) => setVideo(data));

    searchVideos("popular")
      .then((data) => setRelatedVideos(data));

  }, [id]);

  if (!video) return <Typography color="white">Loading...</Typography>;

  return (

    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          lg: "row"
        },
        gap: 3,
        p: 3,
        background: "#0f0f0f"
      }}
    >

      <Box flex={1}>

        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${id}`}
          controls
          width="100%"
          height="60vh"
        />

        <Typography
          sx={{
            mt: 2,
            color: "white",
            fontWeight: "bold",
            fontSize: {
              xs: "20px",
              md: "28px"
            }
          }}
        >
          {video.snippet.title}
        </Typography>

        <Typography
          sx={{
            color: "#aaa",
            mt: 1
          }}
        >
          {video.snippet.channelTitle}
        </Typography>

      </Box>

      <Box
        sx={{
          width: {
            xs: "100%",
            lg: "380px"
          }
        }}
      >
        {relatedVideos.map((item) => (
          <VideoCard
            key={item.id.videoId}
            video={item}
          />
        ))}
      </Box>

    </Box>
  );
}

export default VideoDetail;
