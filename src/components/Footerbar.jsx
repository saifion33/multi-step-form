import React from 'react'

const Footerbar = () => {
    const stepNo = 3;
    return (
        <div className={`footerbar bg-white w-full fixed lg:static bottom-0 left-0 p-3 lg:pb-0 lg:mt-auto lg:px-12 flex ${stepNo === 1 ? ' justify-end ' : 'justify-between'}  items-center`}>
            <button className={stepNo === 1 ? 'hidden ' : 'block'}>Go Back</button>
            <button className='bg-Marineblue text-white p-2 rounded-md   '>Next Step</button>
        </div>
    )
}

export default Footerbar