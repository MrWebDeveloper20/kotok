import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
    <div className="w-full flex flex-col justify-between h-[400px] relative bg-white">
      <div className="footerTopp w-full flex flex-row gap-5 justify-between h-96">
        <div className="w-1/3 h-64 ">
          <div className="w-[132px] h-10 left-[216px] top-[216px] absolute">
            <div className="w-10 h-10 left-0 top-0 absolute">
              <Image alt="" src={'/icon/facebook.svg'} width={40} height={40} />
            </div>
            <div className="w-10 h-10 left-[92px] top-0 absolute">
              <Image
                alt=""
                src={'/icon/instagram.svg'}
                width={40}
                height={40}
              />
            </div>
            <div className="w-10 h-10 left-[46px] top-0 absolute">
              <Image alt="" src={'/icon/twitter.svg'} width={40} height={40} />
            </div>
          </div>
          <div className="w-[223px] h-[25px] left-[129px] top-[59px] absolute text-zinc-600 text-base font-normal font-['Inter'] leading-relaxed">
            Got Questions?Call us 24/7!
            <br />
          </div>
          <div className="w-[223px] left-[125px] top-[93px] absolute text-red-500 text-base font-normal font-['Inter'] leading-relaxed">
            Call us : +98-930-939-9796
          </div>
          <div className="w-[223px] left-[30px] top-[140px] absolute text-neutral-700 text-base font-medium font-['Inter'] leading-relaxed">
            contact info :{' '}
          </div>
          <div className="w-[313px] left-[39px] top-[168px] absolute text-zinc-600 text-base font-normal font-['Inter'] leading-relaxed">
            PD Box CT16122 Collins Street West,Victoria 8007, Australia
          </div>
          <div className="left-[75px] top-0 absolute text-zinc-800 text-2xl font-bold font-['Sen'] leading-tight">
            Need My Travel Help?
          </div>
          <div className="w-[95px] h-[112.09px] px-[7.92px] py-[9.34px] left-0 top-[22px] absolute flex-col justify-center items-center inline-flex">
            <Image
              alt=""
              width={50}
              height={50}
              className="w-[79.17px] h-[93.41px]"
              src="/images/phone1.png"
            />
          </div>
        </div>

        <div className="rightFooter mt-5 relative flex flex-row justify-end w-2/3">
          <div className="support flex flex-col justify-start items-start text-left w-1/5 ">
            <div className="  text-zinc-800 text-xl font-medium font-['Inter'] leading-[18px]">
              Support
            </div>
            <div className="p-1  justify-center items-center gap-1 inline-flex">
              <div className="text-neutral-500 text-sm font-normal font-['Inter'] leading-[34px]">
                Account
              </div>
            </div>
            <div className="p-1  justify-center items-center gap-1 inline-flex">
              <div className="text-neutral-500 text-sm font-normal font-['Inter'] leading-[34px]">
                Legal
              </div>
            </div>
            <div className="p-1   justify-center items-center gap-1 inline-flex">
              <div className="text-neutral-500 text-sm font-normal font-['Inter'] leading-[34px]">
                Contact Us
              </div>
            </div>
            <div className="p-1   justify-center items-center gap-1 inline-flex">
              <div className="text-neutral-500  text-sm font-normal font-['Inter'] leading-[34px]">
                Privacy Policy
              </div>
            </div>
          </div>

          <div className="company flex flex-col justify-start items-start text-left  w-1/5 ">
            <div className=" text-zinc-800 text-xl font-medium font-['Inter'] leading-[18px]">
              Company
            </div>
            <div className="p-1  justify-center items-center gap-1 inline-flex">
              <div className=" text-neutral-500 text-sm font-normal font-['Inter'] leading-[34px]">
                About Us
              </div>
            </div>
            <div className="p-1  justify-center items-center gap-1 inline-flex">
              <div className="text-neutral-500 text-sm font-normal font-['Inter'] leading-[34px]">
                Blogs
              </div>
            </div>
            <div className="p-1  justify-center items-center gap-1 inline-flex">
              <div className="text-neutral-500 text-sm font-normal font-['Inter'] leading-[34px]">
                Rewards
              </div>
            </div>
            <div className="p-1  justify-center items-center gap-1 inline-flex">
              <div className=" text-neutral-500 text-sm font-normal font-['Inter'] leading-[34px]">
                Work With Us
              </div>
            </div>
            <div className="p-1  justify-center items-center gap-1 inline-flex">
              <div className=" text-neutral-500 text-sm font-normal font-['Inter'] leading-[34px]">
                Meet The Team
              </div>
            </div>
          </div>

          <div className="forPartner flex flex-col justify-start items-start text-left w-1/5 ">
            <div className=" text-zinc-800 text-xl font-medium font-['Inter'] leading-[18px]">
              For Partner
            </div>
            <div className="p-1  justify-center items-center gap-1 inline-flex">
              <div className="text-neutral-500 text-sm font-normal font-['Inter'] leading-[34px]">
                Hotels
              </div>
            </div>
            <div className="p-1  justify-center items-center gap-1 inline-flex">
              <div className="text-neutral-500 text-sm font-normal font-['Inter'] leading-[34px]">
                Hostels
              </div>
            </div>
            <div className="p-1  justify-center items-center gap-1 inline-flex">
              <div className=" text-neutral-500 text-sm font-normal font-['Inter'] leading-[34px]">
                Travel Agency
              </div>
            </div>
            <div className="p-1  justify-center items-center gap-1 inline-flex">
              <div className=" text-neutral-500 text-sm font-normal font-['Inter'] leading-[34px]">
                Tour Guide
              </div>
            </div>
            <div className="p-1  justify-center items-center gap-1 inline-flex">
              <div className=" text-neutral-500 text-sm font-normal font-['Inter'] leading-[34px]">
                Transfer
              </div>
            </div>
            <div className="p-1  justify-center items-center gap-1 inline-flex">
              <div className=" text-neutral-500 text-sm font-normal font-['Inter'] leading-[34px]">
                Rent Car
              </div>
            </div>
          </div>

          <div className="service flex flex-col justify-start items-start text-left w-1/5 ">
            <div className=" text-zinc-800 text-xl font-medium font-['Inter'] leading-[18px]">
              Our Services
            </div>
            <div className="p-1 justify-center items-center gap-1 inline-flex">
              <div className=" text-neutral-500 text-sm font-normal font-['Inter'] leading-[34px]">
                Iran Visa Services
              </div>
            </div>
            <div className="p-1  justify-center items-center gap-1 inline-flex">
              <div className=" text-neutral-500 text-sm font-normal font-['Inter'] leading-[34px]">
                Iran Travel
              </div>
            </div>
            <div className="p-1 justify-center items-center gap-1 inline-flex">
              <div className=" text-neutral-500 text-sm font-normal font-['Inter'] leading-[34px]">
                Insurance
              </div>
            </div>
            <div className="p-1 justify-center items-center gap-1 inline-flex">
              <div className=" text-neutral-500 text-sm font-normal font-['Inter'] leading-[34px]">
                Airport CIP Services{' '}
              </div>
            </div>
            <div className="p-1 justify-center items-center gap-1 inline-flex">
              <div className=" text-neutral-500 text-sm font-normal font-['Inter'] leading-[34px]">
                Iran Sim Card
              </div>
            </div>
            <div className="p-1 justify-center items-center gap-1 inline-flex">
              <div className=" text-neutral-500 text-sm font-normal font-['Inter'] leading-[34px]">
                Tourist payment Card
              </div>
            </div>
            <div className="p-1 justify-center items-center gap-1 inline-flex">
              <div className=" text-neutral-500 text-sm font-normal font-['Inter'] leading-[34px]">
                Medical Tourism
              </div>
            </div>
            <div className="p-1 justify-center items-center gap-1 inline-flex">
              <div className=" text-neutral-500 text-sm font-normal font-['Inter'] leading-[34px]">
                Business Travel
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footerButtom w-full flex flex-row h-32">
        <div className="w-1/2 h-[88px] left-[50px] top-[307px] absolute">
          <Image
            alt=""
            width={50}
            height={50}
            className="w-[84px] h-[70px] left-0 top-[10px] absolute"
            src="/images/f1.png"
          />
          <Image
            alt=""
            width={50}
            height={50}
            className="w-[84px] h-[70px] left-[198px] top-[10px] absolute"
            src="/images/f2.png"
          />
          <Image
            alt=""
            width={50}
            height={50}
            className="w-[87px] h-[88px] left-[99px] top-0 absolute"
            src="/images/f3.png"
          />
          <Image
            alt=""
            width={50}
            height={50}
            className="w-[84px] h-[88px] left-[297px] top-0 absolute"
            src="/images/f4.png"
          />
          <Image
            alt=""
            width={200}
            height={50}
            className="w-[84px] h-[70px] left-[396px] top-[10px] absolute"
            src="/images/f5.jpg"
          />
        </div>
        <div className="w-1/2 h-[77px] left-[560px] top-[307px] absolute">
          <Image
            alt=""
            width={200}
            height={50}
            className="w-[210px] h-[61.25px] left-0 top-[15.75px] absolute rounded-sm border-2 border-black"
            src="/images/f6.png"
          />
          <div className="w-[157.08px] h-[26.83px] px-2.5 pt-0.5 pb-2.5 left-[26.17px] -top-1 absolute bg-gradient-to-b from-white to-neutral-400 rounded justify-center items-center gap-2.5 inline-flex">
            <div className="text-zinc-800 text-[10px] font-normal font-['Inter'] leading-relaxed">
              WE ACCEP CREADIT CARDS
            </div>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default Footer
