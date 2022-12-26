import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    value: 1,
    formValid: false,
}
export const stepSlice = createSlice({
    name: 'step', initialState, reducers: {
        stepUp: (state) => {
            if ((state.value !== 4) && state.formValid) {
                state.value += 1
            }
        },
        stepDown: (state) => {
            if (state.value !== 1) {
                state.value -= 1
            }
        },
        formValidTrue: (state) => {
            state.formValid = true
        }
    }
})
export const { stepUp, stepDown, formValidTrue } = stepSlice.actions
export default stepSlice.reducer