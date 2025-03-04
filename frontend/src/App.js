import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Route1 from "./pages/Route1";
import Route2 from "./pages/Route2";
import Route3 from "./pages/Route3";
import Route4 from "./pages/Route4";
import "bootstrap/dist/css/bootstrap.min.css"; 

function App() {
  return (
    <Router>
      <nav className="p-3 bg-light d-flex gap-2">
        <Link to="/route1" className="btn btn-primary">
          Page 1
        </Link>
        <Link to="/route2" className="btn btn-primary">
          Page 2
        </Link>
        <Link to="/route3" className="btn btn-primary">
          Page 3
        </Link>
        <Link to="/route4" className="btn btn-primary">
          Page 4
        </Link>
      </nav>
      <Routes>
        <Route path="/route1" element={<Route1 />} />
        <Route path="/route2" element={<Route2 />} />
        <Route path="/route3" element={<Route3 />} />
        <Route path="/route4" element={<Route4 />} />
      </Routes>
    </Router>
  );
}

export default App;
