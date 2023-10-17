import React from 'react'
import famous from '../public/assets/img/famous.png'
import goat from '../public/assets/img/food/goat.png'
import pic from '../public/assets/img/food/pic.png'
import jerk from '../public/assets/img/food/jerk.png'
type Props = {}
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/custom-animations/scale-out-animation.css';
import Image from 'next/image';
const Gallery = (props: Props) => {
  const slider= <AwesomeSlider animation='scaleOutAnimation' className='themed'>
    <div>  <Image src={famous} alt='bg' height={500} width={500} /></div>
    <div className='items-center'>
        <Image src={pic} alt='bg' height={500} width={500} />
    </div>
    
    <div>
    <Image src={goat} alt='bg' height={500} width={500} />
    </div>
    <div>
      <Image src='https://lh3.googleusercontent.com/p/AF1QipPu2OwpKmzVUSAak3vpfm0pWPNsp2mR8Pkf0PKF=s0' alt='bg' height={500} width={500} />
    </div>
 </AwesomeSlider>

  return (
    <div className='pad section mb-10 '>
      {slider}
    </div>
  )
}

export default Gallery

 
