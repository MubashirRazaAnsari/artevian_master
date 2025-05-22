import React from 'react'
import Image from 'next/image'
import quality from "@/assets/quality-service.png"
import team from "@/assets/team-collab.png"
import exp from "@/assets/experienceYear.png"
import service from "@/assets/full-service.png"
import affordability from "@/assets/affordability.png"
import quickTime from "@/assets/quick-time.png"
import latestTech from "@/assets/latest-tech.png"
const QualityDesign = () => {
  return (
    <div className='w-full flex justify-center items-center px-4 lg:py-16 py-8 bg-[#F7F7FA]'>
    <div className="container lg:w-[90%] w-full">
      <h1 className='text-center text-gray-900 font-bold lg:text-6xl sm:text-4xl text-3xl xl:px-64 lg:px-36 px-0'>Digitally Focused <span className='text-primary'>Quality Design</span> Services</h1>
      <p className="sm:my-6 my-2 text-center text-gray-700 max-sm:text-sm">Artevian is committed to creating a digital presence that has a lasting impact. At Artevian, we strive to ensure that your brand resonates strongly across all online platforms.</p>
      <p className="text-center text-gray-700 max-sm:text-sm">Here at Artevian, we can make your brand stand out on any and all digital platforms.</p>

      <div className="grid grid-cols-12 lg:gap-6 gap-3 lg:my-8 my-3">

        <div data-aos-delay="50" data-aos="fade-up" className="md:col-span-6 col-span-12 rounded-md bg-white border-[1px] border-gray-300 p-4">
          <div className="w-fit p-2 rounded-lg bg-my-gradient">
            <Image
              src={exp}
              alt="hero"
              width={1000}
              height={1000}
              className="w-10"
            />
          </div>
          <p className="text-xl mt-2.5 font-bold"><span className="text-primary mr-2">#1</span> Years Of Experience</p>

          <p className="text-gray-500 mt-4">Artevian has solidified its position as a leading digital branding agency with more than decades of years of its dedicated experience. ArtevianProfessionals'wealth of knowledge, proficiency and expertise to the table, unswervingly providing creative solutions and incomparable designs to our clients.</p>

        </div>

        <div data-aos-delay="50" data-aos="fade-down" className="md:col-span-6 col-span-12 rounded-md bg-white border-[1px] border-gray-300 p-4">
          <div className="w-fit p-2 rounded-lg bg-my-gradient">
            <Image
              src={service}
              alt="hero"
              width={1000}
              height={1000}
              className="w-10"
            />
          </div>
          <p className="text-xl mt-2.5 font-bold"><span className="text-primary mr-2">#2</span> Full-Service Studio</p>

          <p className="text-gray-500 mt-4">The digital world of Artevian, where you can have the best of all worlds by becoming our sole source and service provider for all your digital needs. We are specialisedin logo and branding design, and we create modern logos which appeal to your business concept.</p>

        </div>

      </div>

      <div className="lg:block hidden my-20 relative">
        <div className='w-full border-[1px] border-primary'></div>

        <div className="absolute -top-10 left-1/4 border-[1px] border-primary rounded-full  h-20"></div>
        <div className="absolute -top-10 right-1/4 border-[1px] border-primary rounded-full  h-20"></div>
      </div>

      <div className="grid grid-cols-12 lg:gap-6 gap-3 lg:my-8 my-0">

        <div data-aos-delay="50" data-aos="fade-down" className="md:col-span-6 col-span-12 rounded-md bg-white border-[1px] border-gray-300 p-4">
          <div className="w-fit p-2 rounded-lg bg-my-gradient">
            <Image
              src={quality}
              alt="hero"
              width={1000}
              height={1000}
              className="w-10"
            />
          </div>
          <p className="text-xl mt-2.5 font-bold"><span className="text-primary mr-2">#3</span> Quality Work</p>

          <p className="text-gray-500 mt-4">Quality work is our top priority at Artevian. We focus on exceeding our customer's expectations in every project we undertake. A team of well-experienced professionals, highly focus on quality and accuracy in every task.</p>

        </div>

        <div data-aos-delay="50" data-aos="fade-up" className="md:col-span-6 col-span-12 rounded-md bg-white border-[1px] border-gray-300 p-4">
          <div className="w-fit p-2 rounded-lg bg-my-gradient">
            <Image
              src={affordability}
              alt="hero"
              width={1000}
              height={1000}
              className="w-10"
            />
          </div>
          <p className="text-xl mt-2.5 font-bold"><span className="text-primary mr-2">#4</span> Affordability</p>

          <p className="text-gray-500 mt-4">The belief of quality digital solutions at Artevian shouldn't break the bank. That is why we are here to provide affordable digital services without compromising on quality.</p>

        </div>

      </div>

      <div className="lg:block hidden my-20 relative">
        <div className='w-full border-[1px] border-primary'></div>

        <div className="absolute -top-10 left-1/4 border-[1px] border-primary rounded-full  h-20"></div>
        <div className="absolute -top-10 right-1/4 border-[1px] border-primary rounded-full  h-20"></div>
      </div>

      <div className="grid grid-cols-12 lg:gap-6 gap-3 lg:my-8 my-0">

        <div data-aos-delay="50" data-aos="fade-up" className="md:col-span-6 col-span-12 rounded-md bg-white border-[1px] border-gray-300 p-4">
          <div className="w-fit p-2 rounded-lg bg-my-gradient">
            <Image
              src={quickTime}
              alt="hero"
              width={1000}
              height={1000}
              className="w-10"
            />
          </div>
          <p className="text-xl mt-2.5 font-bold"><span className="text-primary mr-2">#5</span> Quick Turnaround Time</p>

          <p className="text-gray-500 mt-4">Artevian professionals and experienced experts provide speedy solutions in the range of various services. Employing these procedures that have been developed thoroughly ensures speedy delivery regardless of the quality. </p>

        </div>

        <div data-aos-delay="50" data-aos="fade-down" className="md:col-span-6 col-span-12 rounded-md bg-white border-[1px] border-gray-300 p-4">
          <div className="w-fit p-2 rounded-lg bg-my-gradient">
            <Image
              src={latestTech}
              alt="hero"
              width={1000}
              height={1000}
              className="w-10"
            />
          </div>
          <p className="text-xl mt-2.5 font-bold"><span className="text-primary mr-2">#6</span> Latest Technology</p>

          <p className="text-gray-500 mt-4">With Artevian professional services, explore the realm of the latest technology. We are at the cutting edge of innovation, constantly incorporating state-of-the-art technologies into our service provision to ensure superior solutions on the market.</p>

        </div>

      </div>

    </div>
  </div>
  )
}

export default QualityDesign
