import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { formValidTrue, stepUp } from '../features/stepSlice'
const Step1 = () => {
    const dispatch = useDispatch()
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(formValidTrue())
        dispatch(stepUp())
    }

    return (
        <div className='step1 bg-white rounded-md absolute lg:static  top-[-13%] lg:top-0 p-4 m-4 lg:m-0'>
            <div className="step-details">
                <h1 className='text-3xl font-bold text-Marineblue'>Personal info</h1>
                <p className='text-Coolgray pr-3 py-3 tracking-wide'>Please provide your name,email address, and phone number.</p>
            </div>
            <form id='form' onSubmit={submitHandler} className='space-y-3' >
                <div className='inputs-container'>
                    <label className='block text-Marineblue font-semibold' htmlFor="name">Name</label>
                    <input className='border-2 border-Coolgray rounded-md p-2 w-full outline-Purplishblue invalid:outline-Strawberryred' type="text" id='name' name='name' placeholder='e.g. Stephen King' required minLength={3} maxLength={20} />
                </div>
                <div className='inputs-container'>
                    <label className='block text-Marineblue font-semibold' htmlFor="email">Email Address</label>
                    <input className='border-2 border-Coolgray rounded-md p-2 w-full outline-Purplishblue invalid:outline-Strawberryred' type="email" id='email' name='email' placeholder='e.g. stephenking@lorem.com' required minLength={12} maxLength={30} />
                </div>
                <div className='inputs-container'>
                    <label className='block text-Marineblue font-semibold' htmlFor="phone">Phone Number</label>
                    <input className='border-2 border-Coolgray rounded-md p-2 w-full outline-Purplishblue invalid:outline-Strawberryred' type="tel" id='phone' name='phone' placeholder='e.g. +1 234 567 890' required minLength={10} maxLength={12} />
                </div>
            </form>
        </div>
    )
}

export default Step1