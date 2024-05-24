import Image from 'next/image'
import React from 'react'
import MidTask from './midTask'

const Task = () => {
  return (
    <div className="task -mt-32 shadow-red-500 ring-1 shadow-sm ring-red-600 w-5/6 h-72 bg-white rounded-xl flex flex-col justify-center mx-auto z-20  ">
      <div className="topTask w-full h-32 flex flex-row justify-start items-center mt-2 lg:ml-24">
        <div className="Frame66 w-96 h-28 pl-48 px-4  left-200 top-100 absolute justify-center items-center gap-10 inline-flex">
          <div className="Flight Frame62 pl-2 pr-4 py-1 bg-white hover:bg-red-500 rounded-xl ring-2 ring-red-500 border-red-500  justify-start items-center flex">
            <div className="Frame61 self-stretch justify-center items-center inline-flex">
              <div className="TravelingTakeOff w-9 h-9 px-0.5 py-2 justify-center items-center flex">
                <Image alt="" src="/icon/takeOf.svg" width={50} height={50} />
              </div>
              <div className="Hotel text-center text-black text-2xl font-bold font-['Dana_Variable']">
                Flight
              </div>
            </div>
          </div>

          <div className="Tour Frame63 pl-3 pr-4 py-1 bg-white hover:bg-red-500 rounded-xl border border-red-500 justify-start items-center flex">
            <div className="Frame58 self-stretch justify-center items-center gap-0.5 inline-flex">
              <div className="TravelingLuggage1 w-10 h-9 px-2.5 pt-1 pb-0.5 justify-center items-center flex">
                <div className="Luggage1 relative">
                  <Image
                    alt=""
                    src="/icon/luggage1.png"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
              <div className="Tour text-center text-black text-2xl font-bold font-['Dana_Variable']">
                Tour
              </div>
            </div>
          </div>

          <div className="Hotels Frame64 px-2 py-0.5 bg-white hover:bg-red-500 rounded-xl border border-red-500 justify-center items-center flex">
            <div className="Frame59 self-stretch pt-0.5 justify-center items-center inline-flex">
              <div className="TravelingHotel w-9 h-9 px-2 py-0.5 justify-center items-center flex">
                <div className="Hotel w-4 h-5 relative">
                  <Image
                    className="w-48 h-auto"
                    alt=""
                    src="/icon/hotel.png"
                    width={0}
                    height={0}
                  />
                </div>
              </div>
              <div className="Hotels text-center text-black text-2xl font-bold font-['Dana_Variable']">
                Hotels
              </div>
            </div>
          </div>

          <div className="Visa Frame65 px-4 py-1 bg-white hover:bg-red-500 rounded-xl border border-red-500 justify-center items-center flex">
            <div className="Frame60 self-stretch justify-center items-center gap-1.5 inline-flex">
              <div className="ImmigrationVisa w-9 h-9 px-0.5 pt-2 pb-1.5 justify-center items-center flex">
                <div className="Visa w-5 h-6 relative">
                  <Image
                    className=""
                    alt=""
                    src="/icon/visa.png"
                    width={90}
                    height={90}
                  />
                </div>
              </div>
              <div className="Visa text-center text-black text-2xl font-bold font-['Dana_Variable']">
                Visa
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <MidTask />

      <div className="downTask w-full h-32 flex flex-row justify-center items-center mb-2">
        <div className="Frame37 w-96 h-24  left-230 top-920 absolute justify-center items-center gap-1.5 inline-flex">
          <div className="Frame79 w-52 h-12 px-9 py-3.5 bg-white rounded border border-red-500 justify-center items-center gap-0.5 flex">
            <div className="From text-center">
              <span className="text-black text-2xl font-bold font-['Dana_Variable']">
                From
              </span>
              <span className="text-black text-2xl font-light font-['Dana_Variable']">
                :
              </span>
             
            </div>
            <div className="Place text-center text-black text-xl font-['Dana_Variable']">
              place
            </div>
          </div>
          <Image
              className="Union w-9 h-9 mx-0 px-0"
                  src="/icon/loop.svg"
                  alt=""
                  width={50}
              height={50}
            />
          
          <div className="Frame80 w-52 h-12 px-10 py-3.5 bg-white rounded border border-red-500 justify-center items-center gap-px flex">
            <div className="To text-center">
              <span className="text-black text-2xl font-bold font-['Dana_Variable']">
                To
              </span>
              <span className="text-black text-2xl font-light font-['Dana_Variable']">
                :
              </span>
            </div>
            <div className="Place text-center text-black text-xl font-['Dana_Variable']">
              place
            </div>
          </div>
          <div className="Frame77 w-52 h-12 px-2.5 py-3 bg-white rounded border border-red-500 justify-center items-center gap-2 flex">
            <div className="Departure text-center text-black text-base font-bold font-['Dana_Variable']">
              Departure
            </div>
            <div className="152024 text-center text-black text-base font-light font-['Dana_Variable']">
              05/15/2024
            </div>
            <div className="TravelingCalendar w-6 h-6 px-0.5 pt-1 pb-0.5 justify-center items-center flex">
              <div className="Calendar w-4 h-4 relative"></div>
            </div>
          </div>
          <div className="Frame79 px-4 py-3  bg-white rounded border border-red-500 justify-center items-center gap-4 flex">
            <div className="Return text-center text-black text-base font-bold font-['Dana_Variable']">
              Return
            </div>
            <div className="212024 text-center text-black text-base font-light font-['Dana_Variable']">
              05/21/2024
            </div>
            <div className="Calendar w-4 h-4 relative"></div>
          </div>
          <div className="Frame81 w-52 h-12 px-14 bg-red-500 rounded-md justify-center items-center gap-2.5 flex">
            <div className="Frame80 p-2.5 justify-center items-center gap-2.5 flex">
              <div className="Search text-center text-zinc-100 text-3xl font-extrabold font-['Dana_Variable']">
                Search
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Task
