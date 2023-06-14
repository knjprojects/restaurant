
import {createClient} from 'next-sanity'
import SanityClient from 'next-sanity-client';

export const config=({
    projectId:process.env.sanityID,
    dataset:process.env.sanitySet,
    //apiVersion:"2022-10-16",
    useCdn:false,
    //token:process.env.sanityToken
})
export const client = new SanityClient({
  config
});
export const imgClient=createClient({
	config
});

 