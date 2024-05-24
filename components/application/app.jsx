import React from 'react'
import Image from 'next/image'

const AppKotok = () => {
  return (
    <div className="Group127 mt-36 w-4/5 h-96 left-[110px] relative">
      <div className="Frame105 w-4/5 h-14 mx-auto left-[-20px] top-[94px] absolute bg-white bg-opacity-0 justify-center items-center inline-flex">
        <div className="GetMoreOutOfKootookWithOurMobileApp w-full h-14 text-center">
          <span className="text-black text-3xl font-semibold font-['Inter'] capitalize leading-none">
            get more out of koo
          </span>
          <span className="text-red-500 text-3xl font-semibold font-['Inter'] capitalize leading-none">
            t
          </span>
          <span className="text-black text-3xl font-semibold font-['Inter'] capitalize leading-none">
            ook with our mobile app
          </span>
        </div>
      </div>
      <div className="Frame106 w-7/12 h-24 p-2.5 left-[32px] top-[154px] absolute bg-white bg-opacity-0 justify-center items-center gap-2.5 inline-flex">
        <div className="DownloadTheK w-full h-24 text-black text-xl font-light font-['Inter'] capitalize leading-loose tracking-tight">
          download the kootook mobile app for ore-touch access to your next
          travel adventure. with the kiwi.com mobile app you’ll get access to
          hidden features and special offers{' '}
        </div>
      </div>
      <div className="Group118 w-72 h-8 left-[27px] top-[267px] absolute">
        <div className="Rectangle784 w-72 h-8 left-0 top-0 absolute bg-neutral-300 bg-opacity-0" />
        <div className="DownloadBoardingPasses w-64 h-8 left-[33px] top-0 absolute text-black text-xl font-light font-['Inter'] capitalize leading-loose tracking-tight">
          download boarding passes
        </div>
      </div>
      <div className="Group116 w-72 h-8 left-[475px] top-[265px] absolute">
        <div className="Group76 w-72 h-8 left-0 top-0 absolute">
          <div className="Rectangle784 w-52 h-8 left-0 top-0 absolute bg-neutral-300 bg-opacity-0" />
          <div className="OneClickBooking w-64 h-8 left-[33px] top-0 absolute text-black text-xl font-light font-['Inter'] capitalize leading-loose tracking-tight">
            one click booking{' '}
          </div>
        </div>
        <div className="Check2Circle w-6 h-6 left-[1px] top-[5px] absolute bg-white bg-opacity-0" />
      </div>
      <div className="Group119 w-96 h-8 left-0 top-[311px] absolute">
        <div className="Rectangle784 w-96 h-8 left-0 top-0 absolute bg-neutral-300 bg-opacity-0" />
        <div className="GetExclusiveOffersAndPrices w-80 h-8 left-[55px] top-0 absolute text-black text-xl font-light font-['Inter'] capitalize leading-loose tracking-tight">
          get exclusive offers and prices{' '}
        </div>
      </div>
      <div className="Group117 w-72 h-8 left-[475px] top-[313px] absolute">
        <div className="Check2Circle w-6 h-6 left-[1px] top-[5px] absolute bg-white bg-opacity-0" />
        <div className="Group77 w-72 h-8 left-0 top-0 absolute">
          <div className="Rectangle784 w-48 h-8 left-0 top-0 absolute bg-neutral-300 bg-opacity-0" />
          <div className="TripNotification w-64 h-8 left-[33px] top-0 absolute text-black text-xl font-light font-['Inter'] capitalize leading-loose tracking-tight">
            trip notification
          </div>
        </div>
      </div>
      <div className="Download w-72 h-10 left-[10px] top-[369px] absolute justify-start items-start gap-6 inline-flex">
        <div className="Download w-32 h-10 relative">
          <div className="Rectangle17 w-32 h-10 left-0 top-0 absolute bg-neutral-900 rounded border-2 border-stone-300" />
          <Image
            src="/images/googlePlay.png"
            alt=""
            width={100}
            height={100}
            className="GooglePlayPngLogo37891 w-6 h-6 left-[10px] top-[7px] absolute"
          />
          <div className="GetInOn left-[41px] top-[4px] absolute text-white text-xs font-bold font-['Lato'] leading-3">
            GET IN ON
          </div>
          <div className="GooglePlay left-[41px] top-[14px] absolute text-white text-base font-bold font-['Lato'] leading-snug tracking-wide">
            Google Play
          </div>
        </div>
        <div className="Download w-32 h-10 relative">
          <div className="Rectangle17 w-32 h-10 left-0 top-0 absolute bg-neutral-900 rounded border-2 border-stone-300" />
          <Image
            src="/images/apple.png"
            alt=""
            width={100}
            height={100}
            className="GooglePlayPngLogo37891 w-6 h-6 left-[10px] top-[7px] absolute"
          />
          <div className="DownlodOnThe left-[41px] top-[4px] absolute text-white text-xs font-bold font-['Lato'] leading-3">
            Downlod on the{' '}
          </div>
          <div className="AppStore left-[41px] top-[14px] absolute text-white text-base font-bold font-['Lato'] leading-snug tracking-wide">
            App Store
          </div>
        </div>
      </div>
      <Image
        src="/images/app.png"
        alt=""
        width={500}
        height={100}
        className="Rectangle792 w-1/3 z-0 h-96 left-[650px] top-[40px] absolute origin-top-left rotate-[-15deg]"
      />
    </div>
  )
}

export default AppKotok
