import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { AppState } from "../store";
import { HYDRATE } from "next-redux-wrapper";




//our async api fetch function
/*export const fetchUsers=createAsyncThunk('users/getAllUsers',async(thunkApi)=>{
  const response=await fetch("https://jsonplaceholder.typicode.com/users?_limit=5");
  const data=await response.json();
  return data;
})*/



// Type for our state
export interface Header {
  header:{
    activeTab: string;
    user:{
        name:string,id:any
    }
  }

} 

// Initial state
const initialState: Header= {
    header:{
        activeTab: 'Home',
        user:{
            name:'guest',
            id:'999'
        }
      }
} as any;

// Actual Slice
export const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {

    // Action to set the authentication status
    setHeaderTab(state, action) {
      state.header.activeTab=action.payload;
    },
    setUser(state, action) {
      state.header.user = action.payload;
    },
    /*addMember(state,action){
      state.members=[...state.members,action.payload]
    },
    setCat(state, action){
      state.auth.cat=action.payload
    }*/
}, 
extraReducers: (builder)=>{//whenever our async function is fulfilled
      /*builder.addCase(fetchUsers.fulfilled,(state,action)=>{
        state.auth.authState=true;
        state.auth.authUser=action.payload,
        state.members.push(...action.payload)//spread operator seems essential for undefined stuff
      }),
      builder.addCase(fetchUsers.pending, (state, action) => {
        state.loading = true;
      });*/
      
},
});
//dispatches
export const { setHeaderTab,setUser} = headerSlice.actions;

//receivers
export const selectUserName=(state:AppState)=>state.header.header.user.name;
export const selectAuthState = (state: AppState) => state.auth.auth.authState
export const selectAuthUser=(state:AppState)=>state.auth.auth.authUser;
//always return the reducers from our slice files, eg slice.reducer
export default headerSlice.reducer;