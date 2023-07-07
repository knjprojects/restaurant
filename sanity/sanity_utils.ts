import { createClient, groq } from "next-sanity";
import { Dish } from "../typings";
import {apiVersion, dataset, projectId} from './env'
const config={
  projectId: projectId,
  dataset: 'production',
  apiVersion: '2023-06-19',
  useCdn: false,
}
export async function getDishes(): Promise<Dish[]> {
  return await createClient(config).fetch(// chef->{name},
    groq`*[_type == "dish"]{
      price, name, type, description,
      "slug":slug.current,
      "image":image.asset->url,
      "cat":cat->catName
    }`,
    
  )
}
export async function getDish(slug: string): Promise<Dish> {
  return await createClient(config).fetch(
    groq`*[_type == "dish" && slug.current == $slug][0]{
      price, name, type, description, 
      "slug": slug.current,
      "image": image.asset->url,
      "cat": cat->catName
    }`,
    { slug }
  )
}
  /*perspective: 'published',
    studioUrl: '/studio',
    logger: console,*/
  //token:process.env.sanityToken