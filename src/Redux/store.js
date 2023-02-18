import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './Reducers'


export const store = configureStore({
    reducer:{
        user:userReducer,
    }

 
})


