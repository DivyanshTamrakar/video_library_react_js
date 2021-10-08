import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { getData } from "../Utils/fetchApi";
import { useParams, Link } from "react-router-dom";
import { useHistory } from "../Context/HistoryContext";
import { useAuth } from "../Context/AuthContext";
import { arr } from "../Utils/dataArray";
import Recommend from "../Component/WatchVideoComponent/Recommend";
import PlayVideo from "../Component/WatchVideoComponent/PlayVideo";

export default function WatchVideo() {
  let { videoId } = useParams();
  const [result, setresult] = useState({});
  const [recommend, setrecommend] = useState([]);
  const { itemInhistoy, setIteminhistory } = useHistory();
  const { check } = useAuth();

  useEffect(() => {
    check();
    getVideoData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getVideoData() {
    try {
      const response = await getData(`/videos/${videoId}`);

      if (response.success) {
        setrecommend(response.video.recommmend);
        setresult(response.video);
      }
      // Add this data to history context
      setIteminhistory([...itemInhistoy, response.video]);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className="WatchVideoPage adjust">
      <div className="left-section">
        {result.watchlater?.length >= 0 && <PlayVideo videodata={result} />}
      </div>

      <div className="right-section">
        {recommend.map(function (item) {
          return (
            <div key={item} className="chip">
              {" "}
              {item}{" "}
            </div>
          );
        })}

        <div className="history-left-watch">
          <div style={{ textAlign: "left" }}></div>
          {arr.map(function (item) {
            return (
              <div key={item.id}>
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/watch/${item.videoid}`}
                >
                  <Recommend id={item.id} title={item.title} url={item.url} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
