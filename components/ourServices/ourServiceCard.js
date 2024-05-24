import Image from 'next/image'
import React from 'react'
import '@/components/ourServices/cardStyle.css'

const ourServiceCard = (props) => {
  return (
    <div className="frame w-[640px] mt-15">
            <div className="div w-[640px] mt-10">
                <Image width={400} height={150} className="rectangle" alt="Rectangle" src={props.img} />
                <div className="overlap-group w-[440px]">
                    <div className="deals-of-the-week py-5 ml-5">{props.title}</div>
                    <p className="feel-like-royally ml-2">{props.description}</p>
                    <p className="feel-like-royally ml-2">{props.description2}</p>
                    <div className="learn-more-wrapper">
                        <div className="learn-more ml-10">Learn More</div>
                    </div>
                </div>
            </div>
        </div>

  )
}

export default ourServiceCard
