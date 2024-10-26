import React from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const HeroOne: React.FC = () => {
  return (
    <>
      <div className='bg-[#211C24]'>
        <div className='grid grid-cols-1 sm:grid-cols-[3fr_2fr] h-[130vh] sm:h-[90vh] overflow-hidden'>
          {/* Text Content */}
          <div className='content pt-14 text-center flex flex-col items-center justify-center py-6 gap-4'>
            <h1 className='text-[#FFFFFF] opacity-40'>Pro.Beyond.</h1>
            <div className='text-[#FFFFFF] leading-none'>
              <h2 className='font-thin text-[65px]'>IPHONE 14</h2>
              <h2 className='font-semibold text-[65px]'>Pro</h2>
            </div>
            <p className='text-[#FFFFFF] opacity-40 text-[19px]'>
              Created to change everything for the better. For everyone.
            </p>
            <div className='p-5'>
              <Link href='#'>
                <Button className='w-44 border-white hover:border-[#000000] border py-6 hover:font-extrabold hover:bg-white hover:text-black'>
                  Shop Now
                </Button>
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className='iphone-main-model flex justify-center sm:justify-start px-8 sm:px-2 pt-2 sm:pt-20'>
            <img 
              className='w-[300px] sm:w-[400px] lg:w-[500px] xl:w-[600px] 2xl:w-[700px] max-w-full' 
              src="/iphone-model.png" 
              alt="main-model-iphone" 
              style={{ maxWidth: '402px', height: 'auto' }} 
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroOne
