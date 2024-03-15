import React from 'react'
import Logo from "./logo.svg"
export default function Nav() {
  return (
    <div className='z-10 flex  gap-24 pt-2 absolute'>
     <div className='pl-16'>
        <img src={Logo} alt="" className='h-16'/>
     </div>
     <div className='flex gap-5 font-semibold text-sm pr-16 pt-5 pb-[0.8rem] hover:cursor-pointer text-white'>
        <p className='p-1 rounded-md hover:bg-blue-400'>SERVICES</p>
        <p className='p-1 rounded-md hover:bg-blue-400'>PORTFOLIO</p>
        <p className='p-1 rounded-md hover:bg-blue-400'>CLIENT</p>
        <p className='p-1 rounded-md hover:bg-blue-400'>ABOUT SIMCOE</p>
        <p className='p-1 rounded-md hover:bg-blue-400'>WORK AT SIMCOE</p>
        <p className='p-1 rounded-md hover:bg-blue-400'>CONTACT US</p>
     </div>
    </div>
  )
}
