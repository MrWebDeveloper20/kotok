import React from 'react'
import OurServiceCard from './ourServiceCard'
import OurServiceRight from './OurServiceRight'
import '@/components/ourServices/style.css'

const OurServices = () => {
  return (
    <div className="mt-10 flex flex-col w-10/12 mx-auto my-5 justify-start items-center h-96">
      <div className="top flex flex-col justify-center items-center w-full  h-20">
        <div className="box flex justify-center items-center">
          <div className="group flex flex-col justify-center items-center">
            <div className="frame my-2">
              <p className="our-services my-2 text-xl flex flex-row">
                <span className="text-wrapper font-['Inter'] mr-3 lg:text-4xl">Our </span>
                <span className="span font-['Inter'] lg:text-4xl">Services</span>
              </p>
            </div>
            <div className="find-out-what-s-wrapper">
              <p className="find-out-what-s">
                Find Out What’s Happening Tour Radar-from The Latest Travel News
                To Our Special Offers
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="buttom flex flex-row w-full mx-auto ">
        <div className="  w-2/3  h-72 flex justify-center">
          <div className="right w-1/2 flex justify-center h-72">
            <OurServiceCard
              img="/images/ourServiceLeft.jpg"
              title="Deals Of The Week"
              description="Feel Like Royally With Up To 50% "
              description2="Off On Uk Adventures!"
            />
          </div>
          <div className="left w-1/2 flex justify-center h-72">
            <OurServiceCard
              img="/images/ourServiceRight.jpg"
              title="Private Adventures"
              description="Ready-to-book Adventures "
              description2="Personalized"
            />
          </div>
        </div>

        <div className="left flex flex-col justify-between gap-11 w-1/3 h-96 ">
          <div className="left1 flex flex-row w-full h-1/3">
            <OurServiceRight
              img="/images/service1.png"
              title="Travel Insurance"
            />
          </div>
          <div className="left2 flex flex-row w-full h-1/3">
            <OurServiceRight
              img="/images/service2.png"
              title="Travel & Earn"
            />
          </div>
          <div className="left3 flex flex-row justify-center w-full h-1/3">
            <OurServiceRight
              img="/images/service3.png"
              title="24/7 Support"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurServices
