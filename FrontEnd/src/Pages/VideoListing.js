import React from "react";
import { useAuth } from "../Context/AuthContext";
import { Link } from "react-router-dom";
import VideoCard from "../Component/Card/VideoCard";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { useLoader } from "../Context/LoaderContext";
import { useVideoListing } from "../Context/VideoListingContext";

export default function Video() {
  const { check } = useAuth();
  const { loader } = useLoader();
  const { videodata } = useVideoListing();

  check();

  return (
    <div className="adjust">
      {loader ? (
        <Loader
          className="centerdiv"
          type="ThreeDots"
          color="#1976D2"
          height={100}
          width={100}
        />
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
