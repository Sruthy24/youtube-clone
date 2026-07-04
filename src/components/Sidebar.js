import React from "react";
import { List,ListItem,ListItemText } from "@mui/material";

function Sidebar(){

return(

<div style={{width:"200px",borderRight:"1px solid lightgray"}}>

<List>

<ListItem button>
<ListItemText primary="Home"/>
</ListItem>

<ListItem button>
<ListItemText primary="Trending"/>
</ListItem>

<ListItem button>
<ListItemText primary="Subscriptions"/>
</ListItem>

<ListItem button>
<ListItemText primary="Library"/>
</ListItem>

</List>

</div>

);

}

export default Sidebar;
