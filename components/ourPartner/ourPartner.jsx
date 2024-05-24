import React from 'react'
import Image from 'next/image'

const OurPartner = () => {
  return (
    <div className="Group131 w-full h-44 mx-auto relative">
    <div className="Frame109 w-full h-11 p-2.5  top-[200px] absolute bg-white bg-opacity-0 justify-center items-center gap-2.5 inline-flex">
        <div className="OurPartners w-64 h-6 text-center"><span className="text-black text-3xl font-semibold font-['Inter'] underline leading-none">Our </span><span className="text-indigo-700 text-3xl font-semibold font-['Inter'] underline leading-none">Partners</span><span className="text-black text-3xl font-semibold font-['Inter'] underline leading-none"> </span></div>
    </div>
    <div className="Group93 w-full h-24 flex flex-row gap-5 justify-around top-[300px] absolute">
        <Image alt='' width={400} height={100} className="Icons8Tesla512px1 w-24 h-24 " src="/images/partner1.png" />
        <Image alt='' width={400} height={100} className="Icons8Chevron512px3 w-24 h-24  " src="/images/partner2.png" />
        <Image alt='' width={400} height={100} className="Icons8Hulu500px1 w-24 h-24  " src="/images/partner3.png" />
        <Image alt='' width={400} height={100} className="Icons8Tesla512px3 w-24 h-24  " src="/images/partner1.png" />
        <Image alt='' width={400} height={100} className="Icons8Chevron512px2 w-24 h-24  " src="/images/partner2.png" />
        <Image alt='' width={400} height={100} className="Icons8Hulu500px3 w-24 h-24 " src="/images/partner3.png" />
        <Image alt='' width={400} height={100} className="Icons8Tesla512px2 w-24 h-24  " src="/images/partner1.png" />
        <Image alt='' width={400} height={100} className="Icons8Chevron512px1 w-24 h-24  " src="/images/partner2.png" />
        <Image alt='' width={400} height={100} className="Icons8Hulu500px2 w-24 h-24  " src="/images/partner3.png" />
    </div>
</div>

  )
}

export default OurPartner
