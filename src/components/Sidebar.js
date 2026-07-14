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

import { Box } from "@mui/material";
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
  return (
<Box
  key={index}
  onClick={() => navigate(`/search/${item.category}`)}
  sx={{
    display: "flex",
    alignItems: "center",
    gap: 2,
    padding: "12px 20px",
    cursor: "pointer",
    "&:hover": {
      background: "#3d3d3d",
      borderRadius: "10px"
    }
  }}
>
      {menu.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            padding: "12px 20px",
            cursor: "pointer",
            "&:hover": {
              background: "#272727",
              borderRadius: "10px"
            }
          }}
        >
          {item.icon}
          <span>{item.name}</span>
        </Box>
      ))}
    </Box>
  );
}

export default Sidebar;
