import React from 'react'
import Laptop from '../assets/laptop.jpg'

export const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold '>DATA ANALYTICS DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Managa Data Analytics Centrally</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                </p>
                <button className='bg-[black] w-[200px] rounded-md font-medium mx-auto md:mx-0 my-6 px-6 py-3 text-[#00df9a]'>Get Started</button>
            </div>
        </div>
    </div>
  )
}
