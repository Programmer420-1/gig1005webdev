import './App.css';
import Landing from './pages/Landing';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
      <Route exact path="/home" element={<Landing/>}/>
      <Route exact path="/" element={<Landing/>}/>
      </Routes>
    </div>
    </Router>
    
  );
}

export default App;
