import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Popover, Transition } from '@headlessui/react';
import { ThemeToggle } from './ThemeToggle';
import { BWCompactLogo } from './Logo';
import { topBarLinks } from '@/mockData';
import ChevronDown from '@/icons/ChevronDown';

const TopBar: React.FC<{ classname?: string }> = ({ classname }) => {
  return (
    <div
      id='top-bar'
      className={`h-10 bg-gray-800 px-16 text-sm text-white dark:border-b dark:border-gray-600 ${classname}`}
    >
      <div className='mx-auto h-full max-w-screen-xl'>
        <div className='flex h-full items-center'>
          <span className='border-r border-gray-500 pr-4'>
            <Link href='/'>
              <a className='block h-5 w-5'>
                <BWCompactLogo />
              </a>
            </Link>
          </span>
          <nav className='h-full'>
            <Popover.Group as='ul' className='flex h-full items-center'>
              {Object.keys(topBarLinks).map((item, i) => (
                <Popover as='li' className='h-full' key={i}>
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className='relative flex h-full cursor-pointer items-center overflow-hidden truncate px-2 transition-all duration-75 hover:bg-gray-600'
                        onClick={() => console.log('clicked')}
                      >
                        {item}
                        <ChevronDown />
                        {open && (
                          <span className='absolute bottom-0 left-[calc(50%_-_8px)]'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
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
                      <Transition
                        enter='transition duration-75 ease-out'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='transition duration-75 ease-out'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                      >
                        <Popover.Panel className='absolute inset-x-0 z-10 border-b border-gray-50 bg-white p-4 text-gray-800 shadow-2xl dark:border-gray-600 dark:bg-gray-600 dark:text-gray-50'>
                          <div className='mx-auto max-w-5xl'>
                            <div className='grid grid-cols-5 gap-4'>
                              {topBarLinks[item].map((col, i) => {
                                return <RenderColumns key={i} col={col} />;
                              })}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              ))}
            </Popover.Group>
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

const RenderColumns: React.FC<{ col: typeof topBarLinks[number][number] }> = ({
  col,
}) => {
  return (
    <>
      {col.map((parent) => {
        return (
          <ul key={parent.title} className='space-y-2'>
            <Link href={parent.href}>
              <a className='relative text-base font-semibold transition-all hover:text-teal-600 hover:underline dark:hover:text-teal-400'>
                {parent.icon && (
                  <span className='absolute -left-8'>
                    <Image
                      src={parent.icon}
                      height={24}
                      width={24}
                      alt='icon'
                    />
                  </span>
                )}
                <span>{parent.title}</span>
              </a>
            </Link>

            {parent.children.map((item) => (
              <li key={item.title}>
                <Link href={item.href}>
                  <a className='text-sm transition-all hover:text-teal-600 hover:underline dark:text-gray-300 dark:hover:text-teal-400'>
                    {item.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        );
      })}
    </>
  );
};
