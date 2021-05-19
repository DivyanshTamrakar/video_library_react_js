import './App.css';
import Header from './Component/Header';
import Video  from "./Component/VideoListing";
import WatchLater  from "./Component/WatchLater";
import Playlist  from "./Component/Playlist";
import History  from "./Component/History";
import WatchVideo from "./Component/WatchVideo"
import Signup from "./Component/SignUp"
import Login from "./Component/Login"
import { PrivateRoute } from "./PrivateRoutes/privateroutes";
import {  Routes,Route} from "react-router-dom";



function App() {

  return (
    <div className="App">
          <Header/>
          <Routes>
          <Route path="/" element={<Video/>}/>
          <PrivateRoute path="/watch-later" element={<WatchLater/>}/>
          <PrivateRoute path="/history" element={<History/>}/>
          <Route path="/playlist" element={<Playlist/>}/>
          <Route path="/watch/:videoId" element={<WatchVideo/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          </Routes>
    </div>
  );
}

export default App;
