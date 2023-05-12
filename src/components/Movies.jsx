import React, { useState } from 'react';
import { forSearchPage } from 'api';
import { Link } from 'react-router-dom';

export const Movies = () => {
  const [title, setTitle] = useState();

  const handleSearch = async e => {
    e.preventDefault();
    const res = await forSearchPage(title);
    setTitle(res);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="input"
          className="input-films"
          required
          onChange={e => setTitle(e.target.value)}
          placeholder="Enter the movie you are looking for"
        />
        <button className="btn-films" onClick={handleSearch}>
          Search
        </button>
      </form>
      <ul className="list-titles">
        {title && title.results ? (
          title.results.map(e => (
            <Link to={e.id} className="li-of-titles">
              <li key={e.id}>{e.original_title}</li>
            </Link>
          ))
        ) : (
          <li>No results found.</li>
        )}
      </ul>
    </div>
  );
};
