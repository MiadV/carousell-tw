import React from 'react';
import Link from 'next/link';
import { Popover } from '@headlessui/react';
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
              <Popover as='li' className='h-full'>
                {({ open }) => (
                  <>
                    <Popover.Button className='relative flex h-full cursor-pointer items-center px-2 transition-all duration-75 hover:bg-gray-600'>
                      {'Home & Living'}
                      {open && (
                        <span className='absolute bottom-0 left-[calc(50%_-_8px)]'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            height='8'
                            viewBox='0 0 16 8'
                            width='16'
                          >
                            <path
                              d='M8 -1.49015e-08C8 -1.49015e-08 14.337 6.14491 16 8H0C1.66298 6.14492 8 -1.49015e-08 8 -1.49015e-08Z'
                              fill='currentColor'
                            ></path>
                          </svg>
                        </span>
                      )}
                    </Popover.Button>

                    <Popover.Panel className='absolute inset-x-0 z-10 border-b border-gray-50 bg-white p-4 text-gray-800 shadow-2xl dark:border-gray-600 dark:bg-gray-700 dark:text-gray-50'>
                      <div className='mx-auto max-w-5xl'>
                        <div className='flex flex-wrap justify-between'>
                          <ul>
                            A
                            <li>
                              <a href='/analytics'>Analytics</a>
                            </li>
                            <li>
                              <a href='/analytics'>Analytics</a>
                            </li>
                          </ul>
                          <ul>
                            B
                            <li>
                              <a href='/analytics'>Analytics</a>
                            </li>
                            <li>
                              <a href='/analytics'>Analytics</a>
                            </li>
                            <li>
                              <a href='/analytics'>Analytics</a>
                            </li>
                            <li>
                              <a href='/analytics'>Analytics</a>
                            </li>
                            <li>
                              <a href='/analytics'>Analytics</a>
                            </li>
                          </ul>
                          <ul>
                            C
                            <li>
                              <a href='/analytics'>Analytics</a>
                            </li>
                            <li>
                              <a href='/analytics'>Analytics</a>
                            </li>
                          </ul>
                          <ul>
                            D
                            <li>
                              <a href='/analytics'>Analytics</a>
                            </li>
                            <li>
                              <a href='/analytics'>Analytics</a>
                            </li>
                          </ul>
                          <ul>
                            E
                            <li>
                              <a href='/analytics'>Analyticsaaaaaaaaa</a>
                            </li>
                            <li>
                              <a href='/analytics'>Analytics</a>
                            </li>
                            <li>
                              <a href='/analytics'>Analytics</a>
                            </li>
                            <li>
                              <a href='/analytics'>Analytics</a>
                            </li>
                          </ul>
                          <ul>
                            F
                            <li>
                              <a href='/analytics'>Analyticsaaaaaaa</a>
                            </li>
                            <li>
                              <a href='/analytics'>Analytics</a>
                            </li>
                          </ul>
                          <ul>
                            G
                            <li>
                              <a href='/analytics'>Analyticsaaaaaaaaa</a>
                            </li>
                            <li>
                              <a href='/analytics'>Analytics</a>
                            </li>
                          </ul>
                          <ul>
                            H
                            <li>
                              <a href='/analytics'>
                                Analyticsaaaaaaaaaaaaaaaaaaaaaa
                              </a>
                            </li>
                            <li>
                              <a href='/analytics'>Analytics</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </Popover.Panel>
                  </>
                )}
              </Popover>
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
