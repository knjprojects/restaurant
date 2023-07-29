        
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { getDishesbyCategory } from "../sanity/sanity_utils";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useCartStore } from "../zustand/cart.store";
import ItemCard from "./Item";
let productsp = [
{
id: 1,
name: "Product Number 1",
brand: "Brand Name",
url: "products-number-1",
price: 100,
},
{
id: 1,
name: "Product Number 2",
brand: "Brand Name",
url: "products-number-1",
price: 100,
},
{
id: 1,
name: "Product Number 3",
brand: "Brand Name",
url: "products-number-1",
price: 100,
},
{
id: 1,
name: "Product Number 4",
brand: "Brand Name",
url: "products-number-1",
price: 100,
},
{
id: 1,
name: "Product Number 5",
brand: "Brand Name",
url: "products-number-1",
price: 100,
}
];
var $ = require("jquery");
if (typeof window !== "undefined") {
window.$ = window.jQuery = require("jquery");
}

// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
ssr: false,
});

// This is for React JS, Remove this for Next.js
// import OwlCarousel from 'react-owl-carousel';

const Slider = () => {
    let zus= useCartStore()
    const [data, setData] = useState([]);
    const GetZustand =  () => {
      return zus.tempOrder
    }
    
    useEffect(() => {
      GetZustand();
      
      getDishesbyCategory('specials').then((data) => { 
        console.log(data)
        //setZustand(data)
      setData((data))
      return data;
      });
      
    })
  
    


const options = {
margin: 30,
responsiveClass: true,
nav: true,
dots: true,
autoplay: false,
smartSpeed: 1000,
navClass: ["owl-prev", "owl-next"],
navText: [
'',
'',
],
responsive: {
0: {
items: 1,
},
400: {
items: 1,
},
600: {
items: 2,
},
700: {
items: 3,
},
1000: {
items: 4,
},
},
};

return (
<div className="row no-gutters">
<div
className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-3 pb-2 bg-white"
id="owl-carousel-products"
>

<ul id="owl-carousel-ul" className="owl-carousel owl-loaded owl-drag">
<OwlCarousel

{...options}
>
{data && data.length > 0
? data.map((product) => {
return (
    ItemCard(product,zus,true)
)})
: ""

}
{}
</OwlCarousel>
</ul>
</div>
</div>
);
};
export default Slider;
        

    /***<div

className="item float-left w-100"
key={product.name}
>
<div className="productListing col-lg-5th col-md-4 col-sm-6 col-xs-12">
<a href={product.name}>
<a className="product float-left">
<span className="image text-center">
<Image
id={"img" + product.image}
src={product.image}
alt={product.name} width={300} height={300}

/>
</span>
<span className="w-100 text-center mt-1 ">
<h5 className="brand text-capitalize float-left">
{product.description}
</h5>
<span className="name">{product.name}</span>
<strong className="itemPrice p-0">
Price: {product.price}
</strong>
</span>
</a>
</a>
</div>
</div>
); */    