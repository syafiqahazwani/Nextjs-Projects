"use client";
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'
import { BiSun } from 'react-icons/bi';

const ThemeToggle = () => {
    const [ mounted, setMouted ] = useState(false);

    const { theme, setTheme, systemTheme } = useTheme();

    useEffect(() => {
        setMouted(true);
    }, []);

    if(!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button 
     onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
     className='p-2 transition'>
        {currentTheme === "dark" ? (
            <BiSun className='text-white w-8 h-8 cursor-pointer' />
        ) : (
            <BiSun className='text-white w-8 h-8 cursor-pointer' />
        )}
    </button>
  );
};

export default ThemeToggle
