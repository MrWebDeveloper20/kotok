import React from 'react'
import WhyTravelCard from '@/components/whyTravel/whyTravelCard'

const WhyTravel = (props) => {
  return (
    <div className="Group129 flex flex-col items-center w-full h-80 mt-12 relative">
      <div className="Frame108 w-full h-11 p-2.5 top-0 bg-white bg-opacity-0 justify-center items-center gap-2.5 inline-flex">
        <div className="WhyTravelWithUs flex justify-center w-full h-6 text-center">
          <span className="text-black mx-2 text-3xl font-semibold font-['Inter'] underline leading-none">
            Why{' '}
          </span>
          <span className="text-indigo-700 text-3xl font-semibold font-['Inter'] underline leading-none">
            Travel with us
          </span>
          
        </div>
      </div>

      <div className="whyCard flex  flex-row justify-between items-center mx-auto w-5/6">
        <div>
          <WhyTravelCard
            imgWhy="/images/whyTravel.png"
            desc="we are a women-run company based in south iran but oprating all over country "
          />
        </div>

        <div>
          <WhyTravelCard
            imgWhy="/images/whyTravel.png"
            desc="we are a women-run company based in south iran but oprating all over country "
          />
        </div>

        <div>
          <WhyTravelCard
            imgWhy="/images/whyTravel.png"
            desc="we are a women-run company based in south iran but oprating all over country "
          />
        </div>

        <div>
          <WhyTravelCard
            imgWhy="/images/whyTravel.png"
            desc="we are a women-run company based in south iran but oprating all over country "
          />
        </div>
      </div>
    </div>
  )
}

export default WhyTravel
