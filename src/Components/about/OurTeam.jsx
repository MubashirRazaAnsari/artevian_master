import Image from 'next/image'
import React from 'react'
import ceo from '../../assets/ceo.png'
import coo from '../../assets/coo.png'
import lead from '../../assets/team-lead.png'
import ux from '../../assets/head-ux.png'

const OurTeam = () => {
  return (
    <div className='w-full flex justify-center items-center px-4 lg:py-16 py-8'>
      <div className="container lg:w-[90%]">
        <h1 className="lg:text-5xl sm:text-4xl text-3xl font-bold text-center w-full">Our <span className='text-primary'>Team</span></h1>

        <div className="mt-6 grid grid-cols-12 md:gap-6 gap-0">

          <div data-aos-delay="50" data-aos="fade-right" className="lg:col-span-3 col-span-6 p-2">
            <Image src={ceo} alt="team" width={1000} height={1000} className='w-full object-contain' />

            <p className='text-gray-500 font-medium md:my-4 my-1.5'>CEO</p>
            <p className='text-gray-800 font-semibold max-sm:text-sm'>John kabras</p>

          </div>


          <div data-aos-delay="150" data-aos="fade-right" className="lg:col-span-3 col-span-6 p-2">
            <Image src={coo} alt="team" width={1000} height={1000} className='w-full object-contain' />

            <p className='text-gray-500 font-medium md:my-4 my-1.5'>COO</p>
            <p className='text-gray-800 font-semibold max-sm:text-sm'>Philips shene moris</p>

          </div>



          <div data-aos-delay="250" data-aos="fade-right" className="lg:col-span-3 col-span-6 p-2">
            <Image src={lead} alt="team" width={1000} height={1000} className='w-full object-contain' />

            <p className='text-gray-500 font-medium md:my-4 my-1.5'>TECH LEAD</p>
            <p className='text-gray-800 font-semibold max-sm:text-sm'>Equarn shamir  mohomad</p>

          </div>


          <div data-aos-delay="350" data-aos="fade-right" className="lg:col-span-3 col-span-6 p-2">
            <Image src={ux} alt="team" width={1000} height={1000} className='w-full object-contain' />

            <p className='text-gray-500 font-medium md:my-4 my-1.5'>Head of UX</p>
            <p className='text-gray-800 font-semibold max-sm:text-sm'>Janka indrajith</p>

          </div>

        </div>

      </div>
    </div>
  )
}

export default OurTeam
