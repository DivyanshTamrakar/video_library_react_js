import React from "react";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";

function Videolist({ videodata }) {
  return (
    <div className="GridFrame">
      {videodata.map(function ({ _id, videoid, title, avatar, url }) {
        return (
          <div key={_id}>
            <Link style={{ textDecoration: "none" }} to={`/watch/${videoid}`}>
              <div className="Card">
                <VideoCard
                  url={url}
                  avatar={avatar}
                  title={title}
                  videoid={videoid}
                  id={_id}
                />
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Videolist;
