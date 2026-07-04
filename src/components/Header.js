import React from "react";
import { AppBar, Toolbar, Typography, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function Header(){

return(

<AppBar position="static" color="error">

<Toolbar>

<Typography variant="h6" sx={{fontWeight:"bold"}}>
YouTube
</Typography>

<div style={{
display:"flex",
alignItems:"center",
marginLeft:"40px",
background:"white",
padding:"5px 10px",
borderRadius:"20px",
width:"300px"
}}>

<SearchIcon/>

<InputBase
placeholder="Search..."
style={{marginLeft:"10px",width:"100%"}}
/>

</div>

</Toolbar>

</AppBar>

);

}

export default Header;
