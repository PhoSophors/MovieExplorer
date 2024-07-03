import React, { useEffect, useState } from "react";
import MovieCard from "./card/MovieCard";

const MovieCategory = ({ title, fetchMovies }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const fetchedMovies = await fetchMovies();
        setMovies(fetchedMovies);
      } catch (error) {
        console.error(`Failed to fetch ${title} movies:`, error);
      }
    };

    getMovies();
  }, [fetchMovies, title]);

  return (
    <div className="max-w-movies mx-auto">
      <h1 className="flex justify-start text-4xl font-bold mt-10 mb-2">
        {title}
      </h1>
      {/* Container for scrolling */}
      <div className="flex card-scroll overflow-x-auto scrollbar-hide">
        {/* Container to hold all movies in a single row */}
        <div
          className="flex gap-2"
          style={{ minWidth: "max-content" }}
        >
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              style={{ minWidth: "auto", flex: "none" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieCategory;
