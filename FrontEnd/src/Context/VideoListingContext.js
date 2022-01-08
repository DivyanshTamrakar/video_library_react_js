import { createContext, useContext, useEffect, useState } from "react";
import { getData } from "../Utils/fetchApi";
import { useLoader } from "./LoaderContext";


export const VideoListingContext = createContext();

export function VideoListingContextProvider({ children }) {
  const [videodata, setvideodata] = useState([]);
  const { setloader } = useLoader();

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
    <VideoListingContext.Provider value={{ videodata, setvideodata }}>
      {children}
    </VideoListingContext.Provider>
  );
}

export function useVideoListing() {
  return useContext(VideoListingContext);
}
