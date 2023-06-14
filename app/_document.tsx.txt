'use client';
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { useState } from "react";

export default function Document() {
    const [hasError,setHasError]=useState(false)
    const [isReady,setIsReady]=useState(false)
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script
           src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer  onError={() => setHasError(true)}
           onReady={() => setIsReady(true)}>
            </Script>
          
         
        
      </body>
    </Html>
  );
}