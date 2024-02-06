import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoGiftSharp } from "react-icons/io5";


import 'swiper/css';
import 'swiper/css/effect-cards';



// import required modules
import { EffectCards } from 'swiper/modules';


const StudentSlider = () => {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >



        <SwiperSlide>
          {/* <div className='    h-full'> */}
            <div className='w-96 backdrop-blur-2xl bg-[#ffffffee]  rounded-2xl  h-full flex space-y-6 justify-center items-center flex-col'>
              <Image src='/images/gift.gif' alt='ebs'  width='200'
               height='200' className=' z-50  absolute bottom-1/2' />
            <Image src='/images/student.jpg' alt='ebs'  width='600'
                        height='600' className=' w-44 h-44 border-4 border-gray-50 shadow-xl shadow-[#804685cf] rounded-full' />
            <p className='text-gray-800 pt-2'>Student 10 Name</p>
             <p className="  text-center md:text-lg sm:text-xs text-gray-700 ">Losit amet consectetur ,<br></br> adipisicing elit and some more.</p>


   {/* -------------------------button gradient */}
               <div className="px-8 py-6">
                <div className="grid gap-8 items-start justify-center">
                  <div className="relative group">
                    <div className="absolute shadow-2xl -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                    <button className="relative px-7 py-4 bg-[#ff00ea57] rounded-2xl leading-none flex items-center divide-x divide-gray-600">
                      <span className="flex items-center space-x-5">
                      <IoGiftSharp className='text-2xl text-white mr-2'/>
                      </span>
                      <span className="pl-2 text-gray-50 group-hover:text-gray-100 transition duration-200">   تبریک</span>
                    </button>
                  </div>
                </div>
                </div>


    {/* button gradient */}
            </div>
          {/* </div> */}
        </SwiperSlide>



        <SwiperSlide>
          {/* <div className='    h-full'> */}
            <div className='w-96 backdrop-blur-2xl bg-[#ffffffee]  rounded-2xl  h-full flex space-y-6 justify-center items-center flex-col'>
              <Image src='/images/gift.gif' alt='ebs'  width='200'
               height='200' className=' z-50  absolute bottom-1/2' />
            <Image src='/images/student.jpg' alt='ebs'  width='600'
                        height='600' className=' w-44 h-44 border-4 border-gray-50 shadow-xl shadow-[#804685cf] rounded-full' />
            <p className='text-gray-800 pt-2'>Student 10 Name</p>
             <p className="  text-center md:text-lg sm:text-xs text-gray-700 ">Losit amet consectetur ,<br></br> adipisicing elit and some more.</p>


   {/* -------------------------button gradient */}
               <div className="px-8 py-6">
                <div className="grid gap-8 items-start justify-center">
                  <div className="relative group">
                    <div className="absolute shadow-2xl -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                    <button className="relative px-7 py-4 bg-[#ff00ea57] rounded-2xl leading-none flex items-center divide-x divide-gray-600">
                      <span className="flex items-center space-x-5">
                      <IoGiftSharp className='text-2xl text-white mr-2'/>
                      </span>
                      <span className="pl-2 text-gray-50 group-hover:text-gray-100 transition duration-200">   تبریک</span>
                    </button>
                  </div>
                </div>
                </div>


    {/* button gradient */}
            </div>
          {/* </div> */}
        </SwiperSlide>





        <SwiperSlide>
          {/* <div className='    h-full'> */}
            <div className='w-96 backdrop-blur-2xl bg-[#ffffffee]  rounded-2xl  h-full flex space-y-6 justify-center items-center flex-col'>
              <Image src='/images/gift.gif' alt='ebs'  width='200'
               height='200' className=' z-50  absolute bottom-1/2' />
            <Image src='/images/student.jpg' alt='ebs'  width='600'
                        height='600' className=' w-44 h-44 border-4 border-gray-50 shadow-xl shadow-[#804685cf] rounded-full' />
            <p className='text-gray-800 pt-2'>Student 10 Name</p>
             <p className="  text-center md:text-lg sm:text-xs text-gray-700 ">Losit amet consectetur ,<br></br> adipisicing elit and some more.</p>


   {/* -------------------------button gradient */}
               <div className="px-8 py-6">
                <div className="grid gap-8 items-start justify-center">
                  <div className="relative group">
                    <div className="absolute shadow-2xl -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                    <button className="relative px-7 py-4 bg-[#ff00ea57] rounded-2xl leading-none flex items-center divide-x divide-gray-600">
                      <span className="flex items-center space-x-5">
                      <IoGiftSharp className='text-2xl text-white mr-2'/>
                      </span>
                      <span className="pl-2 text-gray-50 group-hover:text-gray-100 transition duration-200">   تبریک</span>
                    </button>
                  </div>
                </div>
                </div>


    {/* button gradient */}
            </div>
          {/* </div> */}
        </SwiperSlide>


        
      </Swiper>
    </>
  )
}

export default StudentSlider