// rxslice

import { createSlice } from '@reduxjs/toolkit'
import Axios from 'axios'

const initialState = {
     cart: [
        
     ],
     dataProduct: [
         
     ]
}

const shopReducer = createSlice({
     name: 'shopReducer',
     initialState,
     reducers: {
          getProductApi: (state,action)=>{
               // console.log('reducer', action)
               // state.dataProduct = action.data
               
               state.dataProduct = action.payload
          },
          addToCart: (state,action)=>{
               let item = state.cart.find(value => value.id === action.payload.id)
             
               if(item){
                    item.quantity += 1
               } else {
                    state.cart.push(action.payload)
               }
          },
          delToCart: (state,action)=>{
               let newArr = state.cart.filter(item=>item.id !== action.payload)
               state.cart = newArr
          }
     }
});

export const {getProductApi, addToCart, delToCart} = shopReducer.actions

// export default shopReducer.reducer
export const shopReducer_ = shopReducer.reducer


// ========================== action thunk

export const getAllProductApi = ()=>{
     return async (dispatch, getState)=>{
          try{
               let result = await Axios({
                    url:'https://shop.cyberlearn.vn/api/Product',
                    method:'GET'
               })

               // hàm  getState lấy các state trên reducer
               // console.log('getState', getState().shopReducer)
               // cách 1:
               // dispatch({
               //      type:'shopReducer/getProductApi',
               //      data: result.data.content
               // })

               // cách 2:
               const action = getProductApi(result.data.content)
               dispatch(action)


          }catch(err){
               console.log(err)
          }
     }
}