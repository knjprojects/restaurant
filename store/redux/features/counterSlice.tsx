//this is the original reducer method, THIS CODE STILL WORKS!   
/*import {DECREMENT_COUNTER, INCREMENT_COUNTER} from './actions/actionTypes';
const counterReducer = (state = {value: 0}, action:any) => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return {...state, value: state.value + 1};
        case DECREMENT_COUNTER:
            return {...state, value: state.value - 1};
        default:
            return {...state};
    }
};
*/
//export default counterReducer; //OR
//we can write this another way using our redux toolkit shorthand, to write our
// mutating logic as well as our actions within our reducers


import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
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
    }
})
export const { incremented, decremented } = counterSlice.actions
export default counterSlice.reducer;


