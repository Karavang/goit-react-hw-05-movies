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
  if (review) {
    console.log(review);
    return (
      <ul className="flexator" key={review.id}>
        {review.results.map(e => (
          <li className="li-review">
            <h5>{e.author}</h5>
            <p>{e.content}</p>
          </li>
        ))}
      </ul>
    );
  }
};
