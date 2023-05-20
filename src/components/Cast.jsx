import { castSet } from 'api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState();
  useEffect(() => {
    async function getCast() {
      const cast = await castSet(id);
      setCast(cast);
    }
    getCast();
  }, [id]);

  if (cast) {
    return (
      <ul className="flexator">
        {cast.cast.map(e => (
          <li className="li-cast" key={e.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${e.profile_path}`}
              alt=""
              className="image"
            />
            <h3>{e.original_name}</h3>
            <h4>{e.character}</h4>
          </li>
        ))}
      </ul>
    );
  }
};
