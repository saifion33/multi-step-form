import React from 'react'
import thankYouIcon from '/images/icon-thank-you.svg'

const ThankYou = () => {
    return (
        <div className='step5 bg-white flex flex-col justify-center items-center rounded-md absolute lg:static  top-[-13%] lg:top-0 p-4 m-4 lg:m-0'>
            <div className='p-5'>
                <img className='mx-auto' src={thankYouIcon} alt="thanks icon" />
                <h1 className='mt-8 text-2xl text-Marineblue font-extrabold '>Thank you!</h1>
            </div>
            <div>
                <p className='text-Coolgray font-medium px-2 lg:px-16 pb-5 text-center'>
                    Thanks for confirming your subscription!
                    We hope you have fun using our platform. If you ever need support, please feel free to email us at
                    support@loremgaming.com.
                </p>
            </div>
        </div>
    )
}

export default ThankYou