import React from 'react';
import { useState, useEffect } from 'react';
import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  const [countdown, setCountdown] = useState(10);
  
  useEffect(()=>{ const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
},[])
const handleSubscribe = () => {
  // Here you can integrate with Zapier SDK or any other service to send a notification email
  // to the user upon subscription.
  console.log('User subscribed for updates');
};
  return (
    <div>
      <footer className="bg-gray-200 py-4 mt-4">
      <div className="flex justify-center items-center">
        <div className="mr-4">
          <h2 className="text-2xl font-bold">Countdown: {countdown}</h2>
        </div>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={()=>handleSubscribe()}
        >
          Subscribe for Updates
        </button>
      </div>
    </footer>
      <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/featured.png" height={400} width={300} alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, WE DID.THE LAMA PIZZA, WELL BAKED SLICE OF PIZZA.
          </h2>
        </div>  
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            1654 R. Don Road #304.
            <br /> NewYork, 85022
            <br /> (602) 867-1010
          </p>
          <p className={styles.text}>
            2356 K. Laquie Rd #235.
            <br /> NewYork, 85022
            <br /> (602) 867-1011
          </p>
          <p className={styles.text}>
            1614 E. Erwin St #104.
            <br /> NewYork, 85022
            <br /> (602) 867-1012
          </p>
          <p className={styles.text}>
            1614 W. Caroll St #125.
            <br /> NewYork, 85022
            <br /> (602) 867-1013
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default Footer;