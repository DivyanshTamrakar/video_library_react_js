import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { getData} from "../Utils/fetchApi";
import { useParams, Link } from "react-router-dom";
import { useHistory } from "../Context/HistoryContext";
import { useAuth } from "../Context/AuthContext";
import { arr } from "../Utils/dataArray";
import Recommend from "../Component/WatchVideoComponent/Recommend";
import PlayVideo from "../Component/WatchVideoComponent/PlayVideo";

export default function WatchVideo() {
  const { videoId } = useParams();
  const [result, setresult] = useState({});
  const [recommend, setrecommend] = useState([]);
  const { itemInhistoy, setIteminhistory } = useHistory();
  const { check } = useAuth();
  const [play,setplay] = useState({
    left:true,
    right:false
  });

  useEffect(() => {
    check();
    getVideoData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

   
  const getVideoData = async () => {
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
  };

  return (
    <div className="WatchVideoPage adjust">
      <div className="left-section">
        {result.watchlater?.length >= 0 && <PlayVideo videodata={result} play={play} setplay = {setplay} />}
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

        <div>
          {arr.map(function (item) {
            return (
              <div key={item.id}>
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/watch/${item.videoid}`}
                >
                  <Recommend id={item.id} title={item.title} url={item.url} play={play} setplay = {setplay} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
