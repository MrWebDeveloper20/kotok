import Image from 'next/image'
import React from 'react'

const OurServiceRight = (props) => {
  return (
    <div className="box flex flex-row px-5">
      <div className="rightLeft flex justify-center items-center w-2/5 h-28 bg-blue-100 rounded-l-lg">
        <Image src={props.img} alt='' width={60} height={60}/>
      </div>
      <div className="rightRight flex flex-col justify-around items-center w-3/5 h-28 bg-white rounded-r-lg">
        <h2 className='pt-3 text-xl mx-auto'>{props.title}</h2>
        <h2 className='pb-3 text-blue-600'>Learn More</h2>
      </div>
    </div>
  )
}

export default OurServiceRight
