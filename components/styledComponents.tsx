
//import React from 'react'
//import styled from "styled-components";
import tw from "tailwind-styled-components"
//import { Input } from '@mui/material';
type Props = {}
//import Head from 'next/head'
//import {signIn} from 'next-auth/react'
interface ButtonProps {
   $primary: boolean
}
type ContainerProps = {
  $size: string
  $grid: boolean
  $elements: string,
  $row:boolean
}
export const Container = tw.div<ContainerProps>`
  flex
  flex-row
  items-center
  justify-center
  w-full
  shadow-3xl shadow-purple-600 shadow-inner

  ${(p) => (p.$size == 'max' ? "text-xl w- full h-full" : "text-sm w-screen/2 h-screen/2")}

  ${(p)=>(p.$grid==true?  "grid":"flex-col" )}

  ${(p)=>(p.$row==true?  "flex-row":"flex-col" )}
  `
  export const LoginContainer = tw.div`flex`;
// ${(p) => (p.$size == 'max' ? "w- full h-full" : "w-screen/2 h-screen/2")}
   // ${(p)=>(p.$grid==true?  "grid":"bg-black" )}
  const LogButton = tw.form`
  bg-gray-100
  font-italic
  hover:scale-105
  `
  

export const Welcome = tw.div`flex font-bold items-center`
const Logo=tw.img``
const Button = tw.button<ButtonProps>`
    flex
    ${(p) => (p.$primary ? "bg-indigo-600" : "bg-indigo-300")}
`
export const h1=tw.h1`text-white`
type RowProps = {
    $size: string
    $space: number
    $elements: string
    $p:number
    $m:number
  }
export const cleanRow=tw.div<RowProps>`flex flex-row items-center 
${(p)=>(p.$space==4? "space-x-4":'space-x-2')}
${(p)=>(p.$p==4? "p-4":'p-3')}
`