import React from 'react'
import Image from 'next/image'

const OurProject = (props) => {
  return (
    <div className="Group128 w-4/5 h-96 relative mt-52">
      <div className="Frame107 w-full h-11 p-2.5 left-[130px] top-0 absolute bg-white bg-opacity-0 justify-center items-center gap-2.5 inline-flex">
        <div className="OurProjects  w-64 h-6 text-center">
          <span className="text-black lg:text-4xl mx-1 font-semibold font-['Inter'] underline leading-none">
            Our
          </span>
          <span className="text-indigo-700 lg:text-4xl mx-1 font-semibold font-['Inter'] underline leading-none">
            Projects
          </span>
          
        </div>
      </div>

      <div className="Group81 w-1/2 h-80 left-[25px] top-[80px] absolute">
        <Image
          alt=""
          width={700}
          height={100}
          className="Rectangle782 w-full h-80 left-[80px] top-0 absolute"
          src={props.imgOurProject}
        />
        <div className="EmpoweringWomen w-72 h-14 left-[90px] top-[26px] absolute text-center text-white text-opacity-80 text-2xl font-semibold font-['Inter'] leading-normal">
          Empowering Women
        </div>
        
      </div>

      <div className="Group82 w-1/2 h-80 right-[30px] top-[80px] absolute">
        <Image
          alt=""
          width={500}
          height={100}
          className="Rectangle782 w-full h-80 left-[200px] top-0 absolute"
          src={props.imgOurProject}
        />
        <div className="EnvironmentalProtection w-80 h-14 left-[220px] top-[26px] absolute text-center text-white text-opacity-80 text-2xl font-semibold font-['Inter'] leading-normal">
          Environmental Protection
        </div>
        
      </div>
    </div>
  )
}

export default OurProject
