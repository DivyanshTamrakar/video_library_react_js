import './App.css';
import Header from './Component/Header';
import  Video  from "./Component/VideoListing";
import  WatchLater  from "./Component/WatchLater";
import Playlist  from "./Component/Playlist";
import History  from "./Component/History";
import WatchVideo from "./Component/WatchVideo"

import {  Routes,Route,Link} from "react-router-dom";


function App() {
  return (
    <div className="App">
          <Header/>

          <Routes>
          <Route path="/" element={<Video/>}/>
          <Route path="/watch-later" element={<WatchLater/>}/>
          <Route path="/playlist" element={<Playlist/>}/>
          <Route path="/history" element={<History/>}/>
          <Route path="/watch/:videoId" element={<WatchVideo/>}/>



          </Routes>




    </div>
  );
}

export default App;
