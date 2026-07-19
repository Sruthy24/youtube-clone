import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function VideoCard({ video }) {
  const navigate = useNavigate();

  if (!video?.id?.videoId) return null;

  return (
    <Card
      onClick={() => navigate(`/video/${video.id.videoId}`)}
      sx={{
        background: "#0f0f0f",
        color: "white",
        cursor: "pointer",
        borderRadius: "15px",
        boxShadow: "none",
        transition: "0.3s",
        "&:hover": {
          transform: "scale(1.02)"
        }
      }}
    >
      <CardMedia
        component="img"
        image={video.snippet.thumbnails.high.url}
        alt={video.snippet.title}
        sx={{
          width: "100%",
          aspectRatio: "16/9",
          objectFit: "cover"
        }}
      />

      <CardContent>
        <Typography
          variant="subtitle1"
          sx={{
            color: "white",
            fontWeight: "bold",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          }}
        >
          {video.snippet.title}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "#aaaaaa",
            mt: 1
          }}
        >
          {video.snippet.channelTitle}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default VideoCard;
