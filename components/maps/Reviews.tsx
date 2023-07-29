'use client'
import React from 'react'
import { testimonials } from '../../utils/lib/data/reviews'
type Props = {}
import Image from 'next/image'

import Rating from '@mui/material/Rating';

type Review={
  time:any;
  text:string;
  rating:number;
  author_name:string;
}
import { useEffect, useState } from 'react';
import Minimap from './Minimap';
import { Fade, Slide } from 'react-awesome-reveal'
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
    <section className='snap-proximity' id='reviews'><div className="themed py-10">
   
         <h1 className='heading pt-20'>Location- 158 King St W, Hamilton, ON L8P 1A5, Canada</h1>
     
       
        
          <iframe className='w-full border-2 border-red-600 rounded-xl  dark:border-yellow-300' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d726.419369823696!2d-79.87469983037391!3d43.25818079819523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c9b827db72349%3A0xed695ec32dc3c506!2sFamous%20Recipe!5e0!3m2!1sen!2stt!4v1688817595090!5m2!1sen!2stt" width="600" height="450"  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        <div className="mx-auto">
          {/*} <Minimap searchParams={'Famous Recipe'} /> */}
          <div className="relative">
            <div className="absolute left-0 bottom-10 transform -translate-y-1/2">
              <button
                className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-full p-2 focus:outline-none"
                onClick={handlePrev}
              >
                
              </button>
            </div>

            <div className="h-full relative pt-32 rounded-xl">
              <h1 className='heading pb-6'>Customer Reviews</h1>
              <div className="themed surround">
                <p className="text p-6">{testimonials[activeTestimonial].content}</p>
                <div className='flex sm:space-x-2 lg:space-x-3 flex-row p-6'>
                <p className="text-red-500 mt-4">{testimonials[activeTestimonial].name}</p>
                   <Rating className='mt-3 text-black dark:text-yellow-300' name="read-only" value={testimonials[activeTestimonial].rating} readOnly />
                    
                </div>
         
              </div>

              <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                <button
                  className="btn rounded-full p-2 focus:outline-none"
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
                    className="w-6 h-6 btntext"
                  >
                    <path d="M9 6l6 6-6 6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div></section>
      
    );

  
    
  }

export default ReviewsComponent