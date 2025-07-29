import React from "react";
import MovieList from "../components/MovieList";
import DetailMovie from "../components/DetailMovie";
import "../styles/Homes.css";
import {
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

function Homes() {
  return (
    <BrowserRouter className="flex justify-start items-center gap-16">
      <div className="text-7xl font-bold text-[#860000]">Deejay 21</div>
      <Link to="/MovieList" className="text-5xl font-bold text-white">
        Movies
      </Link>
      <Routes>
        <Route path="/MovieList" element={<MovieList />} />
        <Route path="/detail/:id" element={<DetailMovie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Homes;
