"use client";
import React, { ReactNode } from 'react'
//import Header from './Header'
//import '../globals.css'
import Providers from '../provider';
//import Home from './page';
import Header from '../Header'
const ProductLayout=({children,session}:any ) =>{
  //const { store, props } = wrapper.useWrappedStore(children);
  //const emotionCache= props;
  //const helmetContext = {};//created so our helmet isnt accessed outside app
  return (<> 
  <html>
            <head></head>
    <body> <Providers session={session}>
        
         <Header />
            {children}</Providers>
         
            </body>
          </html>

  </>);

}
//wrapper may be uneccessary
export default ProductLayout;


//wrapper may be uneccessary

