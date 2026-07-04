import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Box,
  Avatar
} from "@mui/material";

import {
  Menu,
  Search,
  Mic,
  VideoCall,
  Notifications
} from "@mui/icons-material";

import { useNavigate } from "react-router-dom";

function Navbar() {

  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm}`);
    }
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        background: "#0f0f0f",
        boxShadow: "none",
        borderBottom: "1px solid #303030"
      }}
    >
      <Toolbar>

        <IconButton sx={{ color: "white" }}>
          <Menu />
        </IconButton>

        <h2
          style={{
            color: "red",
            marginLeft: 10,
            cursor: "pointer"
          }}
          onClick={() => navigate("/")}
        >
          YouTube
        </h2>

        <Box sx={{ flex: 1 }} />

        <Box
          sx={{
            display: "flex",
            width: "45%",
            border: "1px solid #303030",
            borderRadius: "25px",
            overflow: "hidden",
            background: "#121212"
          }}
        >

          <InputBase
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{
              ml: 2,
              flex: 1,
              color: "white"
            }}
          />

          <IconButton
            onClick={handleSearch}
            sx={{
              background: "#222",
              color: "white"
            }}
          >
            <Search />
          </IconButton>

        </Box>

        <IconButton
          sx={{
            color: "white",
            ml: 2
          }}
        >
          <Mic />
        </IconButton>

        <Box sx={{ flex: 1 }} />

        <IconButton sx={{ color: "white" }}>
          <VideoCall />
        </IconButton>

        <IconButton sx={{ color: "white" }}>
          <Notifications />
        </IconButton>

        <Avatar
          sx={{
            ml: 2,
            bgcolor: "red"
          }}
        >
          S
        </Avatar>

      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
