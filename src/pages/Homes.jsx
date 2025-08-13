import React, { useState, useEffect } from "react";
import MovieList from "../components/MovieList";
import DetailMovie from "../components/DetailMovie";
import "../styles/Homes.css";
import {
  Routes,
  Route,
  Link,
  BrowserRouter,
  useLocation,
} from "react-router-dom";

import bg from "../assets/bg-mv.png";
import ef from "../assets/ef-mv.png";
import ic from "../assets/ic-mv.png";

function HomesWrapper() {
  return (
    <BrowserRouter>
      <Homes />
    </BrowserRouter>
  );
}

function Homes() {
  const location = useLocation();
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const parallaxY = offsetY * 0.5;

  return (
    <div className="relative text-white min-h-screen overflow-x-hidden">
      <div
        className="fixed top-0 left-0 w-full h-full -z-10 bg-no-repeat bg-center bg-cover pointer-events-none"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPositionY: -parallaxY,
        }}
      >
        <img
          src={ef}
          alt="Efek"
          className="absolute top-0 left-0 w-full h-full object-contain opacity-30 pointer-events-none"
          style={{
            transform: `translateY(${parallaxY * 0.7}px)`,
            transition: "transform 0.1s ease-out",
          }}
        />
        <img
          src={ic}
          alt="Icon"
          className="absolute top-32 left-1/2 -translate-x-1/2 w-1/3 z-10 pointer-events-none"
          style={{
            transform: `translateY(${parallaxY}px)`,
            transition: "transform 0.1s ease-out",
          }}
        />
      </div>
      <div className="flex justify-start items-center gap-16 px-10 py-6 z-20 relative bg-black/50 backdrop-blur-sm">
        <div className="text-7xl font-bold text-[#860000]">Deejay 21</div>
        <Link to="/MovieList" className="text-5xl font-bold text-white">
          Movies
        </Link>
      </div>
      <div className="relative z-10">
        <Routes>
          <Route path="/MovieList" element={<MovieList />} />
          <Route path="/detail/:id" element={<DetailMovie />} />
        </Routes>
      </div>
    </div>
  );
}

export default HomesWrapper;
