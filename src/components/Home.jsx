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
          <li key={e.id}>
            <Link href="/" className="li-of-titles">
              {e.original_title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
