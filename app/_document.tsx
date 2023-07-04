import { Html, Head, Main, NextScript } from 'next/document'
var map;
var service;
var infowindow;


export default function Document() {
  
  return (
    <Html lang="en">
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