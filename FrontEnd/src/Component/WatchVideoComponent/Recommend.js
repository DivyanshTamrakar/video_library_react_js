import React from "react";
import ReactPlayer from "react-player";

function Recommend({ id, url, title }) {
  return (
    <div className="Recommended-videos">
      <div>
        <ReactPlayer
          url={url}
          playing={false}
          width="100%"
          height="100%"
          controls={false}
        />
      </div>
      <div className="Recommended-videos-title text-align-left">{title}</div>
    </div>
  );
}

export default Recommend;
