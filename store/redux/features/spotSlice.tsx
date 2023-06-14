import { createSlice } from "@reduxjs/toolkit";
//import { AppState } from "../store";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "../store";
// Type for our state
export interface PageState {
  pageState: string;
}

// Initial state
const initialState: PageState = {
  pageState: 'disc',
};

// Actual Slice
export const spotSlice = createSlice({
  name: "spot",
  initialState,
  reducers: {

    // Action to set the authentication status
    setPageState(state, action) {
      state.pageState = action.payload.page;
    },
    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    /*extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.auth,
        };
      },
    },*/

  },
});

export const { setPageState } = spotSlice.actions;

//if authslice isnt added to our store's reducers then the belo state.auth will noty be recognized
//meaning, both store and authslice.tsx recognize each other to help fix errors. AMazing!
//export const selectAuthState = (state: AppState) => state.auth.authState;
//always return the reducers from our slice files, eg slice.reducer
export const selectPageState = (state: AppState) => state.page
export default spotSlice.reducer;