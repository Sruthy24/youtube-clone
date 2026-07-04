import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { fetchVideos } from "../utils/api";
import RecommendedVideos from "./RecommendedVideos";

function VideoDetail() {

  const { id } = useParams();

  const [video, setVideo] = useState(null);

  useEffect(() => {
    fetchVideos(id).then((data) => {
      if (data.items.length > 0) {
        setVideo(data.items[0]);
      }
    });
  }, [id]);

  return (

    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          lg: "row"
        },
        p: 2,
        background: "#0f0f0f",
        minHeight: "100vh"
      }}
    >

      <Box sx={{ flex: 2 }}>

        <ReactPlayer

          url={`https://www.youtube.com/watch?v=${id}`}

          controls

          width="100%"

          height="600px"

        />

        {video && (

          <>

            <Typography
              variant="h5"
              sx={{
                mt: 2,
                color: "white",
                fontWeight: "bold"
              }}
            >
              {video.snippet.title}
            </Typography>

            <Typography
              sx={{
                color: "gray",
                mt: 1
              }}
            >
              {video.snippet.channelTitle}
            </Typography>

          </>

        )}

      </Box>

      <RecommendedVideos />

    </Box>

  );
}

export default VideoDetail;
