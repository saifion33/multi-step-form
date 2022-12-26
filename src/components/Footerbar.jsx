import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { stepUp, stepDown } from '../features/stepSlice';

const Footerbar = () => {
    const step = useSelector((state) => state.step.value)
    const dispatch = useDispatch()


    return (
        <div className={`footerbar bg-white w-full fixed lg:static bottom-0 left-0 p-3 lg:pb-0 lg:mt-auto lg:px-12 flex ${step === 1 ? ' justify-end ' : 'justify-between'}  items-center`}>
            <button className={step === 1 ? 'hidden ' : 'block'} onClick={() => { dispatch(stepDown()) }}>Go Back</button>
            <button form={step === 1 ? 'form' : ''} className={` text-white p-2 rounded-md ${step == 4 ? 'bg-Purplishblue ' : 'bg-Marineblue'}`} onClick={() => { dispatch(stepUp()) }}>{step < 4 ? 'Next Step' : 'Confirm'}</button>
        </div>
    )
}

export default Footerbar