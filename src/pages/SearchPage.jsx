import React from "react";
import { useLocation } from "react-router-dom";
import MovieCard from "../components/card/MovieCard";

const SearchPage = () => {
  const location = useLocation();
  const movies = location.state ? location.state.movies : [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <p className="text-center">No movies found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
