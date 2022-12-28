import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setStepByNumber } from '../features/stepSlice'

const Step4 = () => {
    const dispatch = useDispatch()
    const monthly = useSelector(state => state.plan.PLAN_TYPE.monthly)
    const totalPrice = `+$${useSelector(state => state.plan.TOTAL_PRICE)}${monthly ? '/mo' : '/yr'}`
    const selectedPlan = useSelector(state => state.plan.SELECTED_PLAN)
    const selectedPlanPrice = useSelector(state => state.plan.PLANS_PRICE[selectedPlan])
    const selectedAddOns = useSelector(state => state.plan.SELECTED_ADD_ONS)
    const selectedAddOnPrice = useSelector(state => state.plan.ADD_ONS_PRICE)
    return (
        <div className='step1 bg-white w-[96%] rounded-md absolute lg:static  top-[-13%] lg:top-0 p-4 m-4 lg:m-0'>
            <div className="step-details">
                <h1 className='text-3xl font-bold text-Marineblue'>Finishing up</h1>
                <p className='text-Coolgray pr-3 py-3 tracking-wide'>Double-check everything looks OK before confirming.</p>
            </div>

            <div className='bg-Magnolia rounded-md p-4 space-y-3'>
                <div className='flex items-center justify-between border-b-2 border-Lightgray py-2'>
                    <div>
                        <h1 className='font-bold text-Marineblue'>{`${selectedPlan}(${monthly ? 'Monthly' : 'Yearly'})`}</h1>
                        <a href="#" onClick={() => {
                            dispatch(setStepByNumber(2))
                        }} className='text-Coolgray underline'>Change</a>
                    </div>
                    <p className='text-Marineblue font-bold'>{monthly ? `$${selectedPlanPrice}/mo` : `$${selectedPlanPrice}/yr`}</p>
                </div>
                {selectedAddOns.map(addOn => {
                    return <div key={addOn} className='flex items-center justify-between'>
                        <p className='text-Coolgray'>{addOn}</p>
                        <p className='text-Marineblue font-semibold'>{monthly ? `+$${selectedAddOnPrice[addOn]}/mo` : `+$${selectedAddOnPrice[addOn]}/yr`}</p>
                    </div>
                })}
            </div>
            <div className='flex items-center justify-between p-2 my-3'>
                <p className='text-Coolgray'>Total({monthly ? 'per month' : 'per year'})</p>
                <p className='text-lg text-Purplishblue font-bold'>{totalPrice}</p>
            </div>
        </div>
    )
}

export default Step4