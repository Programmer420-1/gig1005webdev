import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import Home from './pages/Home';
function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      </Routes>
    </div>
    </Router>
    
  );
}

export default App;
