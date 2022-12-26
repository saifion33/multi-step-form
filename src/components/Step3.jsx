import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addOns, selectAddOn } from '../features/planSlice'

const Step3 = () => {
    const dispatch = useDispatch()
    const monthly = useSelector(state => state.plan.planType.monthly)
    const addOn = useSelector(state => state.plan.selectedAddOn)
    const [first, setFirst] = useState(true)
    const [second, setSecond] = useState(false)
    const [third, setThird] = useState(false)
    return (
        <div className='step1 bg-white w-[96%] rounded-md absolute lg:static  top-[-13%] lg:top-0 p-4 m-4 lg:m-0'>
            <div className="step-details">
                <h1 className='text-3xl font-bold text-Marineblue'>Pick add-ons</h1>
                <p className='text-Coolgray pr-3 py-3 tracking-wide'>Add-ons help enhance your gaming experience.</p>
            </div>
            <div className='space-y-4 my-4'>
                <label htmlFor='online-service' className={`cursor-pointer flex items-center gap-2 py-3 px-2 border-2 rounded-lg ${addOn.includes(addOns.ONLINE_SERVICES) ? ' border-Purplishblue bg-Lightblue' : ' border-Coolgray bg-white'}`}>
                    <input className='w-6 h-6' onChange={() => { dispatch(selectAddOn(addOns.ONLINE_SERVICES)) }} type="checkbox" value="online-service" defaultChecked={addOn.includes(addOns.ONLINE_SERVICES)} name="online-service" id="online-service" />
                    <div className='w-max'>
                        <h1 className='text-xl text-Marineblue'>Online service</h1>
                        <p className=' text-Coolgray text-sm'>Access to multiplayer games</p>
                    </div>
                    <p className="text-Purplishblue ml-auto">{monthly ? '+$1/mo' : '+$10/yr'}</p>
                </label>
                <label htmlFor='larger-storage' className={`cursor-pointer flex items-center gap-2 py-3 px-2 border-2 rounded-lg ${addOn.includes(addOns.LARGER_STORAGE) ? ' border-Purplishblue bg-Lightblue' : ' border-Coolgray bg-white'}`}>
                    <input className='w-6 h-6' onChange={() => { dispatch(selectAddOn(addOns.LARGER_STORAGE)) }} type="checkbox" name="larger-storage" id="larger-storage" />
                    <div className='w-max'>
                        <h1 className='text-xl text-Marineblue'>Larger storage</h1>
                        <p className=' text-Coolgray text-sm'>Extra 1TB of cloud save</p>
                    </div>
                    <p className="text-Purplishblue ml-auto">{monthly ? '+$2/mo' : '+$20/yr'}</p>
                </label>
                <label htmlFor='custom-profile' className={`cursor-pointer flex items-center gap-2 py-3 px-2 border-2 rounded-lg ${addOn.includes(addOns.CUSTOM_PROFILE) ? ' border-Purplishblue bg-Lightblue' : ' border-Coolgray bg-white'}`}>
                    <input className='w-6 h-6' onChange={() => { dispatch(selectAddOn(addOns.CUSTOM_PROFILE)) }} type="checkbox" name="custom-profile" id="custom-profile" />
                    <div className='w-max'>
                        <h1 className='text-xl text-Marineblue'>Customizable profile</h1>
                        <p className=' text-Coolgray text-sm'>Custom theme on your Profile</p>
                    </div>
                    <p className="text-Purplishblue ml-auto">{monthly ? '+$2/mo' : '+$20/yr'}</p>
                </label>
            </div>
        </div>
    )
}

export default Step3