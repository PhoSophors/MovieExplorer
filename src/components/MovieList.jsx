import React from "react";
import {
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchNowPlayingMovies,
  fetchUpcomingMovies,
  fetchTrendingMovies,
} from "../service/tmdbService";
import MovieCategory from "./MovieCategory";

const MovieList = () => (
  <div className="ml:p-0 md:p-0 p-3">
    <div id="popular">
      <MovieCategory
        title="Popular Movies"
        fetchMovies={fetchPopularMovies}
      ></MovieCategory>
    </div>

    <div id="playing">
      <MovieCategory
        title="Now Playing Movies"
        fetchMovies={fetchNowPlayingMovies}
      />
    </div>

    <div id="trending">
      <MovieCategory
        title="Trending Movies"
        fetchMovies={fetchTrendingMovies}
      />
    </div>
    <div id="upcoming">
      <MovieCategory
        title="Upcoming Movies"
        fetchMovies={fetchUpcomingMovies}
      />
    </div>
    <div id="rated">
      <MovieCategory
        title="Top Rated Movies"
        fetchMovies={fetchTopRatedMovies}
      />
    </div>
  </div>
);

export default MovieList;
