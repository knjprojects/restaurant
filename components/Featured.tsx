import styles from "../styles/Featured.module.css";
import Image from "next/image";
import { useState } from "react";
import '../styles/Featured.module.css'
const Featured = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "/../public/img/featured.png",
    "/../public/img/featured1.png",
    "/../public/img/featured2.png",
    "/../public/img/featured3.png",
  ];

  const handleArrow = (direction:any) =>{
      if(direction==="l"){
          setIndex(index !== 0 ? index-1 : 2)
      }
      if(direction==="r"){
          setIndex(index !== 2 ? index+1 : 0)
      }
  }

  return (
    <div className={styles.container}>
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
  );
};

export default Featured;