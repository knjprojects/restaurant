import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { AppState } from "../store";
import { HYDRATE } from "next-redux-wrapper";




//our async api fetch function
export const fetchUsers=createAsyncThunk('users/getAllUsers',async(thunkApi)=>{
  const response=await fetch("https://jsonplaceholder.typicode.com/users?_limit=5");
  const data=await response.json();
  return data;
})



// Type for our state
export interface Authenticate {
  auth:{
    authState: boolean;
    authUser:string;
    cat:boolean;
  },
  members:any,
  loading:boolean;
} 

// Initial state
const initialState: Authenticate = {
  auth:
  {
    authState: false,
    authUser:'guest',
    loading:false,
    
},members:[
   
]
} as any;

// Actual Slice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {

    // Action to set the authentication status
    setAuthState(state, action) {
      state.auth.authState = action.payload;
    },
    setAuthUser(state, action) {
      state.auth.authUser = action.payload;
    },
    addMember(state,action){
      state.members=[...state.members,action.payload]
    },
    setCat(state, action){
      state.auth.cat=action.payload
    }
}, 
extraReducers: (builder)=>{//whenever our async function is fulfilled
      builder.addCase(fetchUsers.fulfilled,(state,action)=>{
        state.auth.authState=true;
        state.auth.authUser=action.payload,
        state.members.push(...action.payload)//spread operator seems essential for undefined stuff
      }),
      builder.addCase(fetchUsers.pending, (state, action) => {
        state.loading = true;
      });
      
},
});
//dispatches
export const { setAuthState,setAuthUser,addMember,setCat } = authSlice.actions;

//receivers
export const selectAuth=(state:AppState)=>state.auth;
export const selectAuthState = (state: AppState) => state.auth.auth.authState
export const selectAuthUser=(state:AppState)=>state.auth.auth.authUser;
//always return the reducers from our slice files, eg slice.reducer
export default authSlice.reducer;