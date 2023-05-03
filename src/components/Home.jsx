import { fetchSearch } from 'api';
import React, { useState } from 'react';

export const Home = () => {
  const [aob, setAob] = useState([]);

  let allResults = [];

  for (let page = 1; page <= 25; page++) {
    fetchSearch('movie', page).then(res => {
      if (res.original_title) {
        allResults.push(res.original_title);
      }
    });
  }
  setAob(allResults);
  console.log(allResults);

  console.log(aob);

  return (
    <ul className="list-titles">
      {aob.map(e => {
        <li>
          <a href="#" className="li-of-titles">
            {e}
          </a>
        </li>;
      })}
    </ul>
  );
};
