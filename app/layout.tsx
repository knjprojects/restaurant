"use client";


import React, { ReactNode } from 'react'

import Header from './Header'

import './globals.css'
import type { AppProps } from 'next/app'

import Providers from './provider';
import type { Session } from "next-auth"
import { wrapper } from "../store/redux/store";


//import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

//adding firebase auth
//import Login from '../components/Login';
import { useAuthState } from 'react-firebase-hooks/auth'
//import {auth,db} from '../../utils/firebase'
import Navbar from '../components/Navbar';
import { useAuthStore } from '../store/zustand/auth.store';
import Home from './page';
import { useSession } from 'next-auth/react';
const RootLayout=({children,session }: { children: React.ReactNode,session:Session })=>{


  function Auth({ children }:any) {
    // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
    const { status } = useSession({ required: true,
      onUnauthenticated() {
          //not
      },
     })
  
    if (status === "loading") {
      return <div>Loading...</div>
    }
  
    return children
  }


  const { isLoading, user, error } = useAuthStore();
  return (<> 
  <html>
            <head></head>
    <body> <Providers session={session}>
         
         <Header active={isLoading==true?'':''} />
         
         
            {children}</Providers>
            <script src="../path/to/flowbite/dist/flowbite.min.js"></script>

            </body>
          </html>

  </>);

}
//wrapper may be uneccessary
export default RootLayout;
