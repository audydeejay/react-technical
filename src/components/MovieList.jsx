import React, { useEffect, useState } from "react";
import { getList, searchMovie, getCategory, getCategoryBy } from "../service/list.service";
import "../styles/Movie.css";
import { Navigate, useNavigate } from "react-router-dom";

const MovieList = () => {
  const [listMovies, setListMovies] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const navigate = useNavigate();

  useEffect(() => {
    getList().then((result) => {
      setListMovies(result);
    });
  }, []);

  useEffect(() => {
    getCategory().then((result) => {
      setCategories(result);
    });
  }, []);

  const CategorySet = () => {
    return (
      <div className="flex gap-4 mt-8">
        <div>Select Category:</div>
        <button
          className={`category-button ${
            selectedCategory === "all" ? "active" : ""
          }`}
          onClick={() => {
            setSelectedCategory("all");
            getList().then((result) => setListMovies(result));
          }}
        >
          All
        </button>
        {listMovies.map((category) => (
          <button
            key={category.id}
            className={`category-button ${
              selectedCategory === category.name ? "active" : ""
            }`}
            onClick={() => {
              setSelectedCategory(category.name);
              getList().then((result) => {
                const filteredMovies = result.filter((movie) =>
                  movie.genre_ids.includes(category.id)
                );
                setListMovies(filteredMovies);
              });
            }}
          >
            {category.name}
          </button>
        ))}
      </div>
    );
  };

  const ListMovies = () => {
    return listMovies.map((movie, s) => {
      return (
        <div className="box-movie" key={s}>
          <div className="flex justify-between p-4">
            <img
              className="w-34 rounded-xl"
              src={`${"http://image.tmdb.org/t/p/w500/"}${movie.poster_path}`}
            />
            <div className="flex font-bold flex-col items-end">
              <div className="txt-title text-right max-w-40">{movie.title}</div>
              <div className="text-sm mt-[10px]">{movie.release_date}</div>
              <button
                onClick={() => navigate(`/detail/${movie.id}`)}
                className="mt-[24px] text-xl btn-detail"
              >
                Detail
              </button>
            </div>
          </div>
        </div>
      );
    });
  };

  const search = async (a) => {
    if (a.length > 2) {
      const query = await searchMovie(a);
      setListMovies(query.results);
    } else {
      listMovies;
    }
  };

  return (
    <div className="text-3xl font-bold underline text-white">
      <a className="mt-16">Your Movies is Here</a>
      <CategorySet />
      <div>
        <input
          placeholder="Search your movie ..."
          className="movie-seach p-[20px] m-[40px]"
          onChange={({ target }) => search(target.value)}
        />
        <div className="wrape-movie">
          <ListMovies />
        </div>
      </div>
    </div>
  );
};

export default MovieList;
