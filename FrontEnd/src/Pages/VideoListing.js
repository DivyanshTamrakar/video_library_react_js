import React, { useEffect, useState } from "react";
import { useAuth } from "../Context/AuthContext";
import { Link } from "react-router-dom";
import { getData } from "../Utils/fetchApi";
import VideoCard from "../Component/Card/VideoCard";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { useLoader } from "../Context/LoaderContext";

export default function Video() {
  const [videodata, setvideodata] = useState([]);
  const { check } = useAuth();
  const { loader, setloader } = useLoader();

  check();

  useEffect(() => {
    getAllVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getAllVideos = async () => {
    setloader(true);
    try {
      let response = await getData("/videos");
      if (response.success) {
        setloader(false);
        setvideodata(response.videos);
      }
    } catch (error) {
      setloader(false);
      console.error(error);
    }
  };

  return (
    <div className="adjust">
      {
      loader ? (
        <Loader className="centerdiv" type="ThreeDots" color="#1976D2" height={100} width={100} />
      ) : (
        <div className="GridFrame">
          {videodata.map(function ({ _id, videoid, title, avatar, url }) {
            return (
              <div key={_id}>
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/watch/${videoid}`}
                >
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
      )}
    </div>
  );
}
