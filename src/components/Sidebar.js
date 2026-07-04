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

const menu = [
  { icon: <Home />, name: "Home" },
  { icon: <Whatshot />, name: "Trending" },
  { icon: <MusicNote />, name: "Music" },
  { icon: <SportsEsports />, name: "Gaming" },
  { icon: <Newspaper />, name: "News" },
  { icon: <EmojiEvents />, name: "Sports" },
  { icon: <School />, name: "Learning" },
  { icon: <Checkroom />, name: "Fashion" },
  { icon: <ThumbUp />, name: "Liked Videos" },
  { icon: <History />, name: "History" }
];

function Sidebar() {
  return (
    <Box
      sx={{
        width: "220px",
        background: "#0f0f0f",
        color: "white",
        height: "100vh",
        paddingTop: "15px",
        borderRight: "1px solid #303030",
        position: "sticky",
        top: "64px"
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
