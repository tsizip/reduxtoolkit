import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProductApi } from '../../reducers/shopReducer'
import Cart from './Cart'
import ProductItem from './ProductItem'

export default function Products() {
     let dispatch = useDispatch()
     let { dataProduct } = useSelector(state => state.shopReducer)
     // console.log('dataProduct', dataProduct)
     
     useEffect(()=>{
          let actionThunk = getAllProductApi()
          dispatch(actionThunk)
     },[])

     return (
          <div className='container'>
               <Cart />
               <h3>Product List</h3>
               <div className='row'>
                    {dataProduct.map(item => {
                         return <div key={item.id} className='col-3'>
                              <ProductItem data={item} />
                         </div>
                    })}

               </div>
          </div>
     )
}
