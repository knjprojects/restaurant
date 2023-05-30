//for nextjs
//import sanityClient from "@sanity/client";
//import imageUrlBuilder from "@sanity/image-url";
import {createClient} from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'
//import Img from 'next/image';
//import { useNextSanityImage } from 'next-sanity-image';
export const config=({
    projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset:process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion:"2022-10-16",
    useCdn:false,
    token:process.env.NEXT_PUBLIC_SANITY_API_TOKEN
})//

export const urlFor = (source) => createImageUrlBuilder(config).image(source)
export const client = createClient(config)
/*export const previewClient = createClient({
  ...config,
  useCdn: false,
  token: 'kro71AfQHO1x11d7ZZOax5qgx7S6iuMBcspvJoS6qU34zduxv8DtzKbgMw9CbbxEHwPGTMRRqaDaByzTF3BjoOUq3ItKPgc4kIJaJ1dyP47fPZqv5ehTpZ7Fdku6eG6yAh1JiRuvob9fE00DfHQzHmR8BmJ5g5h9WCxtCGWzaRLCsosfRSZ'
  //process.env.SANITY_API_TOKEN,
})*/
