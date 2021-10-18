import "./App.css";
import Video from "./Pages/VideoListing";
import WatchLater from "./Pages/WatchLater";
import Playlist from "./Pages/Playlist";
import History from "./Pages/History";
import WatchVideo from "./Pages/WatchVideo";
import Signup from "./Pages/SignUp";
import Login from "./Pages/Login";
import { PrivateRoute } from "./Component/PrivateRoutes/privateroutes";
import { Routes, Route } from "react-router-dom";
import DrawerAppBar from "./Component/Header/DrawerAppBar";
import Profile from "./Pages/Profile";
import { useLoader } from "./Context/LoaderContext";

function App() {
  const { loader } = useLoader();
  return (
    <div className="App">
      {!loader && <DrawerAppBar />}
      <Routes>
        <Route path="/" element={<Video />} />
        <PrivateRoute path="/watch-later" element={<WatchLater />} />
        <PrivateRoute path="/history" element={<History />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/watch/:videoId" element={<WatchVideo />} />
        <Route path="/login" element={<Login />} />
        <PrivateRoute path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
