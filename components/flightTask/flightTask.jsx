'use client'
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import MidTask from '@/components/task/midTask'
import { DateObject } from 'react-multi-date-picker'
// import persian from 'react-date-object/calendars/persian'
import persian_fa from 'react-date-object/locales/persian_fa'
import 'react-multi-date-picker/styles/backgrounds/bg-dark.css'
import DatePicker from 'react-multi-date-picker'

const FlightTask = () => {
  const [value, setValue] = useState(new Date())
  function handleChange(value) {
    //تغییرات روی تاریخ رو اینجا اعمال کنید
    if (value instanceof DateObject) value = value.toDate()
    setValue(value)
  }

  const [date, setDate] = useState()
  const handleDate = (event) => {
    console.log(event.target.ariaLabel)
    console.log(event)
    setDate((date) => event.target.value)
  }

  return (
    <div className="w-full -mt-[490px] h-68 relative">
      <div className="pb-16 absolute flex flex-col rounded-xl left-[150px] top-[120px] task w-5/6 h-80 justify-around bg-white">
        <div className="top w-full  h-24 bg-white flex flex-row">
          <MidTask />
        </div>

        <div className="but w-full h-24 bg-white flex flex-row justify-around items-center">
          <div className="from w-60 ">
            <div className="flex-col justify-start items-start inline-flex">
              <div className="px-2 flex-col justify-start items-start gap-2 flex">
                <div className="px-2 py-1 bg-white rounded-lg justify-start items-start gap-2 inline-flex">
                  <div className="text-neutral-600 text-sm font-normal font-['Inter'] leading-none">
                    From
                  </div>
                </div>
              </div>
              <div className="h-[66px] px-2 pt-2.5 pb-3 rounded-lg border border-neutral-200 flex-col justify-start items-start flex">
                <div className=" justify-start items-center gap-3 inline-flex">
                  <Image
                    src={'/icon/takeOf.svg'}
                    alt=""
                    width={34}
                    height={34}
                  />

                  <input
                    className="ml-2 placeholder:text-gray-500 bg-red-400 rounded-lg p-1 text-black vazir w-[150px]"
                    type="text"
                    name="from"
                    id="from"
                    placeholder="From ..."
                  />
                </div>
                <div className=" rounded-[32px] justify-start items-start gap-2 inline-flex">
                  <div className="w-[257px] text-neutral-400 text-sm font-normal font-['Inter'] lowercase leading-tight">
                    IMAM KHOMEINI INTERNATIONAL AIRPORT
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="arrow lg:-mx-2">
            <div className="arrow w-10 h-10 p-2 mt-5 bg-sky-300 rounded-[40px] border border-cyan-400 justify-start items-start gap-2 inline-flex">
              <div className="  relative rotate-90">
                <Image
                  src={'/icon/ArrowsDownUp.svg'}
                  alt=""
                  width={35}
                  height={35}
                />
              </div>
            </div>
          </div>

          <div className="to w-60 lg:-ml-9">
            <div className="flex-col justify-start items-start inline-flex">
              <div className="px-2 flex-col justify-start items-start gap-2 flex">
                <div className="px-2 py-1 bg-white rounded-lg justify-start items-start gap-2 inline-flex">
                  <div className="text-neutral-600 text-sm font-normal font-['Inter'] leading-none">
                    To
                  </div>
                </div>
              </div>
              <div className="h-[66px] px-2 pt-2.5 pb-3 rounded-lg border border-neutral-200 flex-col justify-start items-start flex">
                <div className=" justify-start items-center gap-3 inline-flex">
                  <Image
                    src={'/icon/landing.svg'}
                    alt=""
                    width={34}
                    height={34}
                  />

                  <input
                    className="ml-2 placeholder:text-gray-500 bg-red-400 rounded-lg p-1 text-black vazir w-[150px]"
                    type="text"
                    name="from"
                    id="from"
                    placeholder="To ..."
                  />
                </div>
                <div className=" rounded-[32px] justify-start items-start gap-2 inline-flex">
                  <div className="w-[257px] text-neutral-400 text-sm font-normal font-['Inter'] lowercase leading-tight">
                    Kempegowda International Airport
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="date w-60">
            <div className=" justify-start items-start gap-4 inline-flex">
              <div className="w-[304px] flex-col justify-start items-start inline-flex">
                <div className="px-2 flex-col justify-start items-start gap-2 flex">
                  <div className="px-2 py-1 bg-white rounded-lg justify-start items-start gap-2 inline-flex">
                    <div className="text-neutral-600 text-sm font-light font-['Inter'] leading-none">
                      Departure
                    </div>
                  </div>
                </div>
                <div className="w-[220px] h-[66px] px-2 py-[23px] rounded-lg border border-neutral-200 flex-col justify-center items-center flex">
                  <div className="flex justify-center items-center pl-2 mx-1.5  gap-1.5 ">
                    {/* <div className="w-5 h-5 relative" /> */}
                    <DatePicker
                      onChange={() => handleDate(event)}
                      className="bg-dark"
                      // locale={persian_fa}
                      // calendar={english}
                      range={true}
                      rangeHover={true}
                      dateSeparator="  -->  "
                      placeholder="Any Time"
                      monthYearSeparator="||"
                      hideOnScroll
                      numberOfMonths={2}
                      style={{
                        backgroundColor: 'white',
                        display: 'flex',
                        justifyContent:'center',
                        height: '40px',
                        border: 'none',
                        fontSize: '13px',
                        padding: '31px 18px',
                        width: '210px',
                        direction: 'ltr',
                        fontFamily: 'vazir',
                      }}
                    />
                    
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="search w-48 lg:mt-7">
            <div className=" rounded-[5px] justify-start items-start gap-2 inline-flex">
              <div className=" px-[43px] py-[8px] bg-red-500 rounded-[5px] justify-center items-center flex">
                <div className="text-center text-white text-[32px] font-semibold font-['Inter'] leading-normal">
                  search
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlightTask
