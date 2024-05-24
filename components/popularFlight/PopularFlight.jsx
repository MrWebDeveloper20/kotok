import React from 'react'
import PopularFlightCard from './popularFlightCard'

const PopularFlight = () => {
  return (
    <div className="w-full  mt-[350px] h-[562px] relative">
      <div className="w-[523px] h-[71px] top-12 mb-20 relative">
        <div className="w-[273px] h-[30px] left-32 top-0 absolute bg-white/opacity-0 justify-center items-center inline-flex">
          <div className="w-[273px] h-[30px] text-center text-red-500 text-3xl font-semibold font-['Inter'] leading-relaxed tracking-wide">
            Popular Flights
          </div>
        </div>
        <div className="w-[523px] h-11 left-[125px] top-[40px] absolute bg-white/opacity-0 justify-center items-center inline-flex">
          <div className="w-[523px] h-11 text-center text-black text-2xl font-light font-['Inter'] leading-relaxed tracking-wide">
            check these popular routes on kootook.com
          </div>
        </div>
      </div>

      <div className="w-full h-[532px] justify-around items-center gap-[34px] flex gap-x-5">
        <PopularFlightCard img='/images/mashhad.png' from='مشهد' to1='تهران' p1='1,600,000' to2='اصفهان' p2='1,650,000' to3='کیش' p3='1,500,000' to4='بندرعباس' p4='1,450,000' to5='تبریز' p5='1,680,000' to6='زاهدان' p6='1,8700,000'/>
        <PopularFlightCard img='/images/kish.png' from='کیش' to1='تهران' p1='1,600,000' to2='اصفهان' p2='1,650,000' to3='مشهد' p3='1,500,000' to4='بندرعباس' p4='1,450,000' to5='تبریز' p5='1,680,000' to6='زاهدان' p6='1,8700,000'/>
        <PopularFlightCard img='/images/tehran.png' from='تهران' to1='مشهد' p1='1,600,000' to2='اصفهان' p2='1,650,000' to3='کیش' p3='1,500,000' to4='بندرعباس' p4='1,450,000' to5='تبریز' p5='1,680,000' to6='زاهدان' p6='1,8700,000'/>
      </div>
    </div>
  )
}

export default PopularFlight
