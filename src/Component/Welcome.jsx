import React from 'react'
import Vid_1 from "./vid_1.mp4"
export default function Welcome() {
  return (
    <div className="flex justify-center items-center h-screen ">
            <video className="max-w-full" controls loop>
                <source src={Vid_1} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
  )
}
