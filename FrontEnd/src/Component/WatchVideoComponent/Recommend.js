import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import React from "react";
import ReactPlayer from "react-player";

function Recommend({ id, url, title, play, setplay }) {

  
  return (
    <div className="Recommended-videos">
      <div>
        <ReactPlayer
          url={url}
          playing={play.right}
          width="100%"
          height="100%"
          controls={false}
          onPlay={()=>setplay({left:false,right:true})}
          playIcon={<PlayArrowIcon/>}
          light={true}
          
        />
      </div>
      <div className="Recommended-videos-title text-align-left">{title}</div>
    </div>
  );
}

export default Recommend;
