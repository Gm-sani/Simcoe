import React from 'react'
import Teampic from "./Team.svg"
export default function Team() {
  return (
    <div className='bg-gray-200 h-screen py-4 '>
      <div className='bg-blue-600 flex gap-12 pb-8 pt-5'>
        <div>
            <p className='pt-16 text-[3rem] font-sans font-bold text-white pl-32'>Join Our Team</p>
            <p className='pt-1.5 text-[1.5rem] font-sans font-bold text-white pl-24 tracking-wide'>We are hiring for multiple postions.</p>
            <div className='px-3 py-1 bg-slate-800 text-white w-fit m-auto rounded-md mt-2 text-xs hover:bg-slate-200 hover:text-black cursor-pointer'>VIEW HERE</div>
        </div>
        <div>
            <img src={Teampic} alt="" className='h-[20rem] w-30'/>
        </div>
      </div>
    </div>
  )
}
