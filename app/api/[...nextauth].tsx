import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import { User } from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"
import {googleProvider}  from '../../utils/firebase'


//import nextAuth from "next-auth"// weird right?
export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    // ...add more providers here
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "jsmith",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials, req) {
        const { username, password } = credentials as any;
        const res = await fetch("http://localhost:8000/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        });

        const user = await res.json();

        console.log({ user });

        if (res.ok && user) {
          return user;
        } else return null;
      },
    }),
    
    FacebookProvider({
      clientId: '',//process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID,
      clientSecret:''//process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_SECRET, //"44fb177cddb3011b68b74e0fef99bee0"//
    }), //78865451+knjprojects@users.noreply.github.com,eed a secret for github, need to launch vercel site first
    
    GoogleProvider({
      clientId:'', //process.env.NEXT_PUBLIC_GOOGLE_API_CLIENT_ID,
      clientSecret:'' //process.env.NEXT_PUBLIC_GOOGLE_API_CLIENT_SECRET
    })
  ],
    
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    async signIn({ account, profile }:any) {
      if (account?.provider === "google") {
        
        return profile?.email_verified && profile?.email.endsWith("@example.com")
      
      }
      else if (account.provider === "facebook") { 
        
        return true
      }
    return false// Do different verification for other providers that don't have `email_verified`
    },
    async redirect({ url, baseUrl }:any) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url
      return baseUrl
    },
    async session({ session, user, token }:any) {
      const isAllowedToSignIn = true
      if (isAllowedToSignIn) {
         // Send properties to the client, like an access_token from a provider.
        session.accessToken = token.accessToken;
        session.user.id = token.id
        session.user.email = user?.email
        //session.provider=token.provider
        return session;
      } else {
        // Return false to display a default error message
        return false
        // Or you can return a URL to redirect to:
        // return '/unauthorized'
      }
    },
    async jwt({ token, user, account, profile, isNewUser }:any) {
      if (account) {
        token.accessToken = account.access_token;
        token.id = profile.id;
        token.user = user;
        token.provider = account.provider;
      }
      return token
      }
  }//endcallbackss

}
export default NextAuth(authOptions)

