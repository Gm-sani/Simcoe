import React from 'react'
import AI from "./Ai.svg"
import data1 from './Data'

export default function Box(props) {
  return (
    <div>
      <div className='flex gap-10 pt-3'>
            {/* -------------------------------------Text-------------------------------------------- */}
            <div>
                <p className='font-sans text-[0.85rem] w-[27rem] tracking-wide '>
                {props.paragraph}
                </p>
                <ul className='list-disc pl-4 font-sans text-[0.85rem] pt-4'>
                    <li>{props.list0}</li>
                    <li>{props.list1}</li>
                    <li>{props.list2}</li>
                    <li>{props.list3}</li>
                    <li>{props.list4}</li>
                    <li>{props.list5}</li>
                    <li>{props.list6}</li>
                </ul>
            </div>
            {/* ------------------------------------Pics-------------------------------------------- */}
            <div>
                <img src={props.pic} alt="" />
            </div>
        </div>
    </div>
  )
}

export function Box2(props) {
  return (
    <div>
       <div className='pl-20 pt-5'>
            <p className='text-blue-600 text-[0.98rem] font-bold'>Frontend</p>
            <div className='flex gap-10 pt-4'>
                <div><img src={props.Reaclogo} alt="" className='h-16 w-20 bg-gray-200'/></div>
                <div><img src={props.Typescript} alt="" className='h-16 w-16 bg-gray-200'/></div>
                <div><img src={props.Nextjs} alt="" className='h-16 w-20 bg-gray-200'/></div>
                <div><img src={props.Materialui} alt="" className='h-16 w-20 bg-gray-200'/></div>
                <div><img src={props.Tailwind} alt="" className='h-16 w-20 bg-gray-200'/></div>
                <div><img src={props.Html} alt="" className='h-16 w-20 bg-gray-200'/></div>
                <div><img src={props.Css} alt="" className='h-16 w-20 bg-gray-200'/></div>
            </div>
            <div className='flex gap-10 pt-4'>
                <div><img src={props.Bootstrap} alt="" className='h-16 w-16 bg-gray-200'/></div>
                <div><img src={props.Javascript} alt="" className='h-16 w-16 bg-gray-200'/></div>
            </div>
            {/* ----------------------------Backend----------------------------------- */}
            <p className='text-blue-600 text-[0.98rem] font-bold pt-4'>Backend</p>
            <div className='flex gap-10 pt-4'>
                <div><img src={props.Python} alt="" className='h-16 w-16 bg-gray-200'/></div>
                <div><img src={props.Django} alt="" className='h-16 w-16 bg-gray-200'/></div>
                <div><img src={props.Rest} alt="" className='h-16 w-16 bg-gray-200'/></div>
                <div><img src={props.Php} alt="" className='h-16 w-20 bg-gray-200'/></div>
            </div>

        </div>
    </div>
  )
}

export function Box3(props) {
  return (
    <div className='pl-[25rem] pt-5'>
      <div className='flex gap-10 pt-4 '>
                <div><img src={props.Andriod} alt="" className='h-16 w-16 bg-gray-200'/></div>
                <div><img src={props.Flutter} alt="" className='h-16 w-16 bg-gray-200'/></div>
                <div><img src={props.Apple} alt="" className='h-16 w-16 bg-gray-200'/></div>
                
        </div>
    </div>
  )
}

// ---------------------------------------box4-------------------------------------
export function Box4(props) {
    return (
      <div className='pl-[22.5rem] pt-5'>
          <div className='flex gap-10 pt-4 '>
                  <div><img src={props.Sql} alt="" className='h-16 w-16 bg-gray-200'/></div>
                  <div><img src={props.PostgreSql} alt="" className='h-16 w-16 bg-gray-200'/></div>
                  <div><img src={props.Amazon} alt="" className='h-16 w-16 bg-gray-200'/></div>
                  <div><img src={props.Amazon2} alt="" className='h-16 w-16 bg-gray-200'/></div>
                  
          </div>
      </div>
    )
  }

  // ---------------------------------------box5-------------------------------------
export function Box5(props) {
    return (
      <div className='pl-[25.5rem] pt-5'>
          <div className='flex gap-10 pt-4 '>
                  <div><img src={props.Jekins} alt="" className='h-16 w-16 bg-gray-200'/></div>
                  <div><img src={props.Codepipeline} alt="" className='h-16 w-16 bg-gray-200'/></div>
                  <div><img src={props.Cloudformation} alt="" className='h-16 w-16 bg-gray-200'/></div>
                  
                  
          </div>
      </div>
    )
  }
