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
    PLAN_TYPE: { monthly: true },

    SELECTED_PLAN: plans.ARCADE,

    SELECTED_ADD_ONS: [addOns.ONLINE_SERVICES],

    PLANS_PRICE: { [plans.ARCADE]: 9, [plans.ADVANCED]: 12, [plans.PRO]: 15 },

    ADD_ONS_PRICE: { [addOns.ONLINE_SERVICES]: 1, [addOns.LARGER_STORAGE]: 2, [addOns.CUSTOM_PROFILE]: 2 },

    TOTAL_PRICE: 10,

}

export const planSlice = createSlice({
    name: 'plan', initialState, reducers: {
        changePlanTypeYearly: (state) => {
            state.PLAN_TYPE.monthly = !(state.PLAN_TYPE.monthly);

            !state.PLAN_TYPE.monthly ? (state.PLANS_PRICE = { [plans.ARCADE]: 90, [plans.ADVANCED]: 120, [plans.PRO]: 150 }) : (state.planPrice = { [plans.ARCADE]: 9, [plans.ADVANCED]: 12, [plans.PRO]: 15 })
            !state.PLAN_TYPE.monthly ? (state.ADD_ONS_PRICE = { [addOns.ONLINE_SERVICES]: 10, [addOns.LARGER_STORAGE]: 20, [addOns.CUSTOM_PROFILE]: 20 }) : (state.ADD_ONS_PRICE = { [addOns.ONLINE_SERVICES]: 1, [addOns.LARGER_STORAGE]: 2, [addOns.CUSTOM_PROFILE]: 2 })
            let selectedAddonPrice = 0
            state.SELECTED_ADD_ONS.map((addOn) => {
                selectedAddonPrice += state.ADD_ONS_PRICE[addOn]
            })
            state.TOTAL_PRICE = state.PLANS_PRICE[state.SELECTED_PLAN] + (selectedAddonPrice ? selectedAddonPrice : 0)
        },
        changePlan: (state, action) => {
            let selectedAddonPrice = 0
            state.SELECTED_ADD_ONS.map((addOn) => {
                selectedAddonPrice += state.ADD_ONS_PRICE[addOn]
            })

            state.SELECTED_PLAN = action.payload
            state.TOTAL_PRICE = state.PLANS_PRICE[state.SELECTED_PLAN] + (selectedAddonPrice ? selectedAddonPrice : 0)
        },
        selectAddOn: (state, action) => {
            if (state.SELECTED_ADD_ONS.includes(action.payload)) {
                const payloadIndex = state.SELECTED_ADD_ONS.indexOf(action.payload)
                state.SELECTED_ADD_ONS.splice(payloadIndex, 1);
                state.TOTAL_PRICE -= state.ADD_ONS_PRICE[action.payload]

            }
            else {
                state.SELECTED_ADD_ONS.push(action.payload)
                state.TOTAL_PRICE += state.ADD_ONS_PRICE[action.payload]
            }
        }

    }
})

export const { changePlanTypeYearly, changePlan, selectAddOn } = planSlice.actions
export default planSlice.reducer