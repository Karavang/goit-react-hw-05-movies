import { forHomePage } from 'api';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    async function getTitles() {
      const res = await forHomePage();
      const titles = res.results;
      setTitles(titles);
    }

    getTitles();
  }, []);

  return (
    <ul className="list-titles">
      {titles.map(e => {
        return (
          <Link to={`/movies/${e.id}`} className="li-of-titles">
            <li key={e.id}>{e.original_title}</li>
          </Link>
        );
      })}
    </ul>
  );
};
