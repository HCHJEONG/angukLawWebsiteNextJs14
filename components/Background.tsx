'use client';

import ReactPlayer from "react-player";

export default function Background () { return (<ReactPlayer
  url={"https://www.youtube.com/watch?v=0CjdvnYIW4M&t=80s&pp=ygUNIOqyveuzteq2gSA0aw%3D%3D"}
  width="100vw"
  height="100vh"
  loop={true}
  playing={true}
  muted={true}
  controls={false}
/>) }