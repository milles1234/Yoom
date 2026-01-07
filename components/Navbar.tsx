import Link from 'next/link'
import React from 'react'
import { SignUpButton } from '@clerk/nextjs'
import Image from 'next/image'
import MobileNav from './MobileNav'

const Navabar = () => {
    return (
      <nav className='flex-between fixed z-50 w-full bg-dark-1 px-6 lg:px-10'>
        <Link href='/' className='flex items-center gap-1'>
        <Image
        src='/icons/logo.svg'
        width={32}
        height={32}
        alt='Yoom logo'
        className='max-sm:size-10'
        />
        <p className='text-[26px] font-extra-bold text-white max-sm:hidden'>Doom</p>
        </Link>
        <div className='flex-between gap-5'>
             <SignUpButton>
                <button className="bg-[#6c47ff] text-ceramic-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton>
            <MobileNav/>
        </div>

      </nav>
    )
}

export default Navabar