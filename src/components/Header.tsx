import Link from 'next/link';
import AlertIcon from '@/icons/AlertIcon';
import SearchForm from './SearchForm';

const Header = () => {
  return (
    <header className='border-b border-gray-200 shadow-sm'>
      <section
        id='notice-bar'
        className='flex items-center justify-center space-x-2 bg-gray-100 p-3'
      >
        <AlertIcon />
        <Link href=''>
          <a>
            <span className='font-semibold'>COVID-19 Updates</span>{' '}
            <span className='text-sm text-gray-600'>
              Keeping you safe while you use Carousell
            </span>
          </a>
        </Link>
      </section>

      <div id='top-bar' className='h-10 bg-gray-900 px-16 text-sm text-white'>
        <div className='mx-auto h-full max-w-screen-lg'>
          <div className='flex h-full items-center'>
            <span className='border-r border-gray-500 pr-4'>
              <a className='block h-5 w-5'>L</a>
            </span>
            <nav className='h-full'>
              <ul className='flex h-full items-center'>
                <li className='flex h-full cursor-pointer items-center px-2 hover:bg-gray-700'>
                  Fashion
                </li>
                <li className='flex h-full cursor-pointer items-center px-2 hover:bg-gray-700'>
                  Home & Living
                </li>
                <li className='flex h-full cursor-pointer items-center px-2 hover:bg-gray-700'>
                  Test
                </li>
                <li className='flex h-full cursor-pointer items-center px-2 hover:bg-gray-700'>
                  Test
                </li>
              </ul>
            </nav>
            <div className='ml-auto h-full'>
              <button className='h-full px-4 font-semibold hover:bg-gray-700'>
                Register
              </button>
              <button className='h-full px-4 font-semibold hover:bg-gray-700'>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className='mx-auto max-w-screen-lg'>
          <div className='flex items-center justify-between py-1'>
            <div className='text-3xl font-bold text-gray-500'>carousell</div>
            <div id='search-form'>
              <SearchForm />
            </div>
            <div>
              <button className='rounded bg-red-500 px-6 py-1 font-semibold text-white'>
                Sell
              </button>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
