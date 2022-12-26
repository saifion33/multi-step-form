import { createSlice } from "@reduxjs/toolkit";

export const plans = Object.freeze({
    ARCADE: 'arcade',
    ADVANCED: 'advanced',
    PRO: 'pro'
})
export const addOns = Object.freeze({
    ONLINE_SERVICES: 'online-services',
    LARGER_STORAGE: 'lager-storage',
    CUSTOM_PROFILE: 'custom-profile',
})
const initialState = {
    planType: { monthly: true },
    selectedPlan: plans.ARCADE,
    selectedAddOn: [addOns.ONLINE_SERVICES]
}

export const planSlice = createSlice({
    name: 'plan', initialState, reducers: {
        changePlanTypeYearly: (state) => {
            state.planType.monthly = !(state.planType.monthly);
        },
        changePlan: (state, action) => {
            state.selectedPlan = action.payload
        },
        selectAddOn: (state, action) => {
            if (state.selectedAddOn.includes(action.payload)) {
                const payloadIndex = state.selectedAddOn.indexOf(action.payload)
                state.selectedAddOn.splice(payloadIndex, 1);
            }
            else {

                state.selectedAddOn.push(action.payload)
            }
        }

    }
})

export const { changePlanTypeYearly, changePlan, selectAddOn } = planSlice.actions
export default planSlice.reducer