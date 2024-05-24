import React from 'react'
import CardHappy from './cardHappy'

const OurHappy = () => {
  return (
    <div className="Group130 flex flex-col items-center justify-center w-full h-auto relative">
      <div className="Frame135 w-full h-11 p-2.5 mx-auto absolute top-10  bg-white bg-opacity-0 justify-center items-center gap-2.5 inline-flex">
        <div className="OurHappy w-64 h-6 text-center">
          <span className="text-black text-3xl font-semibold font-['Inter'] underline leading-none">
            Our{' '}
          </span>
          <span className="text-indigo-700 text-3xl font-semibold font-['Inter'] underline leading-none">
            Happy
          </span>
          <span className="text-black text-3xl font-semibold font-['Inter'] underline leading-none">
            {' '}
          </span>
        </div>
      </div>

      <div className="card relative h-auto w-full flex justify-around items-center flex-row">
          
          <div className="absolute top-28 left-[220px]">
            <CardHappy
              className=""
              imgHappy="/images/happy.jpg"
              imgHappy2="/icon/star.svg"
              type="Excelent"
              desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl "
              date="08 Dec, 2024"
              name="Mohammad Reza Golzar"
              job="Travler"
            />
          </div>

          <div className="absolute top-28 left-[550px]">
            <CardHappy
              className=""
              imgHappy="/images/happy.jpg"
              imgHappy2="/icon/star.svg"
              type="Excelent"
              desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl "
              date="08 Dec, 2024"
              name="Mohammad Reza Golzar"
              job="Travler"
            />
          </div>

          <div className="absolute top-28 left-[875px]">
            <CardHappy
              className=""
              imgHappy="/images/happy.jpg"
              imgHappy2="/icon/star.svg"
              type="Excelent"
              desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl "
              date="08 Dec, 2024"
              name="Mohammad Reza Golzar"
              job="Travler"
            />
          </div>

      </div>
      
    </div>
  )
}

export default OurHappy
