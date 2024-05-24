import React from 'react'
import Image from 'next/image'

const MidTask = () => {
  return (
    <div className="midTask w-full h-32 flex flex-row justify-start items-center">
      <div className="Frame85 w-96 h-28 pl-60 left-320 top-310 absolute justify-center items-center gap-8 inline-flex">
        <div className="Frame68 w-40 h-20 px-5 py-2.5 bg-white bg-opacity-0 rounded border border-red-500 border-opacity-0 justify-center items-center gap-2.5 flex">
          <select
            className="Return p-2 hover:ring-2 rounded-xl ring-red-500 text-center text-red text-2xl font-bold font-['Dana_Variable']"
            name="way"
            id="way"
            defaultValue={'Return'}
          >
            <option value="Return">Return</option>
            <option value="Oneway">Oneway</option>
          </select>
        </div>
        <div className="Frame70 w-44 h-20 pl-2 pr-3.5 py-2.5 bg-white bg-opacity-0 rounded border border-red-500 border-opacity-0 justify-center items-center gap-2.5 flex">
          <select
            className="Return p-2 hover:ring-2 rounded-xl ring-red-500 text-center text-red text-2xl font-bold font-['Dana_Variable']"
            name="flightType"
            id="flightType"
            defaultValue={'Economy'}
          >
            <option value="Economy">Economy</option>
            <option value="/Business">Business</option>
            <option value="Oneway">Oneway</option>
          </select>
        </div>

        <div className="Frame72 w-24 h-24 pl-px pr-2.5 py-2.5 bg-white bg-opacity-0 rounded border border-red-500 border-opacity-0 justify-center items-center gap-2.5 flex">
          <Image
            className="Union w-24 h-16"
            src="/icon/passengers.svg"
            alt=""
            width={100}
            height={70}
          />
          <div className=" text-center text-black text-2xl font-bold font-['Dana_Variable']">
            1
          </div>
        </div>
        <div className="Frame74 w-24 h-20 px-4 py-2.5 bg-white bg-opacity-0 rounded border border-red-500 border-opacity-0 justify-center items-center gap-2.5 flex">
          <div className="UsersUser10 w-9 h-9 px-1 py-1 bg-white bg-opacity-0 justify-center items-center flex">
            <div className="User3 w-7 h-7 relative">
              <Image
                className="Union w-12 h-7"
                src="/icon/passenger.svg"
                alt=""
                width={80}
                height={50}
              />
            </div>
          </div>
          <div className=" text-center text-black text-2xl font-bold font-['Dana_Variable']">
            1
          </div>
        </div>
      </div>
    </div>
  )
}

export default MidTask
