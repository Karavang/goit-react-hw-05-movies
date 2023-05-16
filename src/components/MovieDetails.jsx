import { fullInfo } from 'api';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export const MovieDetails = () => {
  console.log();
  const { id } = useParams();
  console.log(id);
  const [film, setFilm] = useState();

  useEffect(() => {
    const film = fullInfo(id);
    setFilm(film);
  }, []);

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
                  <h1>abboa</h1>
                </li>
                <li>
                  <p>Score</p>
                </li>
              </ul>
            </li>
            <li>
              <ul className="info-l">
                <li>
                  <h2>Overview</h2>
                </li>
                <li>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam eius quam mollitia explicabo iure! Vero corporis natus
                  laboriosam, mollitia aliquid nulla quam molestias
                  necessitatibus cumque illum vitae atque itaque! Quos.
                </li>
              </ul>
            </li>
            <li>
              <ul className="info-l">
                <li>Genres</li>
                <li>Drama</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};
