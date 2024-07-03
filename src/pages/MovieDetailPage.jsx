import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails, fetchWatchProviders } from "../service/tmdbService";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const movieData = await fetchMovieDetails(id);
        setMovie(movieData);
        const providersData = await fetchWatchProviders(id);
        setProviders(providersData);
      } catch (error) {
        console.error("Failed to fetch movie details:", error);
      }
    };
    getMovieDetails();
  }, [id]);

  if (!movie)
    return (
      <div className="flex h-screen justify-center items-center xl:text-xl md:text-md text-md">
        Loading...
      </div>
    );

  return (
    <>
      <Header isOtherPage={true} />
      <div className="xl:max-w-movies md:w-auto mx-auto xl:h-screen flex items-center md:h-auto h-auto">
        <div className="grid xl:grid-cols-2 md:grid-cols-1 xl:mt-0 md:mt-20 mt-0 grid-cols-1 ">
          <div className="flex xl:justify-end justify-center  xl:mr-5 md:mr-5 mr-0">
            <img
              className="detail-movie-image "
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
          <div className="xl:p-0 md:p-3 p-3 mt-5">
            <h1 className="xl:text-3xl movie-title  md:text-2xl text-xl text-start font-bold">
              {movie.title}
            </h1>
            <p className="xl:text-2xl md:text-xl text-md mt-3 text-gray-400">
              {movie.overview}
            </p>
            <h2 className="mt-5">Watch Providers:</h2>
            {providers && providers.US && providers.US.flatrate ? (
              <ul>
                {providers.US.flatrate.map((provider) => (
                  <li key={provider.provider_id}>{provider.provider_name}</li>
                ))}
              </ul>
            ) : (
              <p>No streaming providers available.</p>
            )}
          </div>
        </div>
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </>
  );
};

export default MovieDetailPage;
