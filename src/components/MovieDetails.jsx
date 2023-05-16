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
  });
  console.log(film);
  if (film) {
    return (
      <div>
        <Link to="/movies" className="li-of-titles">
          <button>Go back</button>
        </Link>
        <ul className="flexator">
          <li>
            <img src="/" alt="" />
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
                <ul className="info-l">
                  {film.genres.map(e => (
                    <li>{e.name}</li>
                  ))}
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
};
