import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { WatchLaterProvider } from "./Context/WatchlaterContext";
import { HistoryContextProvider } from "./Context/HistoryContext";
import { AuthProvider } from "./Context/AuthContext";
import { PlaylistProvider } from "./Context/PlaylistContext";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <WatchLaterProvider>
          <PlaylistProvider>
            <HistoryContextProvider>
              <App />
            </HistoryContextProvider>
          </PlaylistProvider>
        </WatchLaterProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
