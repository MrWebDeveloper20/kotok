import React from 'react'
import Image from 'next/image'

const Banner = (props) => {
  return (
    <div className="relative ImageTitr bg-clip-border w-full h-fit justify-center items-center flex flex-col">
      <Image
        className="Rectangle7541 z-0 relative w-screen h-auto mt-auto "
        src={props.img}
        alt=""
        width={1500}
        height={700}
        priority={true}
      />
      
    </div>
  )
}

export default Banner
