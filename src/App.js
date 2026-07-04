import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import VideoCard from "./components/VideoCard";
import videos from "./data";

function App(){

return(

<div>

<Header/>

<div style={{display:"flex"}}>

<Sidebar/>

<div
style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fill,minmax(320px,1fr))",
gap:"20px",
padding:"20px",
width:"100%"
}}
>

{
videos.map((video,index)=>(
<VideoCard key={index} video={video}/>
))
}

</div>

</div>

</div>

);

}

export default App;
