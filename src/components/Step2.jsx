import React from 'react'
import arcadeIcon from '/images/icon-arcade.svg'
import advancedIcon from '/images/icon-advanced.svg'
import proIcon from '/images/icon-pro.svg'
import { useSelector, useDispatch } from 'react-redux'
import { changePlanTypeYearly, changePlan } from '../features/planSlice'
import { plans } from '../features/planSlice'
const Step2 = () => {

    const dispatch = useDispatch()
    const monthly = useSelector(state => state.plan.PLAN_TYPE.monthly)
    const PLANS_PRICE = useSelector(state => state.plan.PLANS_PRICE)
    // const [SELECTED_PLAN, setSelectedPlan] = useState('arcade')
    const selectedPlan = useSelector(state => state.plan.SELECTED_PLAN)
    const planSelecter = (plan) => {
        dispatch(changePlan(plan))
    }
    return (
        <div className='step1 bg-white w-[96%] lg:w-[80%] rounded-md absolute  top-[-13%] lg:top-0 p-4 m-4 lg:m-0'>
            <div className="step-details">
                <h1 className='text-3xl font-bold text-Marineblue'>Select your plan</h1>

                <p className='text-Coolgray pr-3 py-3 tracking-wide'>Your have the option of monthly or yearly billing.</p>
            </div>
            <div className="plan-container space-y-4 lg:space-y-8 mt-4 ">
                <div className='space-y-4 lg:space-y-0 lg:space-x-3 lg:flex'>
                    <div onClick={() => { planSelecter(plans.ARCADE) }} className={`plan-card cursor-pointer border-2 ${selectedPlan === 'arcade' ? ' bg-Magnolia border-Purplishblue ' : ' bg-white border-Lightgray'} flex w-full lg:h-48 lg:flex-col items-center lg:items-start space-x-5 lg:space-x-0 p-4 rounded-md`}>
                        <img className='w-12 h-12' src={arcadeIcon} alt="arcade" />
                        <div className='mt-auto'>
                            <h1 className='font-bold text-xl lg:text-lg text-Marineblue'>Arcade</h1>
                            <p className='text-Coolgray '>{monthly ? '$9/mo' : '$90/yr'}</p>
                            <p className={`text-Marineblue ${monthly ? 'hidden ' : 'block'}`}>2 months free</p>
                        </div>
                    </div>
                    <div onClick={() => { planSelecter(plans.ADVANCED) }} className={`plan-card cursor-pointer border-2 ${selectedPlan === 'advanced' ? ' bg-Magnolia border-Purplishblue ' : ' bg-white border-Lightgray'} flex w-full lg:flex-col items-center lg:items-start space-x-5 lg:space-x-0  p-4 rounded-md`}>
                        <img className='w-12 h-12' src={advancedIcon} alt="advanced" />
                        <div className='mt-auto'>
                            <h1 className='font-bold text-xl lg:text-lg text-Marineblue'>Advanced</h1>
                            <p className='text-Coolgray '>{monthly ? '$12/mo' : '$120/yr'}</p>
                            <p className={`text-Marineblue ${monthly ? 'hidden ' : 'block'}`}>2 months free</p>
                        </div>
                    </div>
                    <div onClick={() => { planSelecter(plans.PRO) }} className={`plan-card cursor-pointer border-2 ${selectedPlan === 'pro' ? ' bg-Magnolia border-Purplishblue ' : ' bg-white border-Lightgray'} flex w-full lg:flex-col items-center lg:items-start space-x-5 lg:space-x-0  p-4 rounded-md`}>
                        <img className='w-12 h-12' src={proIcon} alt="pro" />
                        <div className='mt-auto'>
                            <h1 className='font-bold text-xl lg:text-lg text-Marineblue'>Pro</h1>
                            <p className='text-Coolgray '>{monthly ? '$15/mo' : '$150/yr'}</p>
                            <p className={`text-Marineblue ${monthly ? 'hidden ' : 'block'}`}>2 months free</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center space-x-6 p-3 mt-auto bg-Lightgray rounded-lg'>
                    <p className={`font-semibold ${monthly ? ' text-Marineblue ' : ' text-Coolgray '} text-lg lg:text-base`}>Monthly</p>

                    <label className="inline-flex  relative items-center cursor-pointer">
                        <input onClick={() => { dispatch(changePlanTypeYearly()) }} type="checkbox" defaultChecked={!monthly} value="" className="sr-only peer" />
                        <div className="w-11 h-6 bg-Marineblue peer-focus:outline-none rounded-full peer dark:bg-Marineblue peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5  after:transition-all dark:border-gray-600 peer-checked:bg-Marineblue"></div>
                        {/* <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span> */}
                    </label>

                    <p className={`font-semibold ${monthly ? ' text-Coolgray ' : ' text-Marineblue '} text-lg lg:text-base`}>Yearly</p>
                </div>
            </div>

        </div >
    )
}

export default Step2