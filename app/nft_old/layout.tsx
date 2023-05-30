"use client";


import React, { ReactNode } from 'react'

//import Header from './Header'

import '../globals.css'
import type { AppProps } from 'next/app'

import type { Session } from "next-auth"
import Providers from '../provider';
//import NFTPage from './page';
const  NFTLayout=({children,session }:any ) =>{
  //const { store, props } = wrapper.useWrappedStore(children);
  //const emotionCache= props;
  //const helmetContext = {};//created so our helmet isnt accessed outside app
  return (<> 
   <html>
            <head></head>
    <body> <Providers>
        
            
            {children}</Providers>
         
            </body>
          </html>
  </>);

}
//wrapper may be uneccessary
export default NFTLayout;
