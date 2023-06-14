
import styles from "../styles/Featured.module.css";
import Image from "next/image";
import { useState } from "react";
import '../styles/Featured.module.css'
import { Carosel } from "./Carosel";
import Tabs from "./Tabs";
const Featured = () => {

  const [index, setIndex] = useState(0);
  const images = [
    "/img/featured.png",
    "/img/featured1.png",
    "/img/featured2.png",
    "/img/featured3.png",
  ];
  const textData:any=[
    '“I have been volunteering with ChoosEquality for over a year now and I can say that it has been a rewarding and meaningful experience.”',
    '“ChoosEquality is a movement that is transforming education for the better. I am proud to be part of it and I encourage anyone who cares about education to join us.”',
    '“I have also seen the positive impact that ChoosEquality has on the kids and the schools they work with.”',
]

  const handleArrow = (direction:any) =>{
      if(direction==="l"){
          setIndex(index !== 0 ? index-1 : 2)
      }
      if(direction==="r"){
          setIndex(index !== 2 ? index+1 : 0)
      }
  }
 
  return (

    <div className="scroll-smooth scroll-m-1 bg-scroll bg-gradient-to-br from-green-300 to-yellow-300">

      <div className={styles.container}>
      <Carosel  {...{images,textData}} />
      <div className={styles.arrowContainer} style={{ left: 0 }} onClick={()=>handleArrow("l")}>
        <Image src="/../public/img/arrowl.png" height={20} width={20} alt="arrowleft"/>
      </div>
      <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
        {images.map((img, i) => (
          <div className='imgContainer' key={i}>
            <Image src={img} alt="" height={200} width={150} />
          </div>
        ))}
      </div>
      <div className={styles.arrowContainer} style={{ right: 0 }} onClick={()=>handleArrow("r")}>
        <Image src="/../public/img/arrowr.png"  alt="arrowright" width={20} height={20}/>
      </div>
    </div>
    <div className="">

    </div>
    </div>
    
  );
};

export default Featured;