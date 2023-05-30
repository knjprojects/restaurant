import { createSlice,PayloadAction,createSelector,createAsyncThunk} from '@reduxjs/toolkit'
import { AppState } from '../store'
//import { types } from "../types"
//import {CartState} from '../../typings'





export interface CartState {
    cartOpened:boolean;
    cart:[],
  } 
  
  // Initial state
  const initialState: CartState = {
    authState: false,
    authUser:'guest',
    array:[]
  } as any;

  export const fetchAsyncData=createAsyncThunk('',async(thunkApi)=>{
    const response=await fetch('https://apipheny.io/free-api/');
    const data =await response.json()
    console.log(data)
    return data;

  /**  */
  })

export const cartSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        incremented: state => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.value += 1
    },
    decremented: state => {
        state.value -= 1
    }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAsyncData.fulfilled,(state,action)=>{

        })
      },
})
export const { incremented, decremented } = cartSlice.actions
export default cartSlice.reducer;

