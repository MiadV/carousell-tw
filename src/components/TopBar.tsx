import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

const TopBar: React.FC<{ classname?: string }> = ({ classname }) => {
  return (
    <div
      id='top-bar'
      className={`h-10 bg-zinc-800 px-16 text-sm text-white ${classname}`}
    >
      <div className='mx-auto h-full max-w-screen-lg'>
        <div className='flex h-full items-center'>
          <span className='border-r border-gray-500 pr-4'>
            <Link href='/'>
              <a className='block h-5 w-5'>
                <Image
                  src='/images/logo-bw-compact.svg'
                  alt='logo'
                  height={20}
                  width={20}
                />
              </a>
            </Link>
          </span>
          <nav className='h-full'>
            <ul className='flex h-full items-center'>
              <li className='flex h-full cursor-pointer items-center px-2 hover:bg-zinc-600'>
                Fashion
              </li>
              <li className='flex h-full cursor-pointer items-center px-2 hover:bg-zinc-600'>
                {'Home & Living'}
              </li>
              <li className='flex h-full cursor-pointer items-center px-2 hover:bg-zinc-600'>
                Test
              </li>
              <li className='flex h-full cursor-pointer items-center px-2 hover:bg-zinc-600'>
                Test
              </li>
            </ul>
          </nav>
          <div className='ml-auto h-full'>
            <button className='h-full px-4 font-semibold hover:bg-zinc-600'>
              Register
            </button>
            <button className='h-full px-4 font-semibold hover:bg-zinc-600'>
              Login
            </button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
