import { useState } from "react";
import "./App.css";
import Homes from "./pages/Homes";
import DetailMovie from "./components/DetailMovie";
import {
  Routes,
  Route,  
  BrowserRouter as Router,
  BrowserRouter,
} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="m-8">
        <Homes />
      </div>
      <Router>
          <Routes>
            <Route path="/detail" element={<DetailMovie />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
