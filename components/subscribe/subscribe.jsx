import React from 'react'
import Image from 'next/image'

const Subscribe = () => {
  return (
    <div className="Frame110 mt-64 w-5/6 h-56 mx-auto py-6 bg-slate-100 rounded justify-start items-center inline-flex">
      <div className="Group94 w-1/2 h-44 relative">
        <div className="Group69 w-32 h-16 left-[900px] top-[60px] absolute">
          <div className="Rectangle379 w-full h-16 left-0 top-0 absolute bg-red-500 rounded-lg shadow border border-stone-300" />
          <div className="Subscribe w-28 h-6 left-[8.95px] top-[16.50px] absolute text-center text-white text-xl font-normal font-['Lato']">
            Subscribe
          </div>
        </div>
        <div className="Group68 w-52 h-16 left-[650px] top-[60px] absolute">
          <div className="Rectangle379 w-52 h-16 left-0 top-0 absolute bg-white rounded-lg border border-stone-300" />
          <div className="EmailAddress w-44 h-6 left-[14.69px] top-[16.50px] absolute text-stone-300 text-xl font-normal font-['Lato']">
            Email Address
          </div>
        </div>
        <div className="SubscribeTo w-full h-12 left-[212px] top-[107px] absolute text-black text-4xl font-bold font-['Lato']">
          Subscribe to our newsletter
        </div>
        <div className="GetTheLatestNewsAndOffers w-full h-6 left-[68px] top-[70px] absolute text-center text-black text-2xl font-extralight font-['Inter'] leading-relaxed tracking-wide">
          get the latest news and offers
        </div>
        <div className="IconlyRegularBrokenMessage w-44 h-44 px-4 py-6 left-10 top-0 absolute bg-red-500 bg-opacity-0 justify-center items-center inline-flex">
          <Image
            alt=""
            width={500}
            height={100}
            className="Message w-40 h-36"
            src="/icon/subscribe.png"
          />
        </div>
      </div>
    </div>
  )
}

export default Subscribe
