"use client";
import React, { useState } from 'react'

type Props = {}
import {User,getAuth,UserCredential} from "firebase/auth"
import { useAuthState,useCreateUserWithEmailAndPassword,useSignInWithEmailAndPassword,useSignOut } from 'react-firebase-hooks/auth'
import {app} from '../../utils/firebase';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '../../store/zustand/auth.store';
const auth=getAuth(app);


type myUserDetails={
  email:string;
  password:string;
}
//this firebase auth hook uses firebase auth and reacyt-firebase-hooks for more custyomizability and straightforwardness
const myAuth = () => {  
  const [signOut, loadingOut, errorOut] = useSignOut(auth);
  const [
		createUserWithEmailAndPassword,//a function i call to initiate registration, just good copding practise i guess, i return all 4 values
		userCreate,
		loadingCreate,
		errorCreate,
	  ] = useCreateUserWithEmailAndPassword(auth);
    const [
      signInWithEmailAndPassword,
      userSign,
      loadingSign,
      errorSign,
      ] = useSignInWithEmailAndPassword(auth);
    const [user, setUser]:any=useState<User>({}as User);
    const currUser=useAuthStore().user.displayName;
  const signUp=async({email,password}:any)=>{
    if(!loadingCreate){
      let result=null, error=null;
			try {
				result= await createUserWithEmailAndPassword(email,password).then((res)=>{
          setUser(res?.user)

          return true;
        });
			} catch (error) {
				console.log("error found in signing up");
        //return false;
        
			}
			}
    }
  
  const signIn=async({email,password}:any)=>{
    let result=null;
    try {
      result = await signInWithEmailAndPassword(email,password);
    } catch (error) {
      console.log(error)
    }
    return result;
  }
  /*const logOut=()=>{
    let res=null;
    try {
      res = useSignOut(auth);
      
    } catch (error) {
      console.log("Could not signout out :"+ error)
    }
     return res;
  }*/
    //const [user,load,erra]=useAuthState(auth);
    const route=useRouter();
    
  
  //why are we returning user is user is supposed to be returned from the functions, 
  //i have to see how user value is passed in thge components that call this hook
  return {signUp,signOut,loadingOut,errorOut,user,loadingSign,errorSign,userSign,signInWithEmailAndPassword,createUserWithEmailAndPassword}
};

export default myAuth;