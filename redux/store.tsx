
import { createWrapper } from "next-redux-wrapper";
import {configureStore,ThunkAction,Action} from "@reduxjs/toolkit";
import thunk from 'redux-thunk';

import { authSlice } from "./features/authSlice";//imported as slices even tho there export defaults are reducers 
import {counterSlice} from "./features/counterSlice"
import { iconSlice } from "./features/iconSlice";
import  {spotSlice}  from "./features/spotSlice";
import { headerSlice } from "./features/headerSlice";
// initial states here
import playerReducer from './features/playerSlice';
import { shazamCoreApi } from './services/shazamCore';
import {youtubeApi} from './services/youtube'
import {cartSlice} from "./features/cartSlice";


//import {batchedSubscribe} from 'redux-batched-subscribe'
const initalState = {};

// middleware
const middleware = [thunk];


//slices are basically a way to structure our logic and actions together with our reducer
//we can call slice.actions or slice.reducer




// creating store, this was originally an arrow functional coimponent
const reducer={[shazamCoreApi.reducerPath]: shazamCoreApi.reducer,

  //the actual music player
   player: playerReducer,
  //add playerSlice
  [authSlice.name]: authSlice.reducer, // --another shorthand if we forgot the id name of the slice
  icon:iconSlice.reducer,
  [counterSlice.name]: counterSlice.reducer,
  [spotSlice.name]:spotSlice,

}
export const makeStore =()=>{
  //const store =
  return configureStore({
    reducer:{
      player:playerReducer,
      page:spotSlice.reducer,
      icon:iconSlice.reducer,
      auth:authSlice.reducer,
      cart:cartSlice.reducer,
      [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
      [youtubeApi.reducerPath]:youtubeApi.reducer,
      [headerSlice.name]:headerSlice.reducer
    },
   
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(shazamCoreApi.middleware),
    devTools: true,
});
  //return store;
 
}
export const store=makeStore();


//the below lines are used as type definitions when we create our dispatcher and read our useselector values
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;


//export const wrapper = createWrapper(() => store);//new code
export const wrapper = createWrapper(makeStore);
export const iconAction = iconSlice.actions
export const counterAction = counterSlice.actions
//export const selectAuthState = (state: AppState) => state.auth.authState;
//export const selectAuthUser=(state:AppState)=>state.auth.authUser;
