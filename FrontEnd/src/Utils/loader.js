import React from "react";
import Loader from "react-loader-spinner";

const Dotloader = () => {
  return (
    <Loader
      className="centerdivLoader"
      type="ThreeDots"
      color="#1976D2"
      height="100%"
      width="100%"
    />
  );
};

export default Dotloader;
