import "./css/App.css";
import Landing from "./pages/Landing";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

import { AboutUs } from "./pages/About Us/AboutUs";
import React from "react";
import Event from './pages/Event';
import MyGallery from './pages/Gallery';
import CommitteeGallery from './pages/CommitteeGallery';
import QnA from './pages/QnA';
import Leaderboard from "./pages/Leaderboard";

function App() {
  return (
    <Router>
      <div className="App hideScrollBar">
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/about%20us" element={<AboutUs />} />
          <Route exact path="/faq" element={<QnA />} />
          <Route exact path="/gallery" element={<MyGallery />} />
          <Route exact path="/event" element={<Event />} />
          <Route exact path="/leaderboard" element={<Leaderboard />} />
          <Route exact path="/department%20photo" element={<CommitteeGallery />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
