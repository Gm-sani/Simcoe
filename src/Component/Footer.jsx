import React from 'react'
import GolfCourseIcon from '@mui/icons-material/GolfCourse';
import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare';
import LaptopIcon from '@mui/icons-material/Laptop';
import LanguageIcon from '@mui/icons-material/Language';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import ApartmentIcon from '@mui/icons-material/Apartment';
import PsychologyIcon from '@mui/icons-material/Psychology';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { useNavigate } from 'react-router-dom';
import {
    Routes,
    Route
  } from "react-router-dom";
export default function Footer() {
    const navigate =useNavigate();
  return (
    <>
    <div className='bg-blue-600 text-white py-12'> 
      <div className='flex justify-center gap-5'>
        <div>
            <div className='flex gap-2'>
            <GolfCourseIcon className=' text-white mt-2 cursor-pointer'/>
            <p className='text-white font-sans font-bold text-2xl pt-0 cursor-pointer'>what we do</p>
            </div> 
            <div className='flex gap-2'>
            <PsychologyIcon className=' text-white mt-2 hover:text-slate-700 cursor-pointer'/>
            <p className='text-white font-sans font-bold text-sm pt-3 hover:text-slate-700 cursor-pointer'>Artificial Intelligence Enabled Systems</p>
            </div> 
            <div className='flex gap-2'>
            <LaptopIcon className=' text-white mt-2 hover:text-slate-700 cursor-pointer'/>
            <p className='text-white font-sans font-bold text-sm pt-3 hover:text-slate-700 cursor-pointer'>Software Development</p>
            </div> 
            <div className='flex gap-2'>
            <LanguageIcon className=' text-white mt-2 hover:text-slate-700 cursor-pointer'/>
            <p className='text-white font-sans font-bold text-sm pt-3 hover:text-slate-700 cursor-pointer'>Website Development</p>
            </div> 
            <div className='flex gap-2'>
            <MobileScreenShareIcon className=' text-white mt-2 hover:text-slate-700 cursor-pointer'/>
            <p className='text-white font-sans font-bold text-sm pt-3 hover:text-slate-700 cursor-pointer'>Mobile App Development</p>
            </div> 
        </div>
        {/* -----------------------------------------2nd ----------------------------------- */}
        <div>
            <div className='flex gap-2'>
            <ApartmentIcon className=' text-white mt-2 cursor-pointer'/>
            <p className='text-white font-sans font-bold text-2xl pt-0 cursor-pointer'>Asia Office</p>
            </div> 
            <div className='flex gap-2'>
            <AddLocationIcon className=' text-white mt-5 hover:text-slate-700 cursor-pointer'/>
            <p className='text-white font-sans font-bold text-sm pt-3 tracking-tighter w-[15rem] cursor-pointer hover:text-slate-700'>Plaza # 39-C, 2nd Floor, Phase 1, Etihad Town, Raiwind Road, Lahore, Pakistan</p>
            </div> 
            <div className='flex gap-2'>
            <LocalPhoneIcon className=' text-white mt-2 hover:text-slate-700 cursor-pointer'/>
            <p className='text-white font-sans font-bold text-sm pt-3 hover:text-slate-700 cursor-pointer'> Phone:+92 336 529 7921</p>
            </div> 
            <div className='flex gap-2'>
            <WhatsAppIcon className=' text-white mt-2 hover:text-slate-700 cursor-pointer'/>
            <p className='text-white font-sans font-bold text-sm pt-3 hover:text-slate-700 cursor-pointer'>Whatsapp:+92 332 451 0286</p>
            </div> 
            <div className='flex gap-2'>
            <EmailIcon className=' text-white mt-2 hover:text-slate-700 cursor-pointer'/>
            <p className='text-white font-sans font-bold text-sm pt-3 hover:text-slate-700 cursor-pointer'> Email: info@SimcoeIT.com</p>
            </div> 
        </div>
        {/* -----------------------------------------3rd---------------------------------------- */}
        <div>
            <div className='flex gap-2'>
            <ApartmentIcon className=' text-white mt-2 cursor-pointer'/>
            <p className='text-white font-sans font-bold text-2xl pt-0 cursor-pointer'>Canada Office</p>
            </div> 
            <div className='flex gap-2'>
            <AddLocationIcon className=' text-white mt-5 hover:text-slate-700 cursor-pointer'/>
            <p className='text-white font-sans font-bold text-sm pt-3 cursor-pointer tracking-tighter w-[15rem] hover:text-slate-700'>13-11 Cardico Drive, Stouffville, Ontario, Canada L4A 2G5</p>
            </div> 
            <div className='flex gap-2'>
            <LocalPhoneIcon className=' text-white mt-2 hover:text-slate-700 cursor-pointer'/>
            <p className='text-white font-sans font-bold text-sm pt-3 hover:text-slate-700 cursor-pointer'>Phone:+1 (905) 235 7822</p>
            </div> 
            <div className='flex gap-2'>
            <WhatsAppIcon className=' text-white mt-2 hover:text-slate-700 cursor-pointer'/>
            <p className='text-white font-sans font-bold text-sm pt-3 hover:text-slate-700 cursor-pointer'>Whatsapp:+1 (905) 235 7822</p>
            </div> 
            <div className='flex gap-2'>
            <EmailIcon className=' text-white mt-2 hover:text-slate-700 cursor-pointer'/>
            <p className='text-white font-sans font-bold text-sm pt-3 hover:text-slate-700 cursor-pointer'>Email: info@SimcoeIT.com</p>
            </div> 
        </div>
        {/* ------------------------------------end----------------------------------------- */}
      </div>
      <div>

      </div>
    </div>
    <div className='bg-blue-950 flex justify-between px-28 py-6'>
        <div className='flex gap-5'>
        <FacebookIcon className='text-white rounded-full bg-blue-600 p-1'/>
        <LinkedInIcon className='text-white rounded-full bg-blue-600 p-1'/>
        <YouTubeIcon className='text-white rounded-full bg-blue-600 p-1'/>
        <WhatsAppIcon className='text-white rounded-full bg-blue-600 p-1'/>
        </div>

        <div className='text-white text-xs cursor-pointer'>
        <a href="https://gmsportfolio.netlify.app/" target="_blank" rel="noopener noreferrer">Copyright @ 2024 by GMS. All Rights Reserved.</a>
        </div>

        <div>
        <ArrowDropUpIcon className='text-white rounded-full bg-blue-600 p-1'/>
        </div>
        
    </div>
    </>
  )
}
