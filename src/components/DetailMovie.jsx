import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import { getDetails } from "../service/list.service";

function DetailMovie() {
  const { id } = useParams();
  const [movie, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    getDetails(id).then((data) => {
      setPost(data);
      setLoading(false);
    });
  }, [id]);

  if (loading) return <p className="text-xl font-medium">Loading...</p>;

  return (
    <div className="mt-8">
      <button className="text-xl btn-detail" onClick={() => navigate(-1)}>
        Back
      </button>
      <div className="mt-[20px] text-3xl font-bold">Details Movie</div>
      <div className="text-2xl font-bold mt-4">{movie.title}</div>
      <div className="flex justifiy-between gap-4 mt-4">
        <img
          className="w-60 rounded-xl"
          src={`${"http://image.tmdb.org/t/p/w500/"}${movie.poster_path}`}
        />
        <div className="text-xl font-medium">{movie.overview}</div>
      </div>
    </div>
  );
}

export default DetailMovie;
