//"use client";
//prerequisites and type imports
import './format.css'
import React, { ReactNode } from 'react'
import Head from 'next/head';
import type { Session } from "next-auth"
import Script from 'next/script';
//predefined layout and provider files
import Providers from './provider';
import BaseLayout from '../components/BaseLayout';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Famous Recipe',
  description: 'Canadian and Caribbean Styled Restaurant'
}
import localFont from 'next/font/local'
const rustic = localFont({
  src: [
    {
      path: '../public/assets/fonts/Rustic.otf',
      weight: '400'
    },
    
  ],
  variable: '--font-rustic'
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
 
  return (
    <html lang="en" className={`${rustic.variable} font-rustic`}>
      <Head>
          {/*Carosel styles  import here */}
         
          <style>
      <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
      </style>
      
      </Head>
      
      { /**className={inter.className}* */}
      <body className='themed h-full w-full'
        
        
        >
        
        <Providers >
          
          <BaseLayout>
            {children}</BaseLayout>
       
      
       
        </Providers>
        {/*<Script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></Script>

        <Script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></Script>
        <Script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></Script>
        <Script type="text/javascript" src="slick/slick.min.js"></Script>


        <Script type="text/javascript" id="carosel" > 
  </Script>*/}
      </body>
    </html>
  )
}



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