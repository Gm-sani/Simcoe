import React from 'react'
import { Box2,Box3,Box4,Box5 } from './Box';
import {
    Routes,
    Route
  } from "react-router-dom";
  import { useNavigate } from 'react-router-dom';
  import Reaclogo from "./Reactjs2.webp"
  import Typescript from "./Typescript2.png"
  import Nextjs from "./nextjs-icon.svg"
  import Materialui from "./material-ui-1.svg"
  import Tailwind from "./Tailwind2.png"
  import Html from "./Html.svg"
  import Css from "./CSS3.svg"
  import Bootstrap from "./Bootstrap.png"
  import Javascript from "./javascript.png"
  import Python from "./Python.png"
  import Django from "./Django.png"
  import Rest from "./Rest.png"
  import Php from "./PHP.png"
  import Andriod from "./Andriod.png"
  import Flutter from "./Flutter.png"
  import Apple from "./Apple.png"
  import Sql from "./Sql.svg"
  import PostgreSql from "./PostgreSql.svg"
  import Amazon from "./Amazon.svg"
  import Amazon2 from "./Amazon2.svg"
  import Jekins from "./Jekins.svg"
  import Codepipeline from "./Codepipeline2.svg"
  import Cloudformation from "./cloud-formation3.svg"
export default function Technologies() {
    const navigate =useNavigate();
  return (
    <div className='bg-gray-200 h-screen pt-4 '>
        <div className='flex gap-3 justify-center'>
        <p className='font-sans font-bold text-[3rem] text-blue-600'>Technologies </p> 
        <p className='font-sans font-bold text-[3rem] '>We Use</p> 
        </div>
        {/* -------------------------------------Button----------------------------------- */}
        <div className='flex gap-3  justify-center pt-4'>
            <div onClick={()=>{navigate("/")}} className='px-3 py-2 rounded-md font-sans w-fit text-sm border border-green-600 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white cursor-pointer'>Web</div>
            <div onClick={()=>{navigate("Mobile")}} className='px-3 py-2 rounded-md font-sans w-fit text-sm border border-green-600 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white cursor-pointer'>Mobile</div>
            <div onClick={()=>{navigate("Database")}} className='px-3 py-2 rounded-md font-sans w-fit text-sm border border-green-600 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white cursor-pointer'>Databases</div>
            <div onClick={()=>{navigate("Devops")}} className='px-3 py-2 rounded-md font-sans w-fit text-sm border border-green-600 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white cursor-pointer'>DevOps</div>
            <div onClick={()=>{navigate("Cloud")}} className='px-3 py-2 rounded-md font-sans w-fit text-sm border border-green-600 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white cursor-pointer'>Cloud</div>
        </div>
        {/* ----------------------------------------Box 2----------------------------------------------------- */}
        <Routes>
        <Route path='/' element={<Box2 Reaclogo={Reaclogo} Typescript={Typescript} Nextjs={Nextjs} Materialui={Materialui}  Tailwind={Tailwind}  Html={Html}  Css={Css} Bootstrap={Bootstrap} Javascript={Javascript} Python={Python} Django={Django}  Rest={Rest} Php={Php} />}/>
        <Route path='Mobile' element={<Box3 Andriod={Andriod} Flutter={Flutter} Apple={Apple}/>}/>
        <Route path='Database' element={<Box4 Sql={Sql} PostgreSql={PostgreSql} Amazon={Amazon}  Amazon2={Amazon2}/>}/>
        <Route path='Devops' element={<Box5 Jekins={Jekins} Codepipeline={Codepipeline} Cloudformation={Cloudformation} />}/>
        </Routes>
        

    </div>
  )
}
