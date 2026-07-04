import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

function VideoCard({video}){

return(

<Card sx={{width:320}}>

<CardMedia
component="img"
height="180"
image={video.image}
/>

<CardContent>

<Typography variant="h6">
{video.title}
</Typography>

<Typography color="gray">
{video.channel}
</Typography>

<Typography variant="body2">
{video.views}
</Typography>

</CardContent>

</Card>

);

}

export default VideoCard;
