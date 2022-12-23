import React from 'react'
import { useState } from 'react'

const Step3 = () => {
    const [monthly, setMonthly] = useState(true)
    const [first, setFirst] = useState(false)
    const [second, setSecond] = useState(false)
    const [third, setThird] = useState(false)
    return (
        <div className='step1 bg-white w-[96%] rounded-md absolute lg:static  top-[-13%] lg:top-0 p-4 m-4 lg:m-0'>
            <div className="step-details">
                <h1 className='text-3xl font-bold text-Marineblue'>Pick add-ons</h1>
                <p className='text-Coolgray pr-3 py-3 tracking-wide'>Add-ons help enhance your gaming experience.</p>
            </div>
            <div className='space-y-4 my-4'>
                <div className={`flex items-center gap-2 py-3 px-2 border-2 rounded-lg ${first ? ' border-Purplishblue bg-Lightblue' : ' border-Coolgray bg-white'}`}>
                    <input className='w-6 h-6' onChange={() => { setFirst(!first) }} type="checkbox" name="online-service" id="online-service" />
                    <div className='w-max'>
                        <h1 className='text-xl text-Marineblue'>Online service</h1>
                        <p className=' text-Coolgray text-sm'>Access to multiplayer games</p>
                    </div>
                    <p className="text-Purplishblue ml-auto">{monthly ? '+$1/mo' : '+$10/yr'}</p>
                </div>
                <div className={`flex items-center gap-2 py-3 px-2 border-2 rounded-lg ${second ? ' border-Purplishblue bg-Lightblue' : ' border-Coolgray bg-white'}`}>
                    <input className='w-6 h-6' onChange={() => { setSecond(!second) }} type="checkbox" name="online-service" id="online-service" />
                    <div className='w-max'>
                        <h1 className='text-xl text-Marineblue'>Larger storage</h1>
                        <p className=' text-Coolgray text-sm'>Extra 1TB of cloud save</p>
                    </div>
                    <p className="text-Purplishblue ml-auto">{monthly ? '+$2/mo' : '+$20/yr'}</p>
                </div>
                <div className={`flex items-center gap-2 py-3 px-2 border-2 rounded-lg ${third ? ' border-Purplishblue bg-Lightblue' : ' border-Coolgray bg-white'}`}>
                    <input className='w-6 h-6' onChange={() => { setThird(!third) }} type="checkbox" name="online-service" id="online-service" />
                    <div className='w-max'>
                        <h1 className='text-xl text-Marineblue'>Online service</h1>
                        <p className=' text-Coolgray text-sm'>Custom theme on your Profile</p>
                    </div>
                    <p className="text-Purplishblue ml-auto">{monthly ? '+$2/mo' : '+$20/yr'}</p>
                </div>
            </div>
        </div>
    )
}

export default Step3