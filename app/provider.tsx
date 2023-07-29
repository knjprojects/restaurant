'use client'
import React from 'react'
import { ThemeProvider } from "next-themes"; 

const Providers = ({children}:{children:React.ReactNode}) => {
  return (
    
      
    <ThemeProvider
      disableTransitionOnChange
      attribute="class"
      value={{ light: "light", dark: "dark" }}
      defaultTheme="system"
    >
    {children}
    </ThemeProvider>
  )
}

export default Providers