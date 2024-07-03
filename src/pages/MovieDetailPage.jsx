import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails, fetchWatchProviders } from '../service/tmdbService';

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const movieData = await fetchMovieDetails(id);
        setMovie(movieData);
        const providersData = await fetchWatchProviders(id);
        setProviders(providersData);
      } catch (error) {
        console.error('Failed to fetch movie details:', error);
      }
    };
    getMovieDetails();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <p>{movie.overview}</p>
      <h2>Watch Providers:</h2>
      {providers && providers.US && providers.US.flatrate ? (
        <ul>
          {providers.US.flatrate.map(provider => (
            <li key={provider.provider_id}>{provider.provider_name}</li>
          ))}
        </ul>
      ) : (
        <p>No streaming providers available.</p>
      )}
    </div>
  );
};

export default MovieDetailPage;
