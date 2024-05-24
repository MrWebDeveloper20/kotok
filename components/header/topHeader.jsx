import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const TopHeader = () => {
  return (
    <div className="w-full h-[54px] pl-[13px] pr-3 bg-neutral-200 justify-around items-center gap-[5px] inline-flex">
    <div className="w-[34px] h-[34px] relative flex-col justify-start items-start flex" />
    <div className="w-full h-[54px] relative">
        <div className="w-[248.45px] h-[54px] left-0 top-0 absolute justify-start items-center inline-flex">
        <Image className='mx-2' alt='' src={'/icon/phone.png'} width={34} height={34}/>
            <div className="w-[67px] h-5 text-center text-black text-sm font-light font-['Dana_Variable']">09210000000</div>
        </div>
        <div className="w-[425.15px] h-[54px] left-[150px] top-0 absolute justify-start items-center inline-flex">
            
            <Image className='mx-2' alt='' src={'/icon/email.png'} width={34} height={34}/>
            <div className="w-[79px] h-[22px] text-center text-black text-sm font-light font-['Dana_Variable']">Email: Email</div>
        </div>
        <div className="w-[278.63px] h-[54px] right-[150px] top-0 absolute justify-end items-center inline-flex">
            
            <Image className='mx-2' alt='' src={'/icon/shopping.png'} width={34} height={34}/>
            <div className="w-[45px] h-[22px] text-center text-black text-sm font-light font-['Dana_Variable']">Shopping</div>
        </div>
        <div className="w-[150.03px] h-[54px] right-[50px] top-0 absolute justify-end items-center inline-flex">
            
            <Image className='mx-2' alt='' src={'/icon/worldwide.png'} width={34} height={34}/>
            <div className="w-[15px] h-[22px] text-center text-black text-sm font-light font-['Dana_Variable']">EN</div>
        </div>
    </div>
</div>
  )
}

export default TopHeader
