import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState={
    items:[],
    status:null,
    loading:false,
}

export const productsFetch = createAsyncThunk(
    "product/productsFetch",
     async ()=>{
            const response = await axios.get("https://e-commerce-back-end-phi7.onrender.com/product")
            return response?.data;
    }
)

const productsSlice = createSlice({
    name:'product',
    initialState,
    reducers:{},
    extraReducers:{
        [productsFetch.pending]:(state,action)=>{
            state.status ="pending"
            state.loading =true
        },
        [productsFetch.fulfilled]:(state,action)=>{
            state.status ="Success"
            state.items = action.payload
            state.loading =false
        },
        [productsFetch.rejected]:(state,action)=>{
            state.status = "rejected";
            state.loading =false
        }
    }
})

export default productsSlice.reducer;
