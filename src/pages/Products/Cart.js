import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { delToCart } from '../../reducers/shopReducer'

export default function Cart() {

     let { cart } = useSelector(state => state.shopReducer)
     // console.log('cart', cart)
     let dispatch = useDispatch()
     return (
          <div>
               <h3>Carts</h3>
               <table className='table'>
                    <thead>
                         <tr>
                              <th>Id</th>
                              <th>name</th>
                              <th>image</th>
                              <th>price</th>
                              <th>quantity</th>
                              <th>total</th>
                              <th></th>
                         </tr>
                    </thead>
                    <tbody>
                         {cart.map((item, index) => {
                              return <tr key={item.id}>
                                   <td>{item.id}</td>
                                   <td>{item.name}</td>
                                   <td><img style={{ width: 40 }} src={item.image} alt='img' /></td>
                                   <td>{item.price.toLocaleString()}</td>
                                   <td>{item.quantity}</td>
                                   <td>{(item.price * item.quantity).toLocaleString()}</td>
                                   <td><button className='btn btn-danger' onClick={()=>{
                                        const action = delToCart(item.id)
                                        dispatch(action)
                                   }} >del</button></td>
                              </tr>
                         })}

                    </tbody>
               </table>
          </div>
     )
}
