import React from 'react';
import Link from 'next/link';
import AlertIcon from '@/icons/AlertIcon';

const NoticeCard: React.FC<{ classname?: string }> = ({ classname }) => {
  return (
    <section
      id='notice-card'
      className={`flex items-center justify-center space-x-4 rounded border border-gray-100 p-4 shadow-md dark:border-gray-600 dark:bg-gray-900 ${classname}`}
    >
      <AlertIcon width={36} height={36} />
      <div>
        <Link href='/'>
          <a>
            <span className='block font-semibold'>COVID-19 Updates</span>
            <span className='text-sm text-gray-600 dark:text-gray-300'>
              Keeping you safe while you use Caroosell
            </span>
          </a>
        </Link>
      </div>
    </section>
  );
};

export default NoticeCard;
