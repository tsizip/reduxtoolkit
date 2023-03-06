import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../reducers/shopReducer'

export default function ProductItem(props) {
     let item = props.data
     let dispatch = useDispatch()
     return (
          <div>
               <div key={item.id} className="card">
                         <img className="card-img-top" src={item.image} alt="Title" />
                         <div className="card-body">
                              <h4 className="card-title">{item.name}</h4>
                              <p className="card-text">{item.description}</p>
                              <button className='btn btn-primary'
                              onClick={()=>{
                                   let itemCart = {...item, quantity: 1}
                                   const action = addToCart(itemCart)

                                   dispatch(action)

                              }} >Add</button>
                         </div>
                    </div>
            

          </div>
     )
}
