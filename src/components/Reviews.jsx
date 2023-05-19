import { reviews } from 'api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const { id } = useParams();
  const [review, setReviews] = useState();
  useEffect(() => {
    async function getCast() {
      const review = await reviews(id);
      setReviews(review);
    }
    getCast();
  }, [id]);

  return (
    <ul className="flexator" key={review.id}>
      {review ? (
        review.results.map(e => (
          <li className="li-review">
            <h5>{e.author}</h5>
            <p>{e.content}</p>
          </li>
        ))
      ) : (
        <h3>no results</h3>
      )}
    </ul>
  );
};
