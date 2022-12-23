import React from 'react'
import { useState } from 'react'

const Step4 = () => {
    const [monthly, setMonthly] = useState(true)
    return (
        <div className='step1 bg-white w-[96%] rounded-md absolute lg:static  top-[-13%] lg:top-0 p-4 m-4 lg:m-0'>
            <div className="step-details">
                <h1 className='text-3xl font-bold text-Marineblue'>Finishing up</h1>
                <p className='text-Coolgray pr-3 py-3 tracking-wide'>Double-check everything looks OK before confirming.</p>
            </div>
            <div className='bg-Magnolia rounded-md p-4 space-y-3'>
                <div className='flex items-center justify-between border-b-2 border-Lightgray py-2'>
                    <div>
                        <h1 className='font-bold text-Marineblue'>Arcade(monthly)</h1>
                        <a href="#" className='text-Coolgray underline'>Change</a>
                    </div>
                    <p className='text-Marineblue font-bold'>{monthly ? '$9/mo' : '$90/yr'}</p>
                </div>
                <div className='flex items-center justify-between'>
                    <p className='text-Coolgray'>Online service</p>
                    <p className='text-Marineblue font-semibold'>{monthly ? '+$1/mo' : '$10/yr'}</p>
                </div>
                <div className='flex items-center justify-between'>
                    <p className='text-Coolgray'>Larger storage</p>
                    <p className='text-Marineblue font-semibold'>{monthly ? '+$2/mo' : '$20/yr'}</p>
                </div>
            </div>
            <div className='flex items-center justify-between p-2 my-3'>
                <p className='text-Coolgray'>Total(per month)</p>
                <p className='text-lg text-Purplishblue font-bold'>{monthly ? '$12/mo' : '$120/yr'}</p>
            </div>
        </div>
    )
}

export default Step4