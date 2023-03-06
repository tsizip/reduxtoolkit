import { configureStore } from '@reduxjs/toolkit'
import {shopReducer_} from '../reducers/shopReducer'

export const store = configureStore({
     reducer: {
          shopReducer: shopReducer_
     }
})