import React from 'react'

export const Footer = () => {
  return (
    <div>
        <div className='h-48 w-full bg-gray-800'>
            <div className='h-16 w-full flex justify-center items-center text-white'>
                <h1 className='font-bold text-sm'>List your show </h1>,
                <h2>Got a show, event, activity or a great experince? partner with us & get listed on </h2>,
                <p className='font-bold text-sm'>BookMyShow</p>
                <button className='bg-red-400 h-10 w-32 rounded-sm mx-60'>Contact today</button>
            </div>
            <div className='h-28 bg-slate-600 flex justify-center items-center gap-56'>
                <div className='h-20 w-28 bg-slate-300'></div>
                <div className='h-10 w-10 bg-slate-300'></div>
                <div className='h-10 w-10 bg-slate-300'></div>
            </div>
        </div>
    </div>
  )
}
