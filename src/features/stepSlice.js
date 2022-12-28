import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    value: 1,
    formValid: false,
}
export const stepSlice = createSlice({
    name: 'step', initialState, reducers: {
        stepUp: (state) => {
            if ((state.value !== 5) && state.formValid) {
                state.value += 1
            }
        },
        stepDown: (state) => {
            if (state.value !== 1) {
                state.value -= 1
            }
            if (state.value < 2) {
                state.formValid = false
            }
        },
        setStepByNumber: (state, action) => {
            state.value = action.payload
        },
        formValidTrue: (state) => {
            state.formValid = true
        }
    }
})
export const { stepUp, stepDown, formValidTrue, setStepByNumber } = stepSlice.actions
export default stepSlice.reducer