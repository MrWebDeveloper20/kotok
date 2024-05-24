import Image from 'next/image'
import React from 'react'

const PopularFlightCard = (props) => {
  return (
    <div className=" w-[380px] mx-[10px]  h-[550px] flex flex-col bg-white">
      <div className="top relative w-[380px] flex flex-col">
        <Image
          className="w-[380px] absolute top-0"
          alt=""
          src={props.img}
          width={500}
          height={200}
        />
        <div className="w-[142.22px] h-[31.09px] left-[220px] top-[20.80px] absolute text-center text-white text-2xl vazir font-medium font-['Dana_Variable'] leading-relaxed">
          بلیط هواپیما
        </div>
        <div className="w-[187.01px] flex justify-center items-center p-3 h-[45px] left-[170px] top-[60.04px] absolute text-center text-white text-3xl vazir font-medium font-['Dana_Variable'] leading-relaxed">
          {props.from} به
        </div>
      </div>

      <div className="but h-96 absolute top-[295px] flex flex-col justify-center items-center bg-white w-[370px]">
        <div className="w-[360px] h-[46.10px] shadow-lg rounded-lg shadow-gray-200 top-[2px] absolute flex flex-row justify-between">
          <div className="w-1/3 flex justify-end h-[25px] right-3 top-[9.65px] absolute text-right text-neutral-500 text-2xl font-bold font-['Dana_Variable'] leading-relaxed tracking-wide">
            {props.to1}
          </div>
          <div className="w-2/3">
            <div className="w-[68.15px] h-[18.22px] left-[18.59px] top-[7.50px] absolute text-right text-red-500 text-base font-normal font-['Dana2_Variable'] leading-relaxed tracking-tight">
              {props.p1}
            </div>

            <div className="w-[97.06px] h-[22.51px] left-[107.39px] top-[-0px] absolute text-center text-neutral-500 text-base font-medium font-['Dana_Variable'] leading-relaxed">
              شروع قیمت از
            </div>
            <div className="w-[38.20px] h-[22.51px] left-[22.72px] top-[21.44px] absolute text-center text-neutral-500 text-base font-medium font-['Dana_Variable'] leading-relaxed">
              تومان
            </div>
          </div>
        </div>

        <div className="w-[360px] h-[46.10px] shadow-lg rounded-lg shadow-gray-200 top-[62px] absolute flex flex-row justify-between">
          <div className="w-1/3 flex justify-end h-[25px] right-3 top-[9.65px] absolute text-center text-neutral-500 text-2xl font-bold font-['Dana_Variable'] leading-relaxed tracking-wide">
            {props.to2}
          </div>

          <div className="w-2/3">
            <div className="w-[68.15px] h-[18.22px] left-[18.59px] top-[7.50px] absolute text-right text-red-500 text-base font-normal font-['Dana2_Variable'] leading-relaxed tracking-tight">
              {props.p2}
            </div>

            <div className="w-[97.06px] h-[22.51px] left-[107.39px] top-[-0px] absolute text-center text-neutral-500 text-base font-medium font-['Dana_Variable'] leading-relaxed">
              شروع قیمت از
            </div>
            <div className="w-[38.20px] h-[22.51px] left-[22.72px] top-[21.44px] absolute text-center text-neutral-500 text-base font-medium font-['Dana_Variable'] leading-relaxed">
              تومان
            </div>
          </div>
        </div>

        <div className="w-[360px] h-[46.10px]  shadow-lg rounded-lg shadow-gray-200 top-[124px] absolute flex flex-row justify-between">
          <div className="w-1/3 flex justify-end h-[25px] right-3  top-[9.65px] absolute text-center text-neutral-500 text-2xl font-bold font-['Dana_Variable'] leading-relaxed tracking-wide">
            {props.to3}
          </div>

          <div className="w-2/3">
            <div className="w-[68.15px] h-[18.22px] left-[18.59px] top-[7.50px] absolute text-right text-red-500 text-base font-normal font-['Dana2_Variable'] leading-relaxed tracking-tight">
              {props.p3}
            </div>

            <div className="w-[97.06px] h-[22.51px] left-[107.39px] top-[-0px] absolute text-center text-neutral-500 text-base font-medium font-['Dana_Variable'] leading-relaxed">
              شروع قیمت از
            </div>
            <div className="w-[38.20px] h-[22.51px] left-[22.72px] top-[21.44px] absolute text-center text-neutral-500 text-base font-medium font-['Dana_Variable'] leading-relaxed">
              تومان
            </div>
          </div>
        </div>

        <div className="w-[360px] h-[46.10px]  shadow-lg rounded-lg shadow-gray-200 top-[186px] absolute flex flex-row justify-between">
          <div className="w-1/3 flex justify-end h-[25px] top-[9.65px] right-3 absolute text-neutral-500 text-2xl font-bold font-['Dana_Variable'] leading-relaxed tracking-wide">
            {props.to4}
          </div>

          <div className="w-2/3">
            <div className="w-[68.15px] h-[18.22px] left-[18.59px] top-[7.50px] absolute text-right text-red-500 text-base font-normal font-['Dana2_Variable'] leading-relaxed tracking-tight">
              {props.p4}
            </div>

            <div className="w-[97.06px] h-[22.51px] left-[107.39px] top-0 absolute text-center text-neutral-500 text-base font-medium font-['Dana_Variable'] leading-relaxed">
              شروع قیمت از
            </div>
            <div className="w-[38.20px] h-[22.51px] left-[22.72px] top-[21.44px] absolute text-center text-neutral-500 text-base font-medium font-['Dana_Variable'] leading-relaxed">
              تومان
            </div>
          </div>
        </div>

        <div className="w-[360px] h-[46.10px]  shadow-lg rounded-lg shadow-gray-200 top-[248px] absolute flex flex-row justify-between">
          <div className="w-1/3 flex justify-end h-[27.87px] right-3 top-[9.65px] absolute text-center text-neutral-500 text-2xl font-bold font-['Dana_Variable'] leading-relaxed tracking-wide">
            {props.to5}
          </div>

          <div className='w-2/3'>
            <div className="w-[80px] h-[25px] left-[18.59px] top-[7.50px] absolute text-right text-red-500 text-base font-normal font-['Dana2_Variable'] leading-relaxed tracking-tight">
              {props.p5}
            </div>
            
            <div className="w-[97.06px] h-[22.51px] left-[107.39px] top-[-0px] absolute text-center text-neutral-500 text-base font-medium font-['Dana_Variable'] leading-relaxed">
              شروع قیمت از
            </div>
            <div className="w-[38.20px] h-[22.51px] left-[22.72px] top-[21.44px] absolute text-center text-neutral-500 text-base font-medium font-['Dana_Variable'] leading-relaxed">
              تومان
            </div>
          </div>
        </div>

        <div className="w-[360px] h-[46.10px]  shadow-lg rounded-lg shadow-gray-200 top-[310px] absolute flex flex-row justify-between">
          <div className="w-1/3 flex justify-end h-[25px] right-3 top-[9.65px] absolute text-center text-neutral-500 text-2xl font-bold font-['Dana_Variable'] leading-relaxed tracking-wide">
            {props.to6}
          </div>

          <div className='w-2/3'>
            <div className="w-[68.15px] h-[18.22px] left-[18.59px] top-[7.50px] absolute text-right text-red-500 text-base font-normal font-['Dana2_Variable'] leading-relaxed tracking-tight">
              {props.p6}
            </div>
            
            <div className="w-[97.06px] h-[22.51px] left-[107.39px] top-[-0px] absolute text-center text-neutral-500 text-base font-medium font-['Dana_Variable'] leading-relaxed">
              شروع قیمت از
            </div>
            <div className="w-[38.20px] h-[22.51px] left-[22.72px] top-[21.44px] absolute text-center text-neutral-500 text-base font-medium font-['Dana_Variable'] leading-relaxed">
              تومان
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopularFlightCard
