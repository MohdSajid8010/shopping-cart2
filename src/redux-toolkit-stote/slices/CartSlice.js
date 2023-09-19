import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartArr: [],
    },
    reducers: {
        addToCart: (state, actions) => {
            state.cartArr = [...state.cartArr, actions.payload];
        },
        removeFromCart: (state) => { },
        updataCart: (state, actions) => {
            console.log(actions)
            state.cartArr = actions.payload;
        },
    }
})

export const { addToCart, removeFromCart, updataCart } = cartSlice.actions;
export default cartSlice.reducer;