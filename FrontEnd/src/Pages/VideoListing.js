import React from "react";
import { useAuth } from "../Context/AuthContext";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { useLoader } from "../Context/LoaderContext";
import { useVideoListing } from "../Context/VideoListingContext";
import Dotloader from "../Utils/loader";
import Videolist from "../Component/Card/Videolist";

export default function Video() {
  const { check } = useAuth();
  const { loader } = useLoader();
  const { videodata } = useVideoListing();

  check();

  return (
    <div className="adjust">
      {loader ? <Dotloader /> : <Videolist videodata={videodata} />}
    </div>
  );
}
