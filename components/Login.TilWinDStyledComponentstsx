import React from 'react'
//import styled from "styled-components";
import tw from "tailwind-styled-components"
//import { Input } from '@mui/material';
type Props = {}
import Head from 'next/head'
import {signIn} from 'next-auth/react'
interface ButtonProps {
   $primary: boolean
}
type ContainerProps = {
  $size: string
  $grid: boolean
  $elements: string,
  $row:boolean
}
const Login = (props: Props) => {
  const Container = tw.div<ContainerProps>`
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
  //const LoginContainer = tw.div`flex`;
// ${(p) => (p.$size == 'max' ? "w- full h-full" : "w-screen/2 h-screen/2")}
   // ${(p)=>(p.$grid==true?  "grid":"bg-black" )}
  /*const Log = tw.form`
  bg-gray-100
  font-italic
  hover:scale-105
  `
  
const Container = tw.div<ContainerProps>`
    flex
    flex-row
    items-center
    justify-center
    w-full
    shadow-3xl shadow-purple-600 shadow-inner

    ${(p) => (p.$size == 'max' ? "text-xl w- full h-full" : "text-sm w-screen/2 h-screen/2")}

    ${(p)=>(p.$grid==true?  "grid":"flex-col" )}
    `
  const Welcome = tw.div`flex font-bold items-center 
  `
  const Logo=tw.img``
const Button = tw.button<ButtonProps>`
    flex
    ${(p) => (p.$primary ? "bg-indigo-600" : "bg-indigo-300")}
`
  const h1=tw.h1`text-white`*/
  return (

    <div>
      <Head>
        <title>Login</title>
      </Head>
      { /*@ts-ignore */}
      {/*<Container $size='max'>
        <Welcome className='text-red'>Welcome to the Login Page</Welcome>
        <Log>
          <Logo src='' alt='logo' width={300} height={200}>
          </Logo>
          <Input type={'text'} placeholder='Enter email address' className='bg-red' />
          <h1 className=''>Brooooo tailwind works with styled components as long as my upper styles dont any attributes the same as my taild inner styles</h1>
        </Log>
        <Input type={'text'} placeholder='Enter password' className='w-64 items-start' />
        <div className='flex flex-row'>
          {['1', '2', '3'].map((item, i) => (
            <div key={i}>
              {item}
            </div>
          ))}
        </div>
      </Container>*/}
      { /**@ts-ignore */}
      <Container $size='min' $row></Container>
      <div className='flex-row flex space-x-2' >
        <button onClick={() => signIn()} >Sign In With Facebook or Google</button>
        <button onClick={() => { }}>Sign In With Mongodb, Email</button>
      </div>
    </div>
  )
}
export default Login


