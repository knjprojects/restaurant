"use client";

type Props = {}

import React, { ReactNode } from 'react'

import Header from './../Header'

import './globals.css'
import type { AppProps } from 'next/app'

import Providers from './../provider';
import type { Session } from "next-auth"
import { wrapper } from "../../store/redux/store";


//import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

//adding firebase auth
//import Login from '../components/Login';
import { useAuthState } from 'react-firebase-hooks/auth'
//import {auth,db} from '../../utils/firebase'
import Navbar from '../../components/Navbar';
import { useAuthStore } from '../../store/zustand/auth.store';
import Home from './page';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
  //const { store, props } = wrapper.useWrappedStore(children);
  //const emotionCache= props;
  //const helmetContext = {};//created so our helmet isnt accessed outside app


  const { isLoading, user, error } = useAuthStore();
const ProfileSetup = ({children}:any) => {
    const route=useRouter();
const {data: session, status} =useSession(
    {
        required: true,
    onUnauthenticated() {
      // The user is not authenticated, handle it here.
      // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
      //route.push('/auth')
    }
    });
  









  return (<> 
  <html>
            <head></head>
    <body> <Providers session={session!}>
         
         <Header active={isLoading==true?'':''} />
         
         
            {children}</Providers>
            <script src="../path/to/flowbite/dist/flowbite.min.js"></script>

            </body>
          </html>

  </>);

}


export default ProfileSetup;