import { createClient, groq } from "next-sanity";
import { Dish } from "../typings";
import {apiVersion, dataset, projectId} from './env'

const config={
  projectId: projectId,
  dataset: dataset,
  
  apiVersion: apiVersion,
  useCdn: true,
   /*perspective: 'published',
    studioUrl: '/studio',
    logger: console,*/
  //token:process.env.sanityToken
}
export const imgClient=createClient(config)
/*export async function getProjects(): Promise<Project[]> {
  return createClient(config).fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`
  )
}

export async function getProject(slug: string): Promise<Project> {
  return createClient(config).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`,
    { slug }
  )
}
*/
export async function getDishes(): Promise<any> {
  return await createClient(config).fetch(// chef->{name},
    groq`*[_type == "dish"]{
     
  
      price,
      name,
    
      description,
       "slug":slug.current,
       "image":image.asset->url,
      "cat":cat->catName
    }`

  )
}
/*"cat" : cat->catName
      "slug": slug.current,
      "image": image.asset->url, */

export async function getDish(slug: string): Promise<Dish> {
  return await createClient(config).fetch(
    groq`*[_type == "dish" && slug.current == $slug][0]{
     
      price,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      description, "cat": cat->catName
   
    }`,
    { slug }
  )
}