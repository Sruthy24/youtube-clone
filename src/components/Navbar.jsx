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

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#0f0f0f",
        boxShadow: "none",
        borderBottom: "1px solid #303030",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton sx={{ color: "white" }}>
            <Menu />
          </IconButton>

          <Box
            component="img"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt="YouTube"
            sx={{
              width: { xs: 90, md: 120 },
              ml: 1,
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          />
        </Box>

        {/* Center */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: {
              xs: "50%",
              sm: "55%",
              md: "45%",
            },
            border: "1px solid #303030",
            borderRadius: "25px",
            overflow: "hidden",
            backgroundColor: "#121212",
          }}
        >
          <InputBase
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyPress}
            sx={{
              ml: 2,
              flex: 1,
              color: "white",
            }}
          />

          <IconButton
            onClick={handleSearch}
            sx={{
              color: "white",
              backgroundColor: "#222",
              borderRadius: 0,
            }}
          >
            <Search />
          </IconButton>
        </Box>

        {/* Right */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            sx={{
              color: "white",
              display: { xs: "none", sm: "flex" },
            }}
          >
            <Mic />
          </IconButton>

          <IconButton
            sx={{
              color: "white",
              display: { xs: "none", md: "flex" },
            }}
          >
            <VideoCall />
          </IconButton>

          <IconButton
            sx={{
              color: "white",
              display: { xs: "none", md: "flex" },
            }}
          >
            <Notifications />
          </IconButton>

          <Avatar
            sx={{
              ml: 1,
              bgcolor: "red",
              width: 35,
              height: 35,
            }}
          >
            S
          </Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
