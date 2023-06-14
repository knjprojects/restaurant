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
import Minimap from './Minimap';
const ReviewsComponent = ({ placeId ,apiKey}:any) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      let data=null;
      try { 
        //let us try this the manual way first
        //https://maps.googleapis.com/maps/api/place/findplacefromtext/output?parameters
        await fetch(
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`
        ).then((res=>
          res.json().
          then((revs)=>{
          setReviews(revs);
        })));//q=Eiffel+Tower,Paris+France
        //const data = await response.json();
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, [placeId]);
  //query the name on nthe map
  let autoSearchConfig="q="
  return (
    <div>
      <Minimap searchParams={autoSearchConfig} />
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
