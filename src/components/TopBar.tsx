import React from 'react';
import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';
import { BWCompactLogo } from './Logo';

const TopBar: React.FC<{ classname?: string }> = ({ classname }) => {
  return (
    <div
      id='top-bar'
      className={`h-10 bg-gray-800 px-16 text-sm text-white dark:border-b dark:border-gray-600 ${classname}`}
    >
      <div className='mx-auto h-full max-w-screen-lg'>
        <div className='flex h-full items-center'>
          <span className='border-r border-gray-500 pr-4'>
            <Link href='/'>
              <a className='block h-5 w-5'>
                <BWCompactLogo />
              </a>
            </Link>
          </span>
          <nav className='h-full'>
            <ul className='flex h-full items-center'>
              <li className='flex h-full cursor-pointer items-center px-2 transition-all duration-75 hover:bg-gray-600'>
                Fashion
              </li>
              <li className='flex h-full cursor-pointer items-center px-2 transition-all duration-75 hover:bg-gray-600'>
                {'Home & Living'}
              </li>
              <li className='flex h-full cursor-pointer items-center px-2 transition-all duration-75 hover:bg-gray-600'>
                Test
              </li>
              <li className='flex h-full cursor-pointer items-center px-2 transition-all duration-75 hover:bg-gray-600'>
                Test
              </li>
            </ul>
          </nav>
          <div className='ml-auto flex h-full items-center'>
            <button className='h-full px-4 font-semibold transition-all duration-75 hover:bg-gray-600'>
              Register
            </button>
            <button className='h-full px-4 font-semibold transition-all duration-75 hover:bg-gray-600'>
              Login
            </button>
            <ThemeToggle className='ml-2' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
