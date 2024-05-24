import React from 'react'
import Image from 'next/image'

const TravelHack = () => {
  return (
    <div className="w-full h-80 flex flex-row justify-between">
      <div>
        <Image
          alt=""
          src={'/images/travelHack1.png'}
          width={500}
          height={200}
        />
      </div>
      <div>
        <Image
          alt=""
          src={'/images/travelHack2.png'}
          width={500}
          height={100}
        />
      </div>
      <div>
        <Image
          alt=""
          src={'/images/travelHack3.png'}
          width={500}
          height={100}
        />
      </div>
    </div>
  )
}

export default TravelHack
