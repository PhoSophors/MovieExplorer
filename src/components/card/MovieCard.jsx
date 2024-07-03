import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const navigateToDetail = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div
      className="movie-card  cursor-pointer"
      onClick={navigateToDetail}
    >
      <img
        className="card-image"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="mt-4 mb-4 mr-2">
        <h3 className="font-bold movie-title truncate mt-2 flex text-start">
          {movie.title}
        </h3>
        <p className="truncate-2 text-start text-gray-300">
          {movie.release_date}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
