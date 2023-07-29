import React,{useState} from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";


/*import image1 from "../../public/images/image01.jpeg";
import image2 from "../../public/images/image02.jpeg";
import image3 from "../../public/images/image03.jpeg";*/
import famous from '../public/assets/img/famous.png'

import { dividerClasses } from "@mui/material";
const YetLightBox =()=> {
const [open,setOpen]:any=useState(false)

/*const images = [
    image1,
    image2,
    image3,
    // ...
];*/
let images=[famous,'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE-1200x800.jpg'];
const imageSizes = [16, 32, 48, 64, 96, 128, 256, 384];
const deviceSizes = [640, 750, 828, 1080, 1200, 1920, 2048, 3840];

function nextImageUrl(src:any, size:number) {
    return `/_next/image?url=${encodeURIComponent(src)}&w=${size}&q=75`;
}

const slides = images.map(({ src, width, height }:any) => ({
    width,
    height,
    src: nextImageUrl(src, width),
    srcSet: imageSizes
        .concat(...deviceSizes)
        .filter((size) => size <= width)
        .map((size) => ({
            src: nextImageUrl(src, size),
            width: size,
            height: Math.round((height / width) * size),
        })),
}));



return (
<div className="flex justify-center pb-20">
    <button className="btn h-16 lg:h-20 xl:h-24" onClick={()=>{setOpen(true)}}>
    <h3 className="btntext mx-6">  Open Gallery    </h3>
    </button>
    
<Lightbox open={open} close={() => setOpen(false)} slides={slides} plugins={[Zoom]} />
</div>
);

}
export default YetLightBox