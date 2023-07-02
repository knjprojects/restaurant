import { createClient, groq } from "next-sanity";
import { Dish } from "../typings";
import {apiVersion, dataset, projectId} from './env'

const config=({
  projectId: projectId,
  dataset:dataset || "production",
  //apiVersion:"2022-10-16",
  //useCdn:false,
  //token:process.env.sanityToken
})
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
export async function getDishes(): Promise<Dish[]> {
  return createClient(config).fetch(// chef->{name},
    groq`*[_type == "dish"]{
     
     _createdAt,
      price,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      description,categories:categories[]->title
    }`
  )
}

export async function getDish(slug: string): Promise<Dish> {
  return createClient(config).fetch(
    groq`*[_type == "dish" && slug.current == $slug][0]{
      _createdAt,
      price,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      description,categories: categories[]->title
   
    }`,
    { slug }
  )
}