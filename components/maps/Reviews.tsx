'use client'
import React from 'react'
import { testimonials } from '../../utils/lib/data/reviews'
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
const ReviewsComponent = ({ place }: any) => {
  const [reviews, setReviews] = useState([]);
  const placeId='ChIJSSO3fYKbLIgRBsXDLcNeae0'
  const apiKey='AIzaSyAjz4GHb3CrChQ-AQcIXkK7QIO6wZ5_8LU'
  useEffect(() => {
    const fetchReviews = async () => {
      let data = null;
      try {
        //let us try this the manual way first
        //https://maps.googleapis.com/maps/api/place/findplacefromtext/output?parameters
        await fetch(
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`
        ).then((res =>
          res.json().
            then((revs) => {
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

    /*const [reviews, setReviews] = useState([]);

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
  let autoSearchConfig="q="*/
    

    const [activeTestimonial, setActiveTestimonial] = useState(0);

    const handlePrev = () => {
      setActiveTestimonial(prevState => (prevState === 0 ? testimonials.length - 1 : prevState - 1));
    };

    const handleNext = () => {
      setActiveTestimonial(prevState => (prevState === testimonials.length - 1 ? 0 : prevState + 1));
    };

    return (
      <div className="bg-yellow-300 py-10">
        <h1 className='font-bold text-black text-center justify-center'>Reviews</h1>
        
        <div className="max-w-3xl mx-auto">
          <Minimap searchParams={'Famous Recipe'} />
          <div className="relative">
            <div className="absolute left-0 bottom-10 transform -translate-y-1/2">
              <button
                className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-full p-2 focus:outline-none"
                onClick={handlePrev}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
            </div>

            <div className="relative">
              <div className="bg-yellow-100 rounded-lg p-6 mb-6">
                <p className="text-black text-lg italic">{testimonials[activeTestimonial].content}</p>
                <div className='sm:flex grid sm:space-x-2 lg:space-x-3 sm:flex-row'>
                  <p className="text-red-500 mt-4">{testimonials[activeTestimonial].name}</p>
                    <p className="text-red-500 mt-4">{testimonials[activeTestimonial].rating}</p>
                </div>
         
              </div>

              <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                <button
                  className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-full p-2 focus:outline-none"
                  onClick={handleNext}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                  >
                    <path d="M9 6l6 6-6 6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  
    
  }

export default ReviewsComponent