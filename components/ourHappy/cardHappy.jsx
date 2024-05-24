import React from 'react'
import Image from 'next/image'

const CardHappy = (props) => {
  return (
    <div className="Group90 w-72 h-96  top-[82px] ">
      <div className="Rectangle785 w-72 h-96 left-0 top-[54px] absolute bg-white rounded-3xl" />
      <div className="Group33 w-24 h-4 left-[21px] top-[147px] absolute"></div>
      
      <div className="Group89 flex flex-row w-28 h-28 left-[84px] top-0 absolute">
        <Image
          alt=""
          width={500}
          height={100}
          className="Ellipse2615 w-24 h-24 left-0 top-0 absolute rounded-full border-8 border-black border-opacity-0"
          src={props.imgHappy}
        />
      </div>

      <div className="Group88 flex flex-row w-40 h-8 left-[12px] top-[145px] absolute">
        <Image
          alt=""
          width={500}
          height={100}
          className="Image1 w-5 h-5 left-[8.52px] top-[5.45px] absolute origin-top-left rotate-[9.67deg] border-black border-opacity-10"
          src={props.imgHappy2}
        />
        <Image
          alt=""
          width={500}
          height={100}
          className="Image1 w-5 h-5 left-[28.52px] top-[5.45px] absolute origin-top-left rotate-[9.67deg] border-black border-opacity-10"
          src={props.imgHappy2}
        />
        <Image
          alt=""
          width={500}
          height={100}
          className="Image1 w-5 h-5 left-[48.52px] top-[5.45px] absolute origin-top-left rotate-[9.67deg] border-black border-opacity-10"
          src={props.imgHappy2}
        />
        <Image
          alt=""
          width={500}
          height={100}
          className="Image1 w-5 h-5 left-[68.52px] top-[5.45px] absolute origin-top-left rotate-[9.67deg] border-black border-opacity-10"
          src={props.imgHappy2}
        />
        <Image
          alt=""
          width={500}
          height={100}
          className="Image1 w-5 h-5 left-[88.52px] top-[5.45px] absolute origin-top-left rotate-[9.67deg] border-black border-opacity-10"
          src={props.imgHappy2}
        />
      </div>

      <div className="Excelent w-20 h-4 left-[25px] top-[123px] absolute text-center text-black text-base font-extralight font-['Inter'] leading-relaxed">
        {props.type}
      </div>
      
      <div className="LoremIpsumDolorSitAmetConsectetuerAdipiscingElitSedDiamNonummyNibhEuismodTinciduntUtLaoreetDoloreMagnaAliquamEratVolutpatUtWisiEnimAdMinimVeniamQuisNostrudExerciTationUllamcorperSuscipitLobortisNisl w-56 h-40 left-[28px] top-[253px] absolute text-center text-black text-base font-thin font-['Inter'] lowercase leading-tight">
        {props.desc}{' '}
      </div>
      <div className="Traveler w-20 h-6 left-[98px] top-[216px] absolute text-center text-black text-lg font-extralight font-['Inter'] leading-relaxed">
        {props.job}
      </div>
      <div className="Dec2024 w-32 h-6 left-[138px] top-[138px] absolute text-center text-black text-base font-extralight font-['Inter'] leading-none">
        {props.date}
      </div>
      <div className="MohammadrezaGolzar w-48 h-8 left-[39px] top-[185px] absolute text-center text-black text-base font-semibold font-['Inter'] leading-relaxed">
        {props.name}
      </div>
    </div>
  )
}

export default CardHappy
