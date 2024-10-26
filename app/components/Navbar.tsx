import React from 'react'
import Link from 'next/link'
import { FaRegHeart, FaRegUser } from 'react-icons/fa'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCartOutline } from 'react-icons/io5'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"


const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-between p-4 px-6 bg-white text-sm'>
        <div className='font-black text-2xl flex items-center gap-5'>
          <div className='LogoText'>Bazaar</div>

          {/* Search bar added here */}
         <div className='hidden sm:block'>
         <div className="flex items-center bg-gray-100 rounded-md px-3 py-1 shadow-sm max-w-xs w-full md:w-80">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 18a7 7 0 100-14 7 7 0 000 14zm9 2l-3-3"
              />
            </svg>
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none ml-2 w-full text-sm font-semibold text-gray-700"
            />
          </div>
         </div>
        </div>

       <div className='hidden sm:block'>
       <div className='flex items-center gap-5'>
          <ul className='flex gap-8 text-sm font-semibold'>
            <Link href="/"><li>Home</li></Link>
            <Link href="/about"><li>About</li></Link>
            <Link href="/contact"><li>Contact</li></Link>
            <Link href="/blog"><li>Blog</li></Link>
          </ul>

          <ul className='flex gap-4'>
            <Link href="/"><li><FaRegHeart /></li></Link>
            <Link href="/"><li><IoCartOutline /></li></Link>
            <Link href="/"><li><FaRegUser /></li></Link>
          </ul>
        </div>
       </div>

<div className='block sm:hidden'>
  
<Sheet >
  <SheetTrigger>< RxHamburgerMenu className='text-2xl'/></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Menu</SheetTitle>
      <SheetDescription>
        <div className="w-full md:w-80">
            <div className="flex items-center bg-gray-100 rounded-md px-3 py-1 shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"

                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 18a7 7 0 100-14 7 7 0 000 14zm9 2l-3-3"
                />
              </svg>
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none ml-2 w-full text-sm text-gray-700"
              />
            </div>
          </div>
        

        {/* Menu Links and Icons */}
        <div className='flex flex-col md:flex-row items-center gap-5 w-full md:w-auto mt-2 md:mt-0'>
          <ul className='flex flex-col md:flex-row gap-6 pt-8 md:gap-8 text-sm font-semibold'>
            <Link href="/" className='hover:text-black active:text-black '><li>Home</li></Link>
            <Link href="/about" className='hover:text-black active:text-black '><li>About</li></Link>
            <Link href="/contact" className='hover:text-black active:text-black '><li>Contact</li></Link>
            <Link href="/blog" className='hover:text-black active:text-black '><li>Blog</li></Link>
          </ul>

          <ul className='flex gap-6 text-xl pt-3'>
            <Link href="/" className='hover:text-black active:text-black '><li><FaRegHeart /></li></Link>
            <Link href="/" className='hover:text-black active:text-black '><li><IoCartOutline /></li></Link>
            <Link href="/" className='hover:text-black active:text-black '><li><FaRegUser /></li></Link>
          </ul>
        </div>

      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
</div>



      </nav>
    </div>
  )
}

export default Navbar
