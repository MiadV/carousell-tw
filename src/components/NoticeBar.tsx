import React from 'react';
import Link from 'next/link';
import AlertIcon from '@/icons/AlertIcon';

const NoticeBar: React.FC<{ classname?: string }> = ({ classname }) => {
  return (
    <section
      id='notice-bar'
      className={`flex items-center justify-center space-x-2 bg-gray-100 p-3 ${classname}`}
    >
      <AlertIcon />
      <Link href='/'>
        <a>
          <span className='font-semibold'>COVID-19 Updates</span>{' '}
          <span className='text-sm text-gray-600'>
            Keeping you safe while you use Carousell
          </span>
        </a>
      </Link>
    </section>
  );
};

export default NoticeBar;
