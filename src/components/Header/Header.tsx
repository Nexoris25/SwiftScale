'use client';
import React, { CSSProperties } from 'react'
import { useTheme } from 'next-themes';

type Props = {
  className?: String,
  style?: CSSProperties;
}

function Header({ className, style }: Props) {
  const { theme, setTheme } = useTheme()
  return (
    <div id="header-top" className={`w-full flex flex-row justify-center items-center h-8 text-[#FAFAFA] p-0 bg-black ${className}`} style={style}>
      <div className={`flex h-full w-full flex-row items-center justify-end gap-96 px-7 text-xs text-white max-[1025px]:justify-center max-[1025px]:gap-5 max-[1025px]:px-2 max-md:gap-1`}>
        <div className='flex items-center justify-center flex-row gap-4'>
          <div
            onClick={() => {
              setTheme(theme === 'light' ? 'dark' : 'light')
            }}
            className='flex cursor-pointer items-center justify-center flex-row gap-1 text-xs'
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? "dark" : "light"}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header