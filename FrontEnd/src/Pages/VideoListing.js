import React, { useEffect, useState } from "react";
import { useAuth } from "../Context/AuthContext";
import { Link } from "react-router-dom";
import { getData } from "../Utils/fetchApi";
import VideoCard from "../Component/Card/VideoCard";

export default function Video() {
  const [videodata, setvideodata] = useState([]);
  const { check } = useAuth();
  check();

  useEffect(() => {
    getAllVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getAllVideos = async () => {
    try {
      let response = await getData("/videos");
      if (response.success) {
        setvideodata(response.videos);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="GridFrame adjust">
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
