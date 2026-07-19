import React from "react";
import {
  Home,
  Whatshot,
  MusicNote,
  SportsEsports,
  Newspaper,
  School,
  EmojiEvents,
  Checkroom,
  History,
  ThumbUp
} from "@mui/icons-material";

import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const menu = [
  { icon: <Home />, name: "Home", category: "trending" },
  { icon: <Whatshot />, name: "Trending", category: "trending" },
  { icon: <MusicNote />, name: "Music", category: "music" },
  { icon: <SportsEsports />, name: "Gaming", category: "gaming" },
  { icon: <Newspaper />, name: "News", category: "news" },
  { icon: <EmojiEvents />, name: "Sports", category: "sports" },
  { icon: <School />, name: "Learning", category: "learning" },
  { icon: <Checkroom />, name: "Fashion", category: "fashion" },
  { icon: <ThumbUp />, name: "Liked Videos", category: "popular" },
  { icon: <History />, name: "History", category: "history" }
];

function Sidebar() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: { xs: 70, md: 220 },
        background: "#0f0f0f",
        color: "white",
        height: "calc(100vh - 64px)",
        borderRight: "1px solid #303030",
        position: "sticky",
        top: "64px",
        overflowY: "auto"
      }}
    >
      {menu.map((item, index) => (
        <Box
          key={index}
          onClick={() => navigate(`/search/${item.category}`)}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            p: 2,
            cursor: "pointer",
            "&:hover": {
              background: "#272727"
            }
          }}
        >
          {item.icon}

          <Typography
            sx={{
              display: {
                xs: "none",
                md: "block"
              }
            }}
          >
            {item.name}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

export default Sidebar;
