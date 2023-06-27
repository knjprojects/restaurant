import { createClient, groq } from "next-sanity";
import { Project,Dish } from "../typings";


const config=({
  projectId: process.env.SANITY_STUDIO_SANITY_PROJECT_ID,
  dataset:process.env.SANITY_STUDIO_SANITY_DATASET || "production",
  //apiVersion:"2022-10-16",
  //useCdn:false,
  //token:process.env.sanityToken
})
export async function getProjects(): Promise<Project[]> {
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

export async function getPages(): Promise<Dish[]> {
  return createClient(config).fetch(
    groq`*[_type == "page"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current
    }`
  )
}

export async function getPage(slug: string): Promise< Dish> {
  return createClient(config).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      content
    }`,
    { slug }
  )
}


