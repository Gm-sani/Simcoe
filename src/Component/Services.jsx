import React from 'react'
import Ai from "./Ai.svg"
import Sd from "./software-development.svg"
import Web from "./Website-Development.svg"
import App from "./app-Development.svg"
import data1 from './Data'
import Box from './Box'
import {
    Routes,
    Route
  } from "react-router-dom";
  import { useNavigate } from 'react-router-dom';

export default function Services() {

    const navigate =useNavigate();
  return (
    

    <div className='bg-white h-screen pt-4 '>
        <div className='flex gap-3 justify-center'>
        <p className='font-sans font-bold text-[3rem] text-blue-600'>Our</p> 
        <p className='font-sans font-bold text-[3rem] '>Core System</p> 
        </div>

        {/* --------------------------Box--------------------------- */}
        <div className='p-3 rounded-md bg-green-100 w-fit m-auto  shadow-slate-400 shadow-md'>
        {/* ---------------------------------------button----------------------------------------- */}
        <div className='flex gap-3 border-b pb-3 border-slate-300 '>
            <div onClick={()=>{navigate("/")}} className='px-3 py-2 rounded-md font-sans w-fit text-sm border border-green-600 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white cursor-pointer'>Artificial intelligence Enabled system</div>
            <div onClick={()=>{navigate("Soft")}} className='px-3 py-2 rounded-md font-sans w-fit text-sm border border-green-600 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white cursor-pointer'>Software Development</div>
            <div onClick={()=>{navigate("Web")}} className='px-3 py-2 rounded-md font-sans w-fit text-sm border border-green-600 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white cursor-pointer'>Web Development</div>
            <div onClick={()=>{navigate("App")}} className='px-3 py-2 rounded-md font-sans w-fit text-sm border border-green-600 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white cursor-pointer'>Application Development</div>
        </div>
        {/* ------------------------------------------changed text & pics--------------------------------------------- */}
        <Routes>
        <Route path='/' element={<Box paragraph={data1[0].paragraph} list0={data1[0].list[0]} list1={data1[0].list[1]} list2={data1[0].list[2]} list3={data1[0].list[3]} list4={data1[0].list[4]} list5={data1[0].list[5]} list6={data1[0].list[6]} pic={Ai}/>}/>
        <Route path='Soft' element={<Box paragraph={data1[1].paragraph} list0={data1[1].list[0]} list1={data1[1].list[1]} list2={data1[1].list[2]} list3={data1[1].list[3]} list4={data1[1].list[4]} list5={data1[1].list[5]} list6={data1[1].list[6]} pic={Sd} />}/>
        <Route path='Web' element={<Box paragraph={data1[1].paragraph} list0={data1[1].list[0]} list1={data1[1].list[1]} list2={data1[1].list[2]} list3={data1[1].list[3]} list4={data1[1].list[4]} list5={data1[1].list[5]} list6={data1[1].list[6]} pic={Web} />}/>
        <Route path='App' element={<Box paragraph={data1[1].paragraph} list0={data1[1].list[0]} list1={data1[1].list[1]} list2={data1[1].list[2]} list3={data1[1].list[3]} list4={data1[1].list[4]} list5={data1[1].list[5]} list6={data1[1].list[6]} pic={App} />}/>
        </Routes>
        

        </div>
    </div>
  )
}
