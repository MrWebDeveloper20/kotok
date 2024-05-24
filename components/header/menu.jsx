'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import TopHeader from './topHeader'

const Menu = () => {
  return (
    <div className='flex flex-col w-full'>
      <TopHeader />
      <div className="w-full h-[111px] bg-neutral-50 justify-around items-center gap-[15px] inline-flex">
        <div className="h-[93px] justify-center items-center gap-2.5 flex">
          <div className="justify-center items-center gap-2.5 flex">
            <div className="text-center">
              <span className="text-indigo-700 text-[64px] font-medium font-['Dana_Variable']">
                KOO
              </span>
              <span className="text-red-500 text-[64px] font-medium font-['Dana_Variable']">
                T
              </span>
              <span className="text-indigo-700 text-[64px] font-medium font-['Dana_Variable']">
                OOK
              </span>
            </div>
          </div>
        </div>
        <Link href={'/'}><div className="w-[75.47px] h-[31px] p-2.5 justify-center items-center gap-2.5 flex">
          <div className="text-center p-2 hover:bg-red-500 hover:text-white hover:text-3xl rounded-xl text-zinc-900 text-2xl font-light font-['Dana_Variable']">
            Home
          </div>
        </div></Link>
        <Link href={'/flight'}><div className="w-[72.41px] h-[31px] p-2.5 justify-center items-center gap-2.5 flex">
          <div className="text-center">
            <span className="text-zinc-900 p-2 hover:bg-red-500 hover:text-white hover:text-3xl rounded-xl text-2xl font-light font-['Dana_Variable']">
              Flight
            </span>
          </div>
        </div></Link>
        <div className="w-[70.37px] h-[31px] p-2.5 justify-center items-center gap-2.5 flex">
          <div className="text-center p-2 hover:bg-red-500 hover:text-white hover:text-3xl rounded-xl text-zinc-900 text-2xl font-light font-['Dana_Variable']">
            Hotel
          </div>
        </div>
        <div className="w-[94.84px] h-[31px] p-2.5 justify-center items-center gap-2.5 flex">
          <div className="text-center p-2 hover:bg-red-500 hover:text-white hover:text-3xl rounded-xl text-zinc-900 text-2xl font-light font-['Dana_Variable']">
            Transfer
          </div>
        </div>
        <div className="w-[78.53px] h-[31px] p-2.5 justify-center items-center gap-2.5 flex">
          <div className="text-center p-2 hover:bg-red-500 hover:text-white hover:text-3xl rounded-xl text-zinc-900 text-2xl font-light font-['Dana_Variable']">
            Hostel
          </div>
        </div>
        <div className="w-[61.19px] h-[31px] p-2.5 justify-center items-center gap-2.5 flex">
          <div className="text-center p-2 hover:bg-red-500 hover:text-white hover:text-3xl rounded-xl text-zinc-900 text-2xl font-light font-['Dana_Variable']">
            Tour
          </div>
        </div>
        <div className="w-[54.05px] h-[31px] p-2.5 justify-center items-center gap-2.5 flex">
          <div className="text-center p-2 hover:bg-red-500 hover:text-white hover:text-3xl rounded-xl text-zinc-900 text-2xl font-light font-['Dana_Variable']">
            Car
          </div>
        </div>
        <div className="w-[57.11px] h-[31px] p-2.5 justify-center items-center gap-2.5 flex">
          <div className="text-center p-2 hover:bg-red-500 hover:text-white hover:text-3xl rounded-xl text-zinc-900 text-2xl font-light font-['Dana_Variable']">
            Bus
          </div>
        </div>
        <div className="w-[82.61px] h-[31px] p-2.5 justify-center items-center gap-2.5 flex">
          <div className="text-center p-2 hover:bg-red-500 hover:text-white hover:text-3xl rounded-xl text-zinc-900 text-2xl font-light font-['Dana_Variable']">
            Activity
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
