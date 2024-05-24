import Image from 'next/image'
import React from 'react'

const Destination = (props) => {
  return (
    <div className="flex flex-col w-full mt-28  mx-auto items-center h-fit mb-80 ">
      <div className="title w-full flex justify-center my-3 flex-row">
        <h2 className="lg:text-4xl font-['Inter'] font-semibold mx-1 underline-offset-1">{props.text1}</h2>
        <h2 className="lg:text-4xl font-['Inter'] font-semibold mx-1 text-blue-800 underline-offset-1">
          {props.text2}
        </h2>
      </div>

      <div className="absolute image w-5/6 gap-5 flex flex-col justify-center items-center mt-20">
        <div className="imgTop flex flex-row justify-between w-full h-80">
          <div className="imgTopLeft w-1/2 ">
            <Image
              className="topLeftImg absolute object-fill h-80 w-1/2 pr-4 mr-10"
              src={props.imgTopLeft}
              alt=""
              width={500}
              height={100}
            />
            <h2 className="relative top-5 left-5 text-3xl text-white underline-1 ">
              {props.titleTopLeft}
            </h2>
          </div>

          <div className="imgTopRight flex flex-row w-1/2">
            <div className="topRight1">
              <Image
                className="imgtopRight1 absolute h-80 w-1/4 "
                src={props.imgTopRight1}
                alt=""
                width={400}
                height={80}
              />
              <h2 className="relative top-5 left-5 text-2xl text-white underline-1 ">
                {props.titleTopRight1}
              </h2>
            </div>

            <div className="topRight2">
              <Image
                className="topLeftImg absolute right-0 pl-2 h-80 w-1/4"
                src={props.imgTopRight2}
                alt=""
                width={500} 
                height={100}
              />
              <h2 className="relative top-5 left-[390px] text-2xl text-white underline-1 ">
                {props.titleTopRight2}
              </h2>
            </div>
          </div>
        </div>

        <div className="imgBut flex flex-row justify-between w-full h-80">
          <div className="imgButLeft flex flex-row w-1/2">
            <div className="butLeft1 w-1/2">
              <Image
                className="ImgButLeft1 absolute pr-3 h-80 w-1/4 "
                src={props.imgButRight1}
                alt=""
                width={400}
                height={80}
              />
              <h2 className="relative top-5 left-[20px] text-2xl text-white underline-1 ">
                {props.titleButRight1}
              </h2>
            </div>

            <div className="butLeft2 w-1/2">
              <Image
                className="ImgbutLeft2 absolute left-[274px] px-2 h-80 w-1/4"
                src={props.imgButRight2}
                alt=""
                width={500}
                height={100}
              />
              <h2 className="relative top-5 left-[20px] text-2xl text-white underline-1 ">
                {props.titleButRight2}
              </h2>
            </div>
          </div>

          <div className="imgButRight w-1/2">
            <Image
              className="topLeftImg absolute object-fill h-80 w-1/2  "
              src={props.imgButtomRight}
              alt=""
              width={500}
              height={100}
            />
            <h2 className="relative top-5 left-10 text-3xl text-white underline-1 ">
              {props.titleButtomRight}
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Destination
