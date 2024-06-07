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
                <h1 className='font-bold text-sm px-32 pr-0'>List your show </h1>,
                <h2>Got a show, event, activity or a great experince? partner with us & get listed on </h2>,
                <p className='font-bold text-sm'>BookMyShow</p>
                <button className='bg-red-400 h-10 w-32 rounded-sm mx-60'>{seema("contact today")}</button>
            </div>
            <div className='h-28 bg-slate-400 flex gap-28'>
                <div className='h-full w-56 mx-40 mr-0 flex flex-col justify-center items-center '><RiCustomerService2Fill  className="h-14 w-16"/> <p className=' '>24/7 Customer care service</p></div>
                <div className='h-full w-64 flex flex-col justify-center items-center'><FaMoneyBillWave  className="h-14 w-14"/><p className='text-sm '>RESEND BOOKING CONFIRMATION</p></div>
                <div className='h-full w-56 flex flex-col justify-center items-center'><MdUnsubscribe  className="h-14 w-14"/><p className='text-sm '>SUBSCRIBE TO THE NEWSLETER</p></div>
            </div>
        </div>
    </div>
  )
}
