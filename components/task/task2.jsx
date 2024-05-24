import Image from 'next/image'
import React from 'react'

const Task2 = () => {
  return (
    <div className="task flex mx-auto justify-center">
      <div className="ClickFlightTour w-full h-80 relative">
        <div className="Rectangle755 w-4/5 h-80 left-200 top-200 absolute bg-white rounded-2xl border border-red-300" />
        <div className="Frame66 w-96 h-28 px-4 py-5 left-200 top-200 absolute justify-center items-center gap-10 inline-flex">
          <div className="Frame62 pl-2 pr-4 py-1 bg-red-500 rounded justify-start items-center flex">
            <div className="Frame61 self-stretch justify-center items-center inline-flex">
              <div className="TravelingTakeOff w-9 h-9 px-0.5 py-2 justify-center items-center flex">
                <div className="TakeOff w-7 relative"></div>
              </div>
              <div className="Hotel text-center text-white text-2xl font-bold font-['Dana_Variable']">
                Flight
              </div>
            </div>
          </div>
          <div className="Frame63 pl-3 pr-4 py-1 bg-white rounded border border-red-500 justify-start items-center flex">
            <div className="Frame58 self-stretch justify-center items-center gap-0.5 inline-flex">
              <div className="TravelingLuggage1 w-9 h-9 px-2.5 pt-1 pb-0.5 justify-center items-center flex">
                <div className="Luggage1 w-3.5 h-7 relative">
                  <div className="Rectangle710 w-3.5 h-4 left-200 top-200 absolute rounded-sm border border-black" />
                </div>
              </div>
              <div className="Tour text-center text-black text-2xl font-bold font-['Dana_Variable']">
                Tour
              </div>
            </div>
          </div>
          <div className="Frame64 px-2 py-0.5 bg-white rounded border border-red-500 justify-center items-center flex">
            <div className="Frame59 self-stretch pt-0.5 justify-center items-center inline-flex">
              <div className="TravelingHotel w-9 h-9 px-2 py-0.5 justify-center items-center flex">
                <div className="Hotel w-4 h-7 relative">
                  <div className="Rectangle714 w-3.5 h-1 left-200 top-200 absolute border border-black" />
                </div>
              </div>
              <div className="Hotels text-center text-black text-2xl font-bold font-['Dana_Variable']">
                Hotels
              </div>
            </div>
          </div>
          <div className="Frame65 px-4 py-1 bg-white rounded border border-red-500 justify-center items-center flex">
            <div className="Frame60 self-stretch justify-center items-center gap-1.5 inline-flex">
              <div className="ImmigrationVisa w-9 h-9 px-0.5 pt-2 pb-1.5 justify-center items-center flex">
                <div className="Visa w-7 h-6 relative">
                  <div className="Ellipse260 w-1.5 h-1.5 left-200 top-200 absolute rounded-full border border-black" />
                </div>
              </div>
              <div className="Visa text-center text-black text-2xl font-bold font-['Dana_Variable']">
                Visa
              </div>
            </div>
          </div>
        </div>

        <div className="Frame85 w-96 h-28 left-220 top-310 absolute justify-center items-center gap-8 inline-flex">
          <div className="Frame68 w-40 h-20 px-5 py-2.5 bg-white bg-opacity-0 rounded border border-red-500 border-opacity-0 justify-center items-center gap-2.5 flex">
            <div className="Return text-center text-black text-2xl font-bold font-['Dana_Variable']">
              Return
            </div>
            <div className="ArrowsDownArrow2 w-9 h-9 justify-center items-center flex" />
          </div>
          <div className="Frame70 w-44 h-20 pl-2 pr-3.5 py-2.5 bg-white bg-opacity-0 rounded border border-red-500 border-opacity-0 justify-center items-center gap-2.5 flex">
            <div className="Economy text-center text-black text-2xl font-bold font-['Dana_Variable']">
              Economy
            </div>
            <div className="ArrowsDownArrow1 w-9 h-9 justify-center items-center flex" />
          </div>
          <div className="Frame72 w-20 h-20 pl-px pr-2.5 py-2.5 bg-white bg-opacity-0 rounded border border-red-500 border-opacity-0 justify-center items-center gap-2.5 flex">
            <img
              className="Union w-12 h-9"
              src="https://via.placeholder.com/52x36"
            />
            <div className=" text-center text-black text-2xl font-bold font-['Dana_Variable']">
              1
            </div>
          </div>
          <div className="Frame74 w-24 h-20 px-4 py-2.5 bg-white bg-opacity-0 rounded border border-red-500 border-opacity-0 justify-center items-center gap-2.5 flex">
            <div className="UsersUser10 w-9 h-9 px-1 py-1 bg-white bg-opacity-0 justify-center items-center flex">
              <div className="User3 w-7 h-7 relative">
                <div className="Ellipse328 w-3 h-3 left-200 top-200 absolute rounded-full shadow border border-black" />
              </div>
            </div>
            <div className=" text-center text-black text-2xl font-bold font-['Dana_Variable']">
              1
            </div>
          </div>
        </div>

        <div className="Frame37 w-96 h-24 left-230 top-920 absolute justify-center items-center gap-1.5 inline-flex">
          <div className="Frame79 w-52 h-12 px-9 py-3.5 bg-white rounded border border-red-500 justify-center items-center gap-0.5 flex">
            <div className="From text-center">
              <span className="text-black text-2xl font-bold font-['Dana_Variable']">
                From
              </span>
              <span className="text-black text-2xl font-light font-['Dana_Variable']">
                :
              </span>
              <span className="text-black text-base font-light font-['Dana_Variable']">
                {' '}
              </span>
            </div>
            <div className="Place text-center text-black text-xl font-['Dana_Variable']">
              place
            </div>
          </div>
          <div className="ArrowsLoop5 w-12 h-12 relative origin-top-left -rotate-90">
            <div className="Ellipse2020 w-9 h-9 left-[44px] top-[6px] absolute origin-top-left rotate-90 bg-zinc-300 rounded-full" />
            <div className="Loop5 w-6 h-4 left-213 top-216 absolute"></div>
          </div>
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
          <div className="Frame79 px-4 py-3.5 bg-white rounded border border-red-500 justify-center items-center gap-4 flex">
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

export default Task2
