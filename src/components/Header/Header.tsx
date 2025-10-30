'use client';
import React from 'react'
import JsonLd from "@/components/SEO/JsonLd";
import { useTheme } from 'next-themes';
import LightMode from '@/asset/svg/light-mode.svg';
import DarkMode from '@/asset/svg/dark-mode.svg';
import Logo from '@/asset/svg/logo.svg';
import CaretDownWhite from '@/asset/svg/caret-down-white.svg';
import CaretDownBlack from '@/asset/svg/caret-down-black.svg';
import MenuLight from '@/asset/svg/menu.svg';
import MenuDark from '@/asset/svg/menu-dark.svg';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function Header({ className, style }: { className?: string; style?: React.CSSProperties }) {
  const { theme, setTheme } = useTheme()
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const navigate = useRouter();

  return (
    <div id="header-top" className={`w-full fixed z-20 top-0 right-0 bg-custom-white dark:bg-custom-black text-black dark:text-white flex flex-row items-center justify-center ${className}`} style={style}>
      <div className={`relative container mx-auto flex flex-grow flex-row items-center justify-between py-4 px-4`}>
        <JsonLd
          id="ld-org-website"
          data={[
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://swiftscale.com.ng/#organization",
              name: "SwiftScale",
              url: "https://swiftscale.com.ng/"
            },
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://swiftscale.com.ng/#website",
              url: "https://swiftscale.com.ng/",
              name: "SwiftScale"
            }
          ]}
        />
        {/* Logo Section - Visible on all screens */}
        <div className='flex items-center justify-start flex-row gap-4'>
          <Link href='/' aria-label='SwiftScale home' className='flex items-center justify-center flex-row gap-2 text-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-600 rounded-md no-underline text-inherit'>
            <Logo className='h-10 w-10 lg:h-14 lg:w-14' aria-hidden="true" />
            <div className='flex flex-col justify-start items-start'>
              <div className='flex font-poppins font-normal text-base lg:text-lg leading-[0.9] tracking-wide w-full'>SwiftScale</div>
              <div className='flex font-poppins font-normal text-base lg:text-lg leading-[1.0] tracking-wide w-full'>Consult</div>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation - Hidden on mobile */}
        <nav className='hidden lg:flex items-center justify-end flex-row flex-grow gap-10' aria-label='Primary'>
          <div className='font-poppins cursor-pointer my-auto'>
            <Link className='no-underline text-inherit' href="/about">About Us</Link>
          </div>
          <div className='font-poppins cursor-pointer flex items-center gap-1 flex-row relative'>
            <button aria-haspopup='menu' aria-expanded={isDropdownOpen} aria-controls='services-menu' onClick={() => setIsDropdownOpen(!isDropdownOpen)} className='flex items-center border-0 bg-inherit gap-1'>
              <div className='my-auto'>Services</div>
              <div className='p-1 rounded-full'>
                {theme === 'light' ? <CaretDownBlack className='h-6 w-6 my-auto' aria-hidden="true" /> : <CaretDownWhite className='h-6 w-6 my-auto' aria-hidden="true" />}
              </div>
            </button>
            {(isDropdownOpen && !isMobileMenuOpen) && (
              <div id='services-menu' role='menu' onMouseLeave={() => setIsDropdownOpen(false)} className='absolute top-10 bg-custom-white dark:bg-custom-black shadow-lg rounded-md z-10 w-[280px] p-10'>
                <ul className='mt-2 ml-4 list-none flex flex-col gap-4 align-middle'>
                  <li className='cursor-pointer hover:text-primary'><Link className='no-underline text-inherit' href="/hr-consultation">HR Consultation</Link></li>
                  <li className='cursor-pointer hover:text-primary'><Link className='no-underline text-inherit' href="/software-development">Software Development</Link></li>
                  <li className='cursor-pointer hover:text-primary'><Link className='no-underline text-inherit' href="/design">Design</Link></li>
                  <li className='cursor-pointer hover:text-primary'><Link className='no-underline text-inherit' href="/legal-services">Legal Services</Link></li>
                  <li className='cursor-pointer hover:text-primary'><Link className='no-underline text-inherit' href="/seo-consultations">SEO Consultations</Link></li>
                </ul>
              </div>
            )}
          </div>
          <div onClick={() => navigate.push("/contact")} className='font-poppins cursor-pointer my-auto bg-primary text-white px-5 py-3 rounded-full hover:bg-purple-700 transition-colors duration-300'>
            Get in Touch
          </div>
          <div onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className='cursor-pointer px-4'>
            {theme === 'light' ? <DarkMode aria-hidden="true" /> : <LightMode aria-hidden="true" />}
          </div>
        </nav>

        {/* Mobile Menu Button - Visible only on mobile */}
        <div className='lg:hidden'>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className='p-2 border-0'
              aria-label='Toggle mobile menu'
              aria-controls='mobile-menu'
              aria-expanded={isMobileMenuOpen}
            >
              {theme === 'light' ? <MenuDark className='h-8 w-8' aria-hidden="true" /> : <MenuLight className='h-8 w-8' aria-hidden="true" />}
            </button>
        </div>

        {/* Mobile Menu - Shows when menu button is clicked */}
        {isMobileMenuOpen && (
          <nav id='mobile-menu' className='lg:hidden fixed top-[60px] left-0 right-0 bg-custom-white dark:bg-custom-black p-4 shadow-lg' aria-label='Mobile Primary'>
            <div className='flex flex-col gap-6 h-auto py-5'>
              <div className='font-poppins cursor-pointer'><Link className='no-underline text-inherit' href="/about">About Us</Link></div>
              <div className='font-poppins cursor-pointer' onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <div className='flex items-center gap-2'>
                  Services
                  {theme === 'light' ? <CaretDownBlack className='h-6 w-6' aria-hidden="true" /> : <CaretDownWhite className='h-6 w-6' aria-hidden="true" />}
                </div>
                {isDropdownOpen && (
                  <ul className='mt-2 ml-4 list-none flex flex-col gap-5 py-5' role='menu'>
                    <li className='cursor-pointer hover:text-primary'><Link className='no-underline text-inherit' href="/hr-consultation">HR Consultation</Link></li>
                    <li className='cursor-pointer hover:text-primary'><Link className='no-underline text-inherit' href="/software-development">Software Development</Link></li>
                    <li className='cursor-pointer hover:text-primary'><Link className='no-underline text-inherit' href="/design">Design</Link></li>
                    <li className='cursor-pointer hover:text-primary'><Link className='no-underline text-inherit' href="/legal-services">Legal Services</Link></li>
                    <li className='cursor-pointer hover:text-primary'><Link className='no-underline text-inherit' href="/seo-consultations">SEO Consultations</Link></li>
                  </ul>
                )}
              </div>
              <div className='font-poppins cursor-pointer bg-primary text-white px-4 py-2 rounded-full text-center'>
                <Link className='no-underline text-inherit' href="/contact">Get in Touch</Link>
              </div>
              <div className='flex justify-center'>
                <div
                  onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                  className='cursor-pointer'
                >
                  {theme === 'light' ? <DarkMode aria-hidden="true" /> : <LightMode aria-hidden="true" />}
                </div>
              </div>
            </div>
          </nav>
        )}
      </div>
    </div>
  )
}

export default Header