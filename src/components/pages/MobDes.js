import React from 'react'

const MobDes = () => {
    return (
        <div className="sm:hidden block bg-[url('/assets/log-bg-mobile.jpg')] bg-cover bg-center h-screen w-screen">
            <div className='flex justify-between flex-col pt-5 pb-10 w-10/12 h-screen mb-11 m-auto'>
                <img src="https://i.ibb.co/sbK6xdC/logo.png" alt="logo" className='w-2/3' />
                <div className=''>
                    <h3 className='!text-white text-4xl mb-3'>Water delivery</h3>
                    <p className='!text-white'>We deliver water at any point of the Earth <br /> in 30 minutes</p>
                    <button className='w-full py-3 rounded-lg bg-white text-[20px] mt-9'>
                        <a href="#" className='!text-sky-600'>Log in</a>
                    </button>
                    <button className='w-full border py-3 rounded-lg mt-3'>
                        <a href="#" className='!text-white'>Sign up</a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MobDes