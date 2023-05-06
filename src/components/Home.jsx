import { forHomePage } from 'api';
import React, { useEffect, useState } from 'react';

export const Home = () => {
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    async function getTitles() {
      const res = await forHomePage();
      const titles = res.results.map(e => e.original_title);
      setTitles(titles);
    }

    getTitles();
  }, []);

  return (
    <ul className="list-titles">
      {titles.map(e => {
        return (
          <li>
            <a href="/" className="li-of-titles">
              {e}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
