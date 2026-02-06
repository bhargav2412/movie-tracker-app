import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const MovieDetails = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${import.meta.env.VITE_MOVIE_KEY}&i=${id}`,
      );
      const data = await res.json();
      setMovies(data);
    };
    getMovieDetails();
  }, [id]);

  if (!movies) return <p>Loading...</p>;

  return (
    <div className="movie-detail">
      <h2>{movies.Title}</h2>
      <img alt={movies.Title} src={movies.Poster} />
      <p>
        <strong>Genre:</strong>
        {movies.Genre}
      </p>
      <p>
        <strong>Released:</strong> {movies.Released}
      </p>
      <p>
        <strong>Plot:</strong> {movies.Plot}
      </p>
    </div>
  );
};

export default MovieDetails;
