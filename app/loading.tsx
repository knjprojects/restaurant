"use client";
    // You can add any UI inside Loading, including a Skeleton.
  

  import { motion } from 'framer-motion';

  export default function Loading() {{
  return (
    <div className="flex justify-center items-center h-screen">
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="200"
          viewBox="0 0 200 200"
        >
          <circle cx="100" cy="100" r="100" fill="#000000" />
          <circle cx="100" cy="50" r="20" fill="#ffffff" />
          <rect
            x="90"
            y="70"
            width="20"
            height="60"
            rx="10"
            fill="#ffffff"
          />
          <rect x="80" y="130" width="40" height="20" fill="#ffffff" />
          <rect
            x="70"
            y="150"
            width="60"
            height="20"
            rx="10"
            fill="#ffffff"
          />
        </svg>
      </motion.div>
    </div>
  );
};

}
