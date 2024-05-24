import React from 'react'
import Image from 'next/image'

const WhyTravelCard = (props) => {
  return (
    <div className="Group84 w-40 h-60 flex flex-col items-center justify-center pt-24 ">
        <Image alt='' width={100} height={100} 
          className="Ellipse2615 w-24 h-24 rounded-full"
          src={props.imgWhy}
        />
        <div className="Frame109 w-72 h-36 p-2.5   bg-white bg-opacity-0 justify-center items-center gap-2.5 inline-flex">
          <div className="WeAreAWomenRun w-80 h-28 text-center text-black text-xl font-light font-['Inter'] capitalize leading-loose tracking-tight">
            {props.desc}
          </div>
        </div>
      </div>
  )
}

export default WhyTravelCard
