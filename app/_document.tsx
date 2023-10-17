'use client'
import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script';

 
export default function Document() {




  return (
    <Html lang="en" className={``}>
      
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
        {//cdn tag for swiper.js but we used yarn add instead and register()
        /*<script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-element-bundle.min.js"></script>*/}

\
      </body>
    </Html>
  )
}
//