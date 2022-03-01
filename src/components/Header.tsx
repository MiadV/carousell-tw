import Image from 'next/image';
import Link from 'next/link';
import NoticeBar from './NoticeBar';
import TopBar from './TopBar';
import { SearchForm, SearchFormCompact } from './SearchForm';

const Header = () => {
  return (
    <header className='border-b border-gray-200 shadow-sm'>
      <NoticeBar classname='hidden md:flex' />
      <TopBar classname='hidden md:block' />
      <section className='py-1 px-4 md:px-16'>
        <div className='mx-auto max-w-screen-lg'>
          <div className='flex items-center justify-between py-1'>
            <Link href='/'>
              <a className='flex shrink-0'>
                <span className='block lg:hidden'>
                  <Image
                    src='/images/logo-compact.svg'
                    alt='logo'
                    width={32}
                    height={32}
                  />
                </span>
                <span className='hidden lg:block'>
                  <Image
                    src='/images/logo.svg'
                    alt='logo'
                    width={160}
                    height={32}
                  />
                </span>
              </a>
            </Link>
            <div id='search-form' className='mx-4 max-w-4xl grow md:mx-10'>
              <span className='md:hidden'>
                <SearchFormCompact />
              </span>
              <span className='hidden md:block'>
                <SearchForm />
              </span>
            </div>
            <div>
              <span className='hidden md:block'>
                <button className='rounded bg-red-500 px-6 py-1 font-semibold text-white focus:outline-none focus:ring-4 focus:ring-red-500/30'>
                  Sell
                </button>
              </span>
              <span className='md:hidden'>
                <button className='rounded border px-2 py-1 font-semibold focus:outline-none focus:ring-4 focus:ring-red-500/30'>
                  Login
                </button>
              </span>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
