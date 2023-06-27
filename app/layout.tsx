"use client";
//prerequisites and type imports
import React, { ReactNode } from 'react'
import './globals.css'
import type { Session } from "next-auth"


//headers, navbars, other components
import Header from './Header'
import Navbar from '../components/Navbar';
import Home from './page';

//auth, session, store hooks
//import {auth,db} from '../../utils/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useAuthStore } from '../zustand/auth.store';
import { useSession } from 'next-auth/react';

//predefined layout and provider files
import Providers from './provider';
import BaseLayout from '../components/BaseLayout';
const RootLayout=({children,session }: { children: React.ReactNode,session:Session })=>{
  const { isLoading, user, error } = useAuthStore();
  return (<> 
  <html>
      <head>
        
        <style>
          { /*add scrits and fonts here */}
          
        </style>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous'></link>
        <link href="https://fonts.googleapis.com/css2?family=Merienda&display=swap" rel="stylesheet"></link>
            </head>
      <body> <Providers session={session}>
        <Header active={isLoading==true?'':''} />
        <BaseLayout>{children}</BaseLayout>
            </Providers>
            <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
      </body>
    </html>
  </>);

}
//wrapper may be uneccessary
export default RootLayout;







  /*function Auth({ children }:any) {
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
  }*/