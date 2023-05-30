"use client";


import React, { ReactNode } from 'react'

import Header from './Header'

import './globals.css'
import type { AppProps } from 'next/app'

import Providers from './provider';
import type { Session } from "next-auth"
import { wrapper } from "../redux/store";


//import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

//adding firebase auth
//import Login from '../components/Login';
//import { useAuthState } from 'react-firebase-hooks/auth'
//import {auth,db} from '../../utils/firebase'
import Navbar from '../components/Navbar';

import Home from './page';
const RootLayout=({children,session }: { children: React.ReactNode,session:Session } ) =>{
  //const { store, props } = wrapper.useWrappedStore(children);
  //const emotionCache= props;
  //const helmetContext = {};//created so our helmet isnt accessed outside app
  return (<> 
  <html>
            <head></head>
    <body> <Providers>
        
         <Header active='' />
         <Navbar />
            {children}</Providers>
            <script src="../path/to/flowbite/dist/flowbite.min.js"></script>

            </body>
          </html>

  </>);

}
//wrapper may be uneccessary
export default RootLayout;
