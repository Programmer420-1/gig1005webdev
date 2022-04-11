import "./App.css";
import Landing from "./pages/Landing";
import logo from "./logo.svg";
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
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* <Route exact path="/home" element={<Landing />} />
          <Route exact path="/" element={<Landing />} /> */}
          <Route exact path="/" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;