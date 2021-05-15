import './App.css';
import Header from './Component/Header';
import Video  from "./Component/VideoListing";
import WatchLater  from "./Component/WatchLater";
import Playlist  from "./Component/Playlist";
import History  from "./Component/History";
import WatchVideo from "./Component/WatchVideo"
import Signup from "./Component/SignUp"
import Login from "./Component/Login"
import {  Routes,Route,Navigate} from "react-router-dom";
import { useAuth } from './Context/LoginContext';



function App() {
  const {login,setlogin} = useAuth();

  function PrivateRoute({path, ...props}){
    return login ? <Route path={path} {...props}/>:<Navigate state={{from:path}} replace to='/login'/>;
    

  } 


  return (
    <div className="App">
          <Header/>
          <Routes>
          <Route path="/" element={<Video/>}/>
          <PrivateRoute path="/watch-later" element={<WatchLater/>}/>
          <Route path="/playlist" element={<Playlist/>}/>
          <PrivateRoute path="/history" element={<History/>}/>
          <Route path="/watch/:videoId" element={<WatchVideo/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          </Routes>




    </div>
  );
}

export default App;
