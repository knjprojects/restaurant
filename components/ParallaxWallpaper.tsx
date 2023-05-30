import React from 'react';
import { Parallax } from 'react-scroll-motion';

const ParallaxWallpaper = () => {
  return (
    <div className="parallax-wallpaper">
      <div className="parallax-wallpaper-column">
        <Parallax
          className="parallax-image"
          offsetYMax={20}
          offsetYMin={-20}
          slowerScrollRate
        >
          <img src="image1.jpg" alt="Image 1" />
        </Parallax>
      </div>
      <div className="parallax-wallpaper-column">
        <Parallax
          className="parallax-image"
          offsetYMax={20}
          offsetYMin={-20}
          slowerScrollRate
        >
          <img src="image2.jpg" alt="Image 2" />
        </Parallax>
      </div>
    </div>
  );
};

export default ParallaxWallpaper;