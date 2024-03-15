import React from 'react'
import Cycle from "./industriescycle.gif"
export default function Industries() {
  return (
    <div className='bg-white h-screen pt-4 flex gap-0'>
      <div className='bg-blue-600 w-fit px-24 py-20'>
      <div className="flex justify-center items-center">
      <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="160"
      height="160"
      viewBox="0 0 64 64"
      className=""
    >
      <g>
        <path
          d="M61 10H38V6h9.18a3 3 0 1 0 0-2H37a1 1 0 0 0-1 1v5h-8V5a1 1 0 0 0-1-1H16.82a3 3 0 1 0 0 2H26v4H3a1 1 0 0 0-1 1v38a1 1 0 0 0 1 1h22v6H15a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h34a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H39v-6h22a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1ZM50 4a1 1 0 1 1-1 1 1 1 0 0 1 1-1ZM14 6a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm22 6v9.76l-.88.87-.12-.05V21a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1.58l-.12.05-.88-.87V12Zm1.28 15.15a5.8 5.8 0 0 1 .47 1.14 1 1 0 0 0 1 .71H40v2h-1.29a1 1 0 0 0-1 .71 5.8 5.8 0 0 1-.47 1.14 1 1 0 0 0 .21 1.15l.91.91L37 36.36l-1-.91a1 1 0 0 0-1.19-.17 5.8 5.8 0 0 1-1.14.47 1 1 0 0 0-.71 1V38H31v-1.29a1 1 0 0 0-.71-1 5.8 5.8 0 0 1-1.14-.47 1 1 0 0 0-1.19.17l-.91.91L25.64 35l.91-.91a1 1 0 0 0 .17-1.19 5.8 5.8 0 0 1-.47-1.14 1 1 0 0 0-1-.71H24V29h1.29a1 1 0 0 0 1-.71 5.8 5.8 0 0 1 .47-1.14 1 1 0 0 0-.21-1.15l-.91-.91 1.41-1.41.91.91a1 1 0 0 0 1.19.17 5.8 5.8 0 0 1 1.14-.47 1 1 0 0 0 .71-1V22h2v1.29a1 1 0 0 0 .71 1 5.8 5.8 0 0 1 1.14.47 1 1 0 0 0 1.15-.21l.91-.91 1.41 1.41-.91.91a1 1 0 0 0-.13 1.19ZM26 12v9.86l-2.49 2.48a1 1 0 0 0 0 1.42l1.12 1.12a.61.61 0 0 1-.05.12H23a1 1 0 0 0-1 1v1H11.82a3 3 0 1 0 0 2H22v1a1 1 0 0 0 1 1h1.58a.61.61 0 0 1 .05.12l-1.12 1.12a1 1 0 0 0-.29.71 1.05 1.05 0 0 0 .29.71l2.83 2.83a1 1 0 0 0 1.42 0l1.12-1.12.12.05V39a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1.58l.12-.05 1.12 1.12a1 1 0 0 0 1.42 0l2.83-2.83a1.05 1.05 0 0 0 .29-.71 1 1 0 0 0-.29-.71l-1.12-1.12a.61.61 0 0 1 .05-.12H41a1 1 0 0 0 1-1v-1h10.18a3 3 0 1 0 0-2H42v-1a1 1 0 0 0-1-1h-1.58a.61.61 0 0 1-.05-.12l1.12-1.12a1 1 0 0 0 0-1.42L38 21.86V12h22v32H4V12ZM10 30a1 1 0 1 1-1-1 1 1 0 0 1 1 1Zm44 0a1 1 0 1 1 1 1 1 1 0 0 1-1-1Zm-6 30H16v-2h32Zm-11-4H27v-6h10ZM4 48v-2h56v2Z"
          fill="#1a1547"
          opacity="1"
          className=""
        ></path>
        <path
          d="M32 26a4 4 0 1 0 4 4 4 4 0 0 0-4-4Zm0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2ZM7 16h5v8a1 1 0 0 0 1 1h6a1 1 0 0 0 0-2h-5v-8a1 1 0 0 0-1-1H7a1 1 0 0 0 0 2ZM57 14h-6a1 1 0 0 0-1 1v8h-5a1 1 0 0 0 0 2h6a1 1 0 0 0 1-1v-8h5a1 1 0 0 0 0-2Z"
          fill="#1a1547"
          opacity="1"
          className=""
        ></path>
      </g>
    </svg>
            </div>
            <p className='font-sans text-[2.5rem] font-bold text-white pt-4'>Industries</p>
            <p className='font-sans text-[2.5rem] font-bold text-white pt-1'>We Serve</p>
      </div>
      <div>
        <img src={Cycle} alt="" />
      </div>
    </div>
  )
}
