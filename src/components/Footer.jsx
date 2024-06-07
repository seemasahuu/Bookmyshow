import React from 'react'
import { capitalizeFirstWord as seema} from '../utils/helpers'
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaMoneyBillWave } from "react-icons/fa6";
import { MdUnsubscribe } from "react-icons/md";

export const Footer = () => {
  return (
    <div>
        <div className='h-56 w-full bg-gray-800'>
            <div className='h-24 w-full flex justify-center items-center text-white'>
                <h1 className='font-bold lg:text-sm text-xs px-32 pr-0 hidden lg;block'>List your show </h1>
                <h2 className='hidden lg:block'>Got a show, event, activity or a great experince? partner with us & get listed on </h2>
                <p className='font-bold text-sm mr-6 text-red-400 lg:text-white'>BookMyShow</p>
                <button className='bg-red-400 h-10 w-32  rounded-sm lg:mx-60'>{seema("contact today")}</button>
            </div>
            <div className='h-28 bg-slate-400 flex lg:gap-28'>
                <div className='h-full w-56 lg:mx-40 mr-0 flex flex-col justify-center items-center '><RiCustomerService2Fill  className="h-9 w-9 lg:h-14 lg:w-16 mr-3"/> <p className='text-xs px-3 lg:text-sm'>24/7 Customer care service</p></div>
                <div className='h-full w-64 flex flex-col justify-center items-center'><FaMoneyBillWave  className="h-9 w-9 lg:h-14 lg:w-14 mr-3"/><p className='text-xs lg:text-sm px-3'>RESEND BOOKING CONFIRMATION</p></div>
                <div className='h-full w-56 flex flex-col justify-center items-center'><MdUnsubscribe  className="h-9 w-9 lg:h-14 lg:w-14 mr-3"/><p className='text-xs lg:text-sm px-3 '>SUBSCRIBE TO THE NEWSLETER</p></div>
            </div>
        </div>
    </div>
  )
}
