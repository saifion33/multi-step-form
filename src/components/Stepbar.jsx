import React from 'react'
import { useSelector } from 'react-redux'

const Stepbar = () => {
    const currentStep = useSelector((state) => state.step.value)
    return (
        <div className='stepbar bg-[url(/images/bg-sidebar-mobile.svg)]  lg:bg-[url(/images/bg-sidebar-desktop.svg)] bg-no-repeat  pt-14 pb-20  lg:pt-10 lg:h-[500px] lg:bg-cover lg:rounded-t-lg lg:rounded-b-lg w-full bg-cover lg:w-[27%] lg:min-w-[200px]'>
            <div className="step-container flex lg:flex-col justify-center items-center space-x-4 lg:space-x-0 lg:space-y-4 lg:pl-5">
                <div className='lg:flex lg:space-x-3 lg:w-full'>
                    <div className={`step lg:text-xl  border-2 border-Lightblue rounded-full w-9 lg:w-11 h-9 lg:h-11 flex items-center justify-center ${currentStep === 1 ? 'bg-Lightblue text-Marineblue ' : ' text-Lightblue '}`}>
                        <h1 className=''>1</h1>
                    </div>
                    <div className='hidden lg:block'>
                        <p className='text-Pastelblue'>STEP 1</p>
                        <h1 className='text-Magnolia'>YOUR INFO</h1>
                    </div>
                </div>
                <div className='lg:flex lg:space-x-3 lg:w-full'>
                    <div className={`step lg:text-xl  border-2 border-Lightblue rounded-full w-9 lg:w-11 h-9 lg:h-11 flex items-center justify-center ${currentStep == 2 ? 'bg-Lightblue text-Marineblue ' : ' text-Lightblue '}`}>
                        <h1 className=''>2</h1>
                    </div>
                    <div className='hidden lg:block'>
                        <p className='text-Pastelblue'>STEP 2</p>
                        <h1 className='text-Magnolia'>SELECT PLAN</h1>
                    </div>
                </div>
                <div className='lg:flex lg:space-x-3 lg:w-full'>
                    <div className={`step lg:text-xl  border-2 border-Lightblue rounded-full w-9 lg:w-11 h-9 lg:h-11 flex items-center justify-center ${currentStep == 3 ? 'bg-Lightblue text-Marineblue ' : ' text-Lightblue '}`}>
                        <h1 className=''>3</h1>
                    </div>
                    <div className='hidden lg:block'>
                        <p className='text-Pastelblue'>STEP 3</p>
                        <h1 className='text-Magnolia'>ADD-ONS</h1>
                    </div>
                </div>
                <div className='lg:flex lg:space-x-3 lg:w-full'>
                    <div className={`step lg:text-xl border-2 border-Lightblue rounded-full w-9 lg:w-11 h-9 lg:h-11 flex items-center justify-center ${currentStep == 4 ? 'bg-Lightblue text-Marineblue ' : ' text-Lightblue '}`}>
                        <h1 className=''>4</h1>
                    </div>
                    <div className='hidden lg:block'>
                        <p className='text-Pastelblue'>STEP 4</p>
                        <h1 className='text-Magnolia'>SUMMARY</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stepbar