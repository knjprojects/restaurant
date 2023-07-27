'use client'
import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script';
var map;
var service;
var infowindow;
declare const $: any;
import localFont from 'next/font/local'
 
export default function Document() {
  
  return (
    <Html lang="en">
      
      <title>Famous Recipe</title>
      <Head>
 
        
        <style>
          { /*add scrits and fonts here */}
          
        </style>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous'></link>
        <link href="https://fonts.googleapis.com/css2?family=Merienda&display=swap" rel="stylesheet"></link>
        

         
     
        {/*<link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;400;600;800&display=swap" rel="stylesheet" />*/}
      </Head>
      <body>
        <Main />
        <NextScript />
    
      </body>
    </Html>
  )
}
//