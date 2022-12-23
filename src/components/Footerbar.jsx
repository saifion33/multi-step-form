import React from 'react'

const Footerbar = () => {
    const stepNo = 4;
    return (
        <div className={`footerbar bg-white w-full fixed lg:static bottom-0 left-0 p-3 lg:pb-0 lg:mt-auto lg:px-12 flex ${stepNo === 1 ? ' justify-end ' : 'justify-between'}  items-center`}>
            <button className={stepNo === 1 ? 'hidden ' : 'block'}>Go Back</button>
            <button className={` text-white p-2 rounded-md ${stepNo == 4 ? 'bg-Purplishblue ' : 'bg-Marineblue'}`}>{stepNo < 4 ? 'Next Step' : 'Confirm'}</button>
        </div>
    )
}

export default Footerbar