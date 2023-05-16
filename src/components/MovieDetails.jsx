import { fullInfo } from 'api';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export const MovieDetails = () => {
  console.log();
  const { id } = useParams();
  console.log(id);
  const [film, setFilm] = useState();

  useEffect(() => {
    const fetchFilm = async () => {
      const film = await fullInfo(id);
      setFilm(film);
    };

    fetchFilm();
  }, [id]);

  console.log(film);
  if (film) {
    return (
      <div className="container">
        <div key={film.id}>
          <Link to="/movies" className="li-of-titles">
            <button>Go back</button>
          </Link>
          <ul className="flexator">
            <li>
              <img
                src={`https://image.tmdb.org/t/p/w500/${film.backdrop_path}`}
                alt=""
              />
            </li>
            <li>
              <ul className="list-info">
                <li>
                  <ul className="info-l">
                    <li>
                      <h1>{film.original_title}</h1>
                    </li>
                    <li>
                      <p>{film.vote_average}</p>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul className="info-l">
                    <li>
                      <h2>Overview</h2>
                    </li>
                    <li>{film.overview}</li>
                  </ul>
                </li>
                <li>
                  <ul className="info-l flexator">
                    {film.genres.map(e => (
                      <li>{e.name}</li>
                    ))}
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="margin-top">
          <h3>Additional information</h3>
          <ul className="flexator">
            <li>Cast</li>
            <li>Reviews</li>
          </ul>
        </div>
      </div>
    );
  }
};
