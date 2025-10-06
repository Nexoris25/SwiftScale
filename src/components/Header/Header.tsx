'use client';
import React from 'react'
import { useTheme } from 'next-themes';
import LightMode from '@/asset/svg/light-mode.svg';
import DarkMode from '@/asset/svg/dark-mode.svg';
import Logo from '@/asset/svg/logo.svg';
import CaretDownWhite from '@/asset/svg/caret-down-white.svg';
import CaretDownBlack from '@/asset/svg/caret-down-black.svg';
import Menu from '@/asset/svg/menu.svg';

function Header({ className, style }: { className?: string; style?: React.CSSProperties }) {
  const { theme, setTheme } = useTheme()
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <div id="header-top" className={`w-full fixed top-0 right-0 bg-custom-white dark:bg-custom-black text-black dark:text-white flex flex-row items-center justify-center ${className}`} style={style}>
      <div className={`container mx-auto flex flex-grow flex-row items-center justify-between py-4 px-4`}>
        {/* Logo Section - Visible on all screens */}
        <div className='flex items-center justify-start flex-row gap-4'>
          <div className='flex cursor-pointer items-center justify-center flex-row gap-2 text-xs'>
            <Logo className='h-10 w-10 lg:h-14 lg:w-14' />
            <div className='flex flex-col justify-start items-start'>
              <div className='flex font-poppins font-normal text-base lg:text-lg leading-[1.3] tracking-wide w-full'>SwiftScale</div>
              <div className='flex font-poppins font-normal text-base lg:text-lg leading-[1.3] tracking-wide w-full'>Consult</div>
            </div>
          </div>
        </div>

        {/* Desktop Navigation - Hidden on mobile */}
        <div className='hidden lg:flex items-center justify-end flex-row flex-grow gap-10'>
          <div className='font-poppins cursor-pointer my-auto'>About Us</div>
          <div className='font-poppins cursor-pointer flex items-center gap-1 flex-row relative'>
            <div className='my-auto'>Services</div>
            {theme === 'light' ? <CaretDownBlack className='h-6 w-6 my-auto' /> : <CaretDownWhite className='h-6 w-6 my-auto' />}
          </div>
          <div className='font-poppins cursor-pointer my-auto bg-primary text-white px-5 py-3 rounded-full hover:bg-purple-700 transition-colors duration-300'>
            Get in Touch
          </div>
          <div onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className='cursor-pointer px-4'>
            {theme === 'light' ? <DarkMode /> : <LightMode />}
          </div>
        </div>

        {/* Mobile Menu Button - Visible only on mobile */}
        <div className='lg:hidden'>
          <div
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className='p-2'
            aria-label='Toggle mobile menu'
          >
            <Menu className='h-8 w-8' />
          </div>
        </div>

        {/* Mobile Menu - Shows when menu button is clicked */}
        {isMobileMenuOpen && (
          <div className='lg:hidden fixed top-[60px] left-0 right-0 bg-custom-white dark:bg-custom-black p-4 shadow-lg'>
            <div className='flex flex-col gap-6'>
              <div className='font-poppins cursor-pointer'>About Us</div>
              <div className='font-poppins cursor-pointer' onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <div className='flex items-center gap-2'>
                  Services
                  {theme === 'light' ? <CaretDownBlack className='h-6 w-6' /> : <CaretDownWhite className='h-6 w-6' />}
                </div>
                {isDropdownOpen && (
                  <ul className='mt-2 ml-4 list-none flex flex-col gap-4'>
                    <li className='cursor-pointer hover:text-primary'>HR Consultation</li>
                    <li className='cursor-pointer hover:text-primary'>Software Development</li>
                    <li className='cursor-pointer hover:text-primary'>Design</li>
                    <li className='cursor-pointer hover:text-primary'>Legal Services</li>
                    <li className='cursor-pointer hover:text-primary'>SEO Consultations</li>
                  </ul>
                )}
              </div>
              <div className='font-poppins cursor-pointer bg-primary text-white px-4 py-2 rounded-full text-center'>
                Get in Touch
              </div>
              <div className='flex justify-center'>
                <div
                  onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                  className='cursor-pointer'
                >
                  {theme === 'light' ? <DarkMode /> : <LightMode />}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header