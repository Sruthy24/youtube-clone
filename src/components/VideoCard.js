import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography
} from "@mui/material";

import { useNavigate } from "react-router-dom";

function VideoCard({ video }) {

  const navigate = useNavigate();

  if (!video.id?.videoId) return null;

  return (
    <Card
      onClick={() => navigate(`/video/${video.id.videoId}`)}
      sx={{
        background: "#0f0f0f",
        color: "white",
        boxShadow: "none",
        cursor: "pointer"
      }}
    >

      <CardMedia
        component="img"
        image={video.snippet.thumbnails.high.url}
        height="200"
        sx={{
          borderRadius: "15px"
        }}
      />

      <CardContent>

        <Typography
          fontWeight="bold"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          }}
        >
          {video.snippet.title}
        </Typography>

        <Typography color="gray">

          {video.snippet.channelTitle}

        </Typography>

      </CardContent>

    </Card>
  );
}

export default VideoCard;
