'use client'
import React from 'react'
//import { Provider } from 'react-redux'
import { ThemeProvider } from "next-themes"; 
//import { store } from '../../backups/redux/store'
//import { wrapper } from '../redux/store'
import { Session } from 'next-auth'
type Props = {}
import { SessionProvider } from 'next-auth/react'

const Providers = ({children,session}:{session:Session,children:React.ReactNode}) => {
  return (
    //remove redux provider eventually
 
      
    <ThemeProvider
      disableTransitionOnChange
      attribute="class"
      value={{ light: "light", dark: "dark" }}
      defaultTheme="system"
    >
    <SessionProvider session={session}>
    {children}
    
    </SessionProvider>
    </ThemeProvider>
    
   
   
  )
}

export default Providers