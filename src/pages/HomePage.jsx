import React, { useEffect, useState } from "react";
import { fetchPopularMovies } from "../service/tmdbService";
import MovieList from "../components/MovieList";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const movies = await fetchPopularMovies();
      setMovies(movies);
    };
    getMovies();
  }, []);

  return (
    <div>
      <Header />
      <div>
        <Hero />
      </div>
      <div className="mt-20">
        <MovieList movies={movies} />
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
