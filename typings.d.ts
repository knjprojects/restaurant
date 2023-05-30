//this file defines our types, it ust match the components we need to render, and therefore, it must match also our sanity cms database schemas
/*interface Image{
    asset:{
        url:string
    }
}*/
import { createNextState } from "@reduxjs/toolkit"
//import {CartState}  from "././redux/slices/cartSlice"
//export {default as CartState} from "././redux/slices/cartSlice"

interface Creator{
    id:string
    address:string
    slug:{
        current:string
    },
    image:Image
    bio:string
}
export interface NFTCollection{
    id:string
    title:string
    description:string
    slug:{
        current:string
    },
    address:string
    nftCollectionName:string
    mainImage:string
    previewImage:string//image
    creator:Creator
}
interface Item{
    id:string
    address:string
    slug:{
        current:string
    },
    image:string
    bio:string
}
interface Category{
    catId:string,
    title:string,
    imgUrl:string,
    status:string,
    slug:{
            current:string,
    }

}
interface Story{
    name:string
    src:string
    profile:any
    
} 




export interface Blog{
    id:string
    title:string
    //description:string
    slug:{
        current:string
    },
    //address:string
    blogCollection:string
    //mainImage:string
    //previewImage:string//image
    //creator:Creator
}
interface RootObject {
  kind: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: PageInfo;
  items: Item[];
}

interface Item {
  kind: string?;
  id: Id?;
  snippet: Snippet?;
}

type Snippet ={
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
}

interface Thumbnails {
  default: Default;
  medium: Default;
  high: Default;
}

interface Default {
  url: string;
  width: number;
  height: number;
}

type Id ={
  kind: string;
  videoId: string;
}

interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}
export type Todo = {
  userId: number,
  id: number,
  title: string,
  completed:boolean
}