import React from 'react'
import { useState } from 'react'

const Step3 = () => {
    const [monthly, setMonthly] = useState(true)
    return (
        <div className='step1 bg-white rounded-md absolute lg:static  top-[-13%] lg:top-0 p-4 m-4 lg:m-0'>
            <div className="step-details">
                <h1 className='text-3xl font-bold text-Marineblue'>Pick add-ons</h1>
                <p className='text-Coolgray pr-3 py-3 tracking-wide'>Add-ons help enhance your gaming experience.</p>
            </div>
            
        </div>
    )
}

export default Step3