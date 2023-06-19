"use client";
import { useState } from "react";
import styles from "../../../styles/Product.module.css";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { GetServerSideProps } from "next";
import { imgClient } from "../../../utils/sanity";

import toast from 'react-hot-toast';
import  {getProjects} from "../../../sanity/sanity_utils"
const Product = async(props:any) => {

  const searchParams = useSearchParams()
 
  const search = searchParams.get('product')
  const projects = await getProjects();
  // URL -> `/dashboard?search=my-project`




  const [isExpanded, setIsExpanded] = useState(false);
  //const router=useRouter();
  //const data=router.query;
  const handleSliderClick = () => {
    setIsExpanded(!isExpanded);
  };
  /*const getServerSideProps: GetServerSideProps = async (context) => {
    var id = context.query["id"];
    const { slug = '' } = context.query;

    const data = await imgClient.fetch(
      `{
        "mySanityData": *[_type == "dish" && slug.current == $slug][0] {
          image {
            asset->{
              ...,
              metadata
            }
          }
        }
      }`,
      { slug }
    );
  
    return { props: data };
  };
*/




    // In this example, we might call a database or an API with given ID from the query parameters
    // I'll call a fake API to get the players name from a fake database
    /*const res = await fetch(`https://baseball.com/api/getTeamFromPlayerId/${id}`);
    const team = await res;
  
    // Return the ID to the component
    return {
      props: {
        id,
        name,
      },
    };
  };*/
 
  const [size, setSize] = useState(0);
  const pizza = {
    id: 1,
    img: "/img/pizza.png",
    name: "CAMPAGNOLA",
    price: [19.9, 23.9, 27.9],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu purus, rhoncus fringilla vestibulum vel, dignissim vel ante. Nulla facilisi. Nullam a urna sit amet tellus pellentesque egestas in in ante.",
  };

  return (
    <div className={styles.container}>
      <div>
        <p>Enter sanity data for product with id :{search}</p>
      </div>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={pizza.img} objectFit="contain" layout="fill" alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.name}</h1>
        <span className={styles.price}>${pizza.price[size]}</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => setSize(1)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => setSize(2)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional ingredients</h3>
        <div className={styles.ingredients}>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="double"
              name="double"
              className={styles.checkbox}
            />
            <label htmlFor="double">Double Ingredients</label>
          </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="cheese"
              name="cheese"
            />
            <label htmlFor="cheese">Extra Cheese</label>
          </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="spicy"
              name="spicy"
            />
            <label htmlFor="spicy">Spicy Sauce</label>
          </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="garlic"
              name="garlic"
            />
            <label htmlFor="garlic">Garlic Sauce</label>
          </div>
        </div>
        <div className={styles.add}>
            <input type="number" defaultValue={1} className={styles.quantity}/>
            <button className={styles.button} onClick={()=>{}} >Add to Cart</button>
        </div>
      </div>
      <div className="flex flex-col items-center">
      <div className="relative">
        <img
          src="/path/to/product-image.jpg"
          alt="Product Image"
          className={`w-full ${isExpanded ? 'h-[500px] rotate-360' : 'h-[200px]'}`}
        />
        <div
          className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 cursor-pointer ${
            isExpanded ? 'rotate-180' : ''
          }`}
          onClick={handleSliderClick}
        >
          <img src="/path/to/slider-icon.png" alt="Slider Icon" />
        </div>
      </div>

      {!isExpanded && (
        <div className="mt-4">
          <div className="flex items-center">
            <input type="checkbox" id="checkbox1" />
            <label htmlFor="checkbox1" className="ml-2">
              Option 1
            </label>
          </div>

          <div className="flex items-center mt-2">
            <input type="checkbox" id="checkbox2" />
            <label htmlFor="checkbox2" className="ml-2">
              Option 2
            </label>
          </div>

          {/* Add more checkboxes as needed */}
        </div>
      )}

      {isExpanded && (
        <div className="flex mt-4">
          <div className="flex-1">
            <input type="radio" id="tab1" name="tabs" />
            <label htmlFor="tab1" className="ml-2">
              Tab 1
            </label>
          </div>
          <div className="flex-1">
            <input type="radio" id="tab2" name="tabs" />
            <label htmlFor="tab2" className="ml-2">
              Tab 2
            </label>
          </div>
          <div className="flex-1">
            <input type="radio" id="tab3" name="tabs" />
            <label htmlFor="tab3" className="ml-2">
              Tab 3
            </label>
          </div>
          <div className="flex-1">
            <input type="radio" id="tab4" name="tabs" />
            <label htmlFor="tab4" className="ml-2">
              Tab 4
            </label>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default Product;