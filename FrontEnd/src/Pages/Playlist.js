import { useEffect, useState } from "react";
import ShowPlaylists from "../Component/Playlist/ShowPlaylists";
import { getData } from "../Utils/fetchApi";

export default function Playlist() {
  const userid = localStorage.getItem("userId");
  const [playlist, setplaylist] = useState([]);
  useEffect(() => {
    getUserPlaylists();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getUserPlaylists = async () => {
    try {
      const response = await getData(`/playlist/${userid}`);
      if (response.success) {
        setplaylist(response.playlists);
      }
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div className="adjust">
      <h2 style={{ textAlign: "left", margin: "96px 0 20px 0" }}>
        Your Playlist
      </h2>
      {playlist.length > 0 ? (
        <ShowPlaylists playlists={playlist} />
      ) : (
        <diV className='noData'>You don't have any playlist!</diV>
      )}
    </div>
  );
}
