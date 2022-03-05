import Link from 'next/link';
import NoticeBar from './NoticeBar';
import TopBar from './TopBar';
import { SearchForm, SearchFormCompact } from './SearchForm';
import { CompactLogo, FullLogo } from './Logo';
import { ThemeToggle } from './ThemeToggle';

const Header = () => {
  return (
    <header className='sticky inset-x-0 top-0 z-20 border-b border-gray-100 bg-white shadow-md dark:border-gray-600 dark:bg-gray-900'>
      <NoticeBar classname='hidden md:flex' />
      <TopBar classname='hidden md:block' />
      <section className='py-1 px-4 md:px-16'>
        <div className='mx-auto max-w-screen-xl'>
          <div className='flex items-center justify-between py-1'>
            <Link href='/'>
              <a className='flex shrink-0'>
                <span className='block lg:hidden'>
                  <CompactLogo />
                </span>
                <span className='hidden lg:block'>
                  <FullLogo />
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
                <button className='rounded bg-red-500 px-6 py-1 font-semibold text-white transition-all duration-300 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-500/30'>
                  Sell
                </button>
              </span>
              <span className='flex items-center justify-center md:hidden'>
                <ThemeToggle />
              </span>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
