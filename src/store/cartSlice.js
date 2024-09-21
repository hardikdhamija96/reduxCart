import { createSlice } from "@reduxjs/toolkit"

const initialState = [];

//createSlice need configuration object parameter
const cartSlice = createSlice({
    // name used in action types
    name: "cart",
    // initial state for reducer
    initialState,
    //reducers contain functions we need for our applications action type
    reducers:{
        addItem(state,action){
            // Redux suggests to not mutate state directly
            // but in toolkit createSlice take care of it
            // createSlice automatically will run something like
            // return [...state,action.payload]
            state.push(action.payload);
        },
        removeItem(state,action){
            return state.filter(item => item.id!== action.payload.id);
        },
    }
})

export const {addItem,removeItem} = cartSlice.actions;
export default cartSlice.reducer;