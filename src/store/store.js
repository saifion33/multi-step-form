import { configureStore } from '@reduxjs/toolkit'
import stepReducer from '../features/stepSlice'
import planReducer from '../features/planSlice'

export const store = configureStore({
    reducer: {
        step: stepReducer,
        plan: planReducer
    },
})