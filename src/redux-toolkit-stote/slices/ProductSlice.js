import { createSlice } from '@reduxjs/toolkit'
// AIzaSyC8NPlLcaNkNBXkQCvsIahtdEDshZX9Kc0
const initialState = {
    loading: false, data: [], allData: [], error: ""
}

export const ProductSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        Prod_loading: (state) => {
            state.loading = true;
            state.data = [];
            state.allData = []
            state.error = "";
        },
        Prod_success: (state, actions) => {
            state.loading = false;
            state.data = actions.payload;
            state.allData = actions.payload;
            state.error = "";
        },
        Prod_failure: (state, actions) => {
            state.loading = false;
            state.data = [];
            state.allData = [];
            state.error = actions.payload;
        },
        Prod_filtered: (state, action) => {
            state.data = state.allData.filter((obj) => obj.title.toUpperCase().includes(action.payload.toUpperCase()))
        }
    },
})

export const { Prod_loading, Prod_success, Prod_failure, Prod_filtered } = ProductSlice.actions

export default ProductSlice.reducer