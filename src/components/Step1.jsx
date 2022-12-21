import React from 'react'

const Step1 = () => {
    return (
        <div className='step1 bg-white lg:border-4 border-blue-600 rounded-md absolute lg:static  top-[-13%] lg:top-0 p-4 m-4 lg:m-0'>
            <div className="step-details">
                <h1 className='text-3xl font-bold text-Marineblue'>Personal info</h1>
                <p className='text-Coolgray pr-3 py-3 tracking-wide'>Please provide your name,email address, and phone number.</p>
            </div>
            <form className='space-y-3' action="#">
                <div className='inputs-container'>
                    <label className='block text-Marineblue font-semibold' htmlFor="name">Name</label>
                    <input className='border-2 border-Coolgray rounded-md p-2 w-full outline-Purplishblue' type="text" id='name' name='name' placeholder='e.g. Stephen King' />
                </div>
                <div className='inputs-container'>
                    <label className='block text-Marineblue font-semibold' htmlFor="email">Email Address</label>
                    <input className='border-2 border-Coolgray rounded-md p-2 w-full outline-Purplishblue' type="email" id='email' name='email' placeholder='e.g. stephenking@lorem.com' />
                </div>
                <div className='inputs-container'>
                    <label className='block text-Marineblue font-semibold' htmlFor="phone">Phone Number</label>
                    <input className='border-2 border-Coolgray rounded-md p-2 w-full outline-Purplishblue' type="tel" id='phone' name='phone' placeholder='e.g. +1 234 567 890' />
                </div>
            </form>
        </div>
    )
}

export default Step1