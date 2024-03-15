import React from 'react'

export default function Whoweare() {
  return (
    <div className='bg-gray-200 h-screen pt-32 flex justify-center gap-5 m-auto'>
      <div>
        <div className='flex gap-3'>
        <p className='font-sans font-bold text-[3rem] text-blue-600'>Who</p> 
        <p className='font-sans font-bold text-[3rem] '>We are</p> 
        </div>
        <p className='font-sans text-slate-700 text-md w-[17rem] mt-5'>Simcoe IT is an IT solutions provider company with strong business interest in competitive solutions for enterprise software development, mobile application development, website development and graphic designing</p>
       <p className='mt-7 px-3 py-2 font-sans text-white bg-blue-600 rounded-md w-fit text-xs'>GET IN TOUCH</p>
      </div>
      <div>
        {/* ----------------------------------------------Box part------------------------------ */}
        <div className='flex gap-6'>
            {/* ----------------------------------1st row----------------------------------------- */}
           {/* -------------------------------box 1----------------------------------------------- */}
           <div className='px-7 py-3 bg-white rounded-md text-center shadow-md shadow-gray-400'>
                {/* ----------------------------1st logo----------------------------------------- */}
            <div className="flex justify-center items-center">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="60"
            height="60"
            viewBox="0 0 48 48"
            style={{ enableBackground: 'new 0 0 512 512' }}
            xmlSpace="preserve"
            className=""
        >
            <g>
                <g data-name="Shipping product">
                    <path
                        d="m47.6 25.2-1-.75a5 5 0 0 0-6.8.74L32 34.35A5 5 0 0 0 27 30c-5.39 0-4.58.08-5-.19a10.75 10.75 0 0 0-12 .05V29a3 3 0 0 0-3-3H3a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3 8 8 0 0 0 3.83 1h16a9 9 0 0 0 7.43-3.92l10.57-15.52a1 1 0 0 0-.23-1.36zM8 45a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V29a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1zm27.56-4a7 7 0 0 1-5.78 3H13.83A5.76 5.76 0 0 1 10 42.56V32.43a8.74 8.74 0 0 1 10.9-1c1.1.75.1.57 6.1.57a3 3 0 0 1 3 3v1H20a1 1 0 0 0 0 2c11.8 0 11.27.17 11.73-.31 0 .1 2-2.32 9.59-11.19a3 3 0 0 1 4.31-.27z"
                        fill="#0088cc"
                        opacity="1"
                        data-original="#000000"
                        className=""
                    />
                    <path
                        d="M13 24h22a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H13a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3zM36 3v18a1 1 0 0 1-1 1H18V2h5v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V2h4a1 1 0 0 1 1 1zm-7-1v4h-4V2zM12 3a1 1 0 0 1 1-1h3v20h-3a1 1 0 0 1-1-1z"
                        fill="#0088cc"
                        opacity="1"
                        data-original="#000000"
                        className=""
                    />
                    <path
                        d="M23 18h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2z"
                        fill="#0088cc"
                        opacity="1"
                        data-original="#000000"
                        className=""
                    />
                </g>
            </g>
        </svg>
            </div>
                {/* ----------------------------------------------------------- */}
                
                <p className='font-bold text-2xl pt-2'>16+</p>
                <p className=' text-slate-800 text-[1rem] font-sans pt-1'>Years Experience</p>
            </div>
            {/* -----------------------------------------end box 1----------------------------------- */}
             {/* -------------------------------box 2----------------------------------------------- */}
             <div className='px-7 py-3 bg-white rounded-md text-center shadow-md shadow-gray-400'>
                {/* ----------------------------2nd logo----------------------------------------- */}
            <div className="flex justify-center items-center">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="60"
            height="60"
            viewBox="0 0 48 48"
            style={{ enableBackground: 'new 0 0 512 512' }}
            xmlSpace="preserve"
            className=""
        >
            <g>
                <g data-name="Shipping product">
                    <path
                        d="m47.6 25.2-1-.75a5 5 0 0 0-6.8.74L32 34.35A5 5 0 0 0 27 30c-5.39 0-4.58.08-5-.19a10.75 10.75 0 0 0-12 .05V29a3 3 0 0 0-3-3H3a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3 8 8 0 0 0 3.83 1h16a9 9 0 0 0 7.43-3.92l10.57-15.52a1 1 0 0 0-.23-1.36zM8 45a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V29a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1zm27.56-4a7 7 0 0 1-5.78 3H13.83A5.76 5.76 0 0 1 10 42.56V32.43a8.74 8.74 0 0 1 10.9-1c1.1.75.1.57 6.1.57a3 3 0 0 1 3 3v1H20a1 1 0 0 0 0 2c11.8 0 11.27.17 11.73-.31 0 .1 2-2.32 9.59-11.19a3 3 0 0 1 4.31-.27z"
                        fill="#0088cc"
                        opacity="1"
                        data-original="#000000"
                        className=""
                    />
                    <path
                        d="M13 24h22a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H13a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3zM36 3v18a1 1 0 0 1-1 1H18V2h5v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V2h4a1 1 0 0 1 1 1zm-7-1v4h-4V2zM12 3a1 1 0 0 1 1-1h3v20h-3a1 1 0 0 1-1-1z"
                        fill="#0088cc"
                        opacity="1"
                        data-original="#000000"
                        className=""
                    />
                    <path
                        d="M23 18h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2z"
                        fill="#0088cc"
                        opacity="1"
                        data-original="#000000"
                        className=""
                    />
                </g>
            </g>
        </svg>
            </div>
                {/* ----------------------------------------------------------- */}
                
                <p className='font-bold text-2xl pt-2'>100+</p>
                <p className=' text-slate-800 text-[1rem] font-sans pt-1'>Projects Delivered</p>
            </div>
            {/* -----------------------------------------end box 2----------------------------------- */}
             {/* -------------------------------box 3----------------------------------------------- */}
             <div className='px-7 py-3 bg-white rounded-md text-center shadow-md shadow-gray-400'>
                {/* ----------------------------3rd logo----------------------------------------- */}
            <div className="flex justify-center items-center">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="60"
            height="60"
            viewBox="0 0 48 48"
            style={{ enableBackground: 'new 0 0 512 512' }}
            xmlSpace="preserve"
            className=""
        >
            <g>
                <g data-name="Shipping product">
                    <path
                        d="m47.6 25.2-1-.75a5 5 0 0 0-6.8.74L32 34.35A5 5 0 0 0 27 30c-5.39 0-4.58.08-5-.19a10.75 10.75 0 0 0-12 .05V29a3 3 0 0 0-3-3H3a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3 8 8 0 0 0 3.83 1h16a9 9 0 0 0 7.43-3.92l10.57-15.52a1 1 0 0 0-.23-1.36zM8 45a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V29a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1zm27.56-4a7 7 0 0 1-5.78 3H13.83A5.76 5.76 0 0 1 10 42.56V32.43a8.74 8.74 0 0 1 10.9-1c1.1.75.1.57 6.1.57a3 3 0 0 1 3 3v1H20a1 1 0 0 0 0 2c11.8 0 11.27.17 11.73-.31 0 .1 2-2.32 9.59-11.19a3 3 0 0 1 4.31-.27z"
                        fill="#0088cc"
                        opacity="1"
                        data-original="#000000"
                        className=""
                    />
                    <path
                        d="M13 24h22a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H13a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3zM36 3v18a1 1 0 0 1-1 1H18V2h5v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V2h4a1 1 0 0 1 1 1zm-7-1v4h-4V2zM12 3a1 1 0 0 1 1-1h3v20h-3a1 1 0 0 1-1-1z"
                        fill="#0088cc"
                        opacity="1"
                        data-original="#000000"
                        className=""
                    />
                    <path
                        d="M23 18h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2z"
                        fill="#0088cc"
                        opacity="1"
                        data-original="#000000"
                        className=""
                    />
                </g>
            </g>
        </svg>
            </div>
                {/* ----------------------------------------------------------- */}
                
                <p className='font-bold text-2xl pt-2'>30+</p>
                <p className=' text-slate-800 text-[1rem] font-sans pt-1'>Technologies</p>
            </div>
            {/* -----------------------------------------end box 3----------------------------------- */}
        </div>

        {/* ----------------------------------------2nd row--------------------------------------- */}
        <div className='flex gap-6 mt-8'>
           {/* ------------------------------2nd -box 1----------------------------------------------- */}
           <div className='px-7 py-3 bg-white rounded-md text-center shadow-md shadow-gray-400'>
                {/* ----------------------------1st logo----------------------------------------- */}
            <div className="flex justify-center items-center">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="60"
            height="60"
            viewBox="0 0 48 48"
            style={{ enableBackground: 'new 0 0 512 512' }}
            xmlSpace="preserve"
            className=""
        >
            <g>
                <g data-name="Shipping product">
                    <path
                        d="m47.6 25.2-1-.75a5 5 0 0 0-6.8.74L32 34.35A5 5 0 0 0 27 30c-5.39 0-4.58.08-5-.19a10.75 10.75 0 0 0-12 .05V29a3 3 0 0 0-3-3H3a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3 8 8 0 0 0 3.83 1h16a9 9 0 0 0 7.43-3.92l10.57-15.52a1 1 0 0 0-.23-1.36zM8 45a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V29a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1zm27.56-4a7 7 0 0 1-5.78 3H13.83A5.76 5.76 0 0 1 10 42.56V32.43a8.74 8.74 0 0 1 10.9-1c1.1.75.1.57 6.1.57a3 3 0 0 1 3 3v1H20a1 1 0 0 0 0 2c11.8 0 11.27.17 11.73-.31 0 .1 2-2.32 9.59-11.19a3 3 0 0 1 4.31-.27z"
                        fill="#0088cc"
                        opacity="1"
                        data-original="#000000"
                        className=""
                    />
                    <path
                        d="M13 24h22a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H13a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3zM36 3v18a1 1 0 0 1-1 1H18V2h5v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V2h4a1 1 0 0 1 1 1zm-7-1v4h-4V2zM12 3a1 1 0 0 1 1-1h3v20h-3a1 1 0 0 1-1-1z"
                        fill="#0088cc"
                        opacity="1"
                        data-original="#000000"
                        className=""
                    />
                    <path
                        d="M23 18h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2z"
                        fill="#0088cc"
                        opacity="1"
                        data-original="#000000"
                        className=""
                    />
                </g>
            </g>
        </svg>
            </div>
                {/* ----------------------------------------------------------- */}
                
                <p className='font-bold text-2xl pt-2'>50+</p>
                <p className=' text-slate-800 text-[1rem] font-sans pt-1 tracking-widest'>Happy Clients</p>
            </div>
            {/* -----------------------------------------end box 1----------------------------------- */}
             {/* ----------------------------2nd ---box 2----------------------------------------------- */}
             <div className='px-[1.87rem] py-3 bg-white rounded-md text-center shadow-md shadow-gray-400'>
                {/* ----------------------------2nd logo----------------------------------------- */}
            <div className="flex justify-center items-center">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="60"
            height="60"
            viewBox="0 0 48 48"
            style={{ enableBackground: 'new 0 0 512 512' }}
            xmlSpace="preserve"
            className=""
        >
            <g>
                <g data-name="Shipping product">
                    <path
                        d="m47.6 25.2-1-.75a5 5 0 0 0-6.8.74L32 34.35A5 5 0 0 0 27 30c-5.39 0-4.58.08-5-.19a10.75 10.75 0 0 0-12 .05V29a3 3 0 0 0-3-3H3a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3 8 8 0 0 0 3.83 1h16a9 9 0 0 0 7.43-3.92l10.57-15.52a1 1 0 0 0-.23-1.36zM8 45a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V29a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1zm27.56-4a7 7 0 0 1-5.78 3H13.83A5.76 5.76 0 0 1 10 42.56V32.43a8.74 8.74 0 0 1 10.9-1c1.1.75.1.57 6.1.57a3 3 0 0 1 3 3v1H20a1 1 0 0 0 0 2c11.8 0 11.27.17 11.73-.31 0 .1 2-2.32 9.59-11.19a3 3 0 0 1 4.31-.27z"
                        fill="#0088cc"
                        opacity="1"
                        data-original="#000000"
                        className=""
                    />
                    <path
                        d="M13 24h22a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H13a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3zM36 3v18a1 1 0 0 1-1 1H18V2h5v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V2h4a1 1 0 0 1 1 1zm-7-1v4h-4V2zM12 3a1 1 0 0 1 1-1h3v20h-3a1 1 0 0 1-1-1z"
                        fill="#0088cc"
                        opacity="1"
                        data-original="#000000"
                        className=""
                    />
                    <path
                        d="M23 18h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2z"
                        fill="#0088cc"
                        opacity="1"
                        data-original="#000000"
                        className=""
                    />
                </g>
            </g>
        </svg>
            </div>
                {/* ----------------------------------------------------------- */}
                
                <p className='font-bold text-2xl pt-2'>2</p>
                <p className=' text-slate-800 text-[1rem] font-sans pt-1 tracking-widest'>Global Offices</p>
            </div>
            {/* -----------------------------------------end box 2----------------------------------- */}
             {/* ----------------------------2nd ---box 3----------------------------------------------- */}
             <div className='px-[1.90rem] py-3 bg-white rounded-md text-center shadow-md shadow-gray-400'>
                {/* ----------------------------3rd logo----------------------------------------- */}
            <div className="flex justify-center items-center">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="60"
            height="60"
            viewBox="0 0 48 48"
            style={{ enableBackground: 'new 0 0 512 512' }}
            xmlSpace="preserve"
            className=""
        >
            <g>
                <g data-name="Shipping product">
                    <path
                        d="m47.6 25.2-1-.75a5 5 0 0 0-6.8.74L32 34.35A5 5 0 0 0 27 30c-5.39 0-4.58.08-5-.19a10.75 10.75 0 0 0-12 .05V29a3 3 0 0 0-3-3H3a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3 8 8 0 0 0 3.83 1h16a9 9 0 0 0 7.43-3.92l10.57-15.52a1 1 0 0 0-.23-1.36zM8 45a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V29a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1zm27.56-4a7 7 0 0 1-5.78 3H13.83A5.76 5.76 0 0 1 10 42.56V32.43a8.74 8.74 0 0 1 10.9-1c1.1.75.1.57 6.1.57a3 3 0 0 1 3 3v1H20a1 1 0 0 0 0 2c11.8 0 11.27.17 11.73-.31 0 .1 2-2.32 9.59-11.19a3 3 0 0 1 4.31-.27z"
                        fill="#0088cc"
                        opacity="1"
                        data-original="#000000"
                        className=""
                    />
                    <path
                        d="M13 24h22a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H13a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3zM36 3v18a1 1 0 0 1-1 1H18V2h5v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V2h4a1 1 0 0 1 1 1zm-7-1v4h-4V2zM12 3a1 1 0 0 1 1-1h3v20h-3a1 1 0 0 1-1-1z"
                        fill="#0088cc"
                        opacity="1"
                        data-original="#000000"
                        className=""
                    />
                    <path
                        d="M23 18h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2z"
                        fill="#0088cc"
                        opacity="1"
                        data-original="#000000"
                        className=""
                    />
                </g>
            </g>
        </svg>
            </div>
                {/* ----------------------------------------------------------- */}
                
                <p className='font-bold text-2xl pt-2'>7+</p>
                <p className=' text-slate-800 text-[1rem] font-sans pt-1 tracking-widest'>Industries</p>
            </div>
            {/* -----------------------------------------end box 3----------------------------------- */}

        </div>
        {/* --------------------------------------------------end 2nd row--------------------------- */}
      </div>
    </div>
  )
}
