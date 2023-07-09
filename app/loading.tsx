"use client";
    // You can add any UI inside Loading, including a Skeleton.
import Lottie from 'lottie-react';

import animationData from "../public/assets/lottie/fire_pan.json";

import Image from 'next/image';
import loading from '../public/assets/lottie/fire_pan.json'
  import { motion } from 'framer-motion';

  export default function Loading() {{
  return (

       <div className="themed flex flex-col w-full h-full justify-center items-center">
      <Lottie
        animationData={animationData}
        className="bg-yellow-300 justify-center items-center"
        loop={true}
      />
 

    </div>
  );
};

}
