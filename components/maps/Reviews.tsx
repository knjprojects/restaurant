import React from 'react'

type Props = {

}
type Review={
  time:any;
  text:string;
  rating:number;
  author_name:string;
}
import { useEffect, useState } from 'react';

const ReviewsComponent = ({ placeId }:any) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=YOUR_API_KEY`
        );
        const data = await response.json();

        if (data.status === 'OK') {
          setReviews(data.result.reviews);
        }
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, [placeId]);

  return (
    <div>
      <h2>Reviews:</h2>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review:Review) => (
            <li key={review.time}>
              <p>{review.text}</p>
              <p>Rating: {review.rating}</p>
              <p>Author: {review.author_name}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews found.</p>
      )}
    </div>
  );
};

export default ReviewsComponent;
