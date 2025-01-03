import React from 'react'
import Image from 'next/image'

const HeroTwo = () => {
  return (
    <div>
      <section className="bg-[#EDEDED]">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 md:max-w-[2047px]">
          {/* Left Side (Grid) */}
          <div className="grid grid-cols-2 sm:grid-cols-2 ">
            {/* Playstation 5 */}
            <div className="col-span-2 bg-white p-4 flex flex-col sm:flex-row justify-center items-center">
              <Image 
                src="/playstation-sm.png" 
                alt="Playstation 5" 
                width={280} 
                height={380} 
                className="object-fill"
              />
              <div className="ml-4 text-center sm:text-start py-8 sm:py-2">
                <h2 className="text-3xl font-semibold">Playstation <span className='font-extrabold'>5</span></h2>
                <p className="text-sm text-[#909090]">Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</p>
              </div>
            </div>

            {/* Apple AirPods Max */}
            <div className="bg-gray-100 p-4 flex flex-col sm:flex-row items-center">
              <Image 
                src="/airpods-pro-lg.png" 
                alt="Apple AirPods Max" 
                width={100} 
                height={100} 
                className="h-[180px] w-[90px] hidden sm:block"
              />
              <Image 
                src="/airpods-pro-sm.png" 
                alt="Apple AirPods Max" 
                width={100} 
                height={100} 
                className="h-[110px] w-[108px] sm:hidden my-4"
              />
              <div className="text-center sm:text-start sm:ml-4">
                <h3 className="text-3xl font-thin">Apple AirPods <span className='font-bold'>Max</span></h3>
                <p className="text-sm  text-[#909090]">Computational audio. Listen, it&apos;s powerful.</p>
              </div>
            </div>

            {/* Apple Vision Pro */}
            <div className="bg-[#353535] text-white py-4 flex flex-col sm:flex-row items-center">
             <div className='block '>
             <Image 
                src="/vision-pro-sm.png" 
                alt="Apple Vision Pro" 
                width={220} 
                height={340} 
                // className="object-cover"
              />
             </div>
             
              <div className="ml-4 text-center sm:text-start py-3 sm:py-2">
                <h3 className="text-3xl font-thin">Apple Vision <span className='font-bold'>Pro</span></h3>
                <p className="text-sm text-[#909090]">An immersive way to experience entertainment.</p>
              </div>
            </div>
          </div>

          {/* Right Side (MacBook Air) */}
          <div className="flex flex-col justify-center items-center bg-[#EDEDED] p-6">
            <Image 
              src="/macbook-model-sm.png" 
              alt="MacBook Air" 
              width={470} 
              height={350} 
              className="object-cover mb-4"
            />
            <h2 className="text-3xl font-bold ">Macbook Air</h2>
            <p className="text-sm text-center">The new 15-inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>
            <button className="mt-4 py-2 px-24 bg-black text-white rounded hover:bg-gray-800 transition">Shop Now</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HeroTwo