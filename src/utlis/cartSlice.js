import { createSlice } from "@reduxjs/toolkit";

const cartSlice =  createSlice ({
    name : "cart",
    initialState: {
        items: [],
    },
    reducers :{
        addItems: (state,action) => {
            state.items.push(action.payload);
        },
        removeItems: (state,action) => {
            state.items.pop();
        },
        clearCart: (state,action) => {
            //RTK  - either Mutate the existing state or return a new state
            state.items.length = 0;
            //return {items : []} -- this new object wil replaced inside original state
        }
    }

});

export default cartSlice.reducer;
export const {addItems,removeItems,clearCart} = cartSlice.actions;  