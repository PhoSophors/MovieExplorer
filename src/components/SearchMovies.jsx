import React, { useState, useEffect } from "react";
import { searchMovies } from "../service/tmdbService";
import MovieCard from "./card/MovieCard";
import Fuse from "fuse.js";
import { SearchOutlined } from "@ant-design/icons";

const SearchMovies = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [fuse, setFuse] = useState(null);

  useEffect(() => {
    // Initialize Fuse with options
    const options = {
      keys: ["title"], // Specify which keys to search in the movies array
      threshold: 0.3, // Adjust the fuzzy search threshold as needed (0 to 1)
    };
    const fuseInstance = new Fuse(movies, options);
    setFuse(fuseInstance);
  }, [movies]);

  const handleSearch = async (event) => {
    event.preventDefault();
    if (query.trim() === "") {
      setMovies([]);
      return;
    }

    try {
      const results = await searchMovies(query);
      setMovies(results);
    } catch (error) {
      console.error("Failed to search movies:", error);
    }
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
    if (fuse) {
      const filteredMovies = fuse.search(event.target.value);
      setMovies(filteredMovies.map((result) => result.item));
    }
  };

  return (
    <div className="max-w-full mx-auto p-4 backdrop-blur-sm bg-white/30 rounded-lg">
      <form
        onSubmit={handleSearch}
        className="flex items-center border-b border-blue-600 pb-2"
      >
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search for a movie..."
          className="flex-1 outline-none  bg-transparent text-slate-900 focus:outline-none"
        />
        <button
          type="submit"
          className="p-2 bg-blue-500 w-10 h-10 flex justify-center items-center text-white rounded-md ml-2 hover:bg-blue-600 focus:outline-none"
        >
          <SearchOutlined />
        </button>
      </form>
      <div className="mt-4 max-w-full w-full">
        {movies.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <p className="text-center mt-4">No movies found...</p>
        )}
      </div>
    </div>
  );
};

export default SearchMovies;
