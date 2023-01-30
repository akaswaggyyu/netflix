import axios from "../axios";
import React, { useEffect, useState } from "react";
import "./Row.css";
import requests from "../Requests";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return requests;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                src={`https://image.tmdb.org/t/p/original/${
                  isLargeRow ? movie?.poster_path : movie?.backdrop_path
                }`}
                alt="movie-poster"
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                key={movie.id}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Row;
