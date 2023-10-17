//"use client";
//prerequisites and type imports

import React, { ReactNode } from 'react'
import type { Session } from "next-auth"
import Script from 'next/script';
//predefined layout and provider files
import Providers from './provider';
import BaseLayout from '../components/BaseLayout';
import { Inter } from 'next/font/google'

//const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Famous Recipe',
  description: 'Canadian and Caribbean Styled Restaurant'
}
//declaring localfont, using .otf file in assets, no tailwind.config options needed
import localFont from 'next/font/local'
const rustic = localFont({
  src: [
    {
      path: '../public/assets/fonts/Rustic.otf',
      weight: '200'
    },
    
  ],
  variable: '--font-rustic'
})
const bariol = localFont({
  src: [
    {
      path: '../public/assets/fonts/bariol.otf',
      weight: '400'
    },
    
  ],
  variable: '--font-bariol'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  //register();//registering our swiper.js carosel slider after installing through yarn not cdn
  return (
    <html lang="en" className={`${rustic.variable} ${bariol.variable}`}>
      <head>
          {/*Carosel styles  import here */}
      </head>
    
      <body className='themed h-full w-full'
        >
        <Providers >
          <BaseLayout>
            {children}</BaseLayout>
        </Providers>
        
      </body>
    </html>
  )
}


