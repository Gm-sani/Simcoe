import React from 'react'
import Testgif from "./Testgif2.gif"
export default function Whywork() {
  return (
    <div className='bg-gray-200 h-screen'>
      <div className='flex gap-3 justify-center'>
      <p className='text-[2.5rem] text-blue-600 font-extrabold '>Why Work</p>
      <p className='text-[2.5rem]  font-extrabold '>At Simcoe IT</p>
      </div>
      <div className='ml-6 pt-8'>
        <img src={Testgif} alt="" className='w-[95%] rounded-xl' />
      </div>
      
    </div>
  )
}
