import React from 'react'
import Image from 'next/image'

const HeroTwo = () => {
  return (
    <div>
      <section className="bg-[#EDEDED]">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 md:max-w-[2047px]">
          {/* Left Side (Grid) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 ">
            {/* Playstation 5 */}
            <div className="col-span-2 bg-gray-100 p-4 flex flex-col sm:flex-row justify-center items-center">
              <Image 
                src="/playstation-sm.png" 
                alt="Playstation 5" 
                width={150} 
                height={300} 
                className="object-cover"
              />
              <div className="ml-4 text-center sm:text-start">
                <h2 className="text-2xl font-bold">Playstation 5</h2>
                <p className="text-sm">Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</p>
              </div>
            </div>

            {/* Apple AirPods Max */}
            <div className="bg-gray-100 p-4 flex items-center">
              <Image 
                src="/images/airpods-max.jpg" 
                alt="Apple AirPods Max" 
                width={100} 
                height={100} 
                className="object-cover"
              />
              <div className="ml-4">
                <h3 className="text-lg font-bold">Apple AirPods Max</h3>
                <p className="text-sm">Computational audio. Listen, it&apos;s powerful.</p>
              </div>
            </div>

            {/* Apple Vision Pro */}
            <div className="bg-[#353535] text-white p-4 flex items-center">
              <Image 
                src="/images/vision-pro.jpg" 
                alt="Apple Vision Pro" 
                width={100} 
                height={100} 
                className="object-cover"
              />
              <div className="ml-4">
                <h3 className="text-2xl font-thin">Apple Vision <span className='font-bold'>Pro</span></h3>
                <p className="text-sm text-[#909090]">An immersive way to experience entertainment.</p>
              </div>
            </div>
          </div>

          {/* Right Side (MacBook Air) */}
          <div className="flex flex-col justify-center items-center bg-[#EDEDED] p-6">
            <Image 
              src="/macbook-model-sm.png" 
              alt="MacBook Air" 
              width={250} 
              height={150} 
              className="object-cover mb-4"
            />
            <h2 className="text-3xl font-bold">Macbook Air</h2>
            <p className="text-sm text-center">The new 15-inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>
            <button className="mt-4 py-2 px-24 bg-black text-white rounded hover:bg-gray-800 transition">Shop Now</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HeroTwo
