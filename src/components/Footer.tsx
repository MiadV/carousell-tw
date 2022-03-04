import Link from 'next/link';
import { Disclosure, Transition } from '@headlessui/react';
import { topSearches, footerCategories, footerLinks } from '@/mockData';
import ChevronDown from '@/icons/ChevronDown';

const Footer: React.FC<{ classname?: string }> = ({ classname }) => {
  return (
    <footer className={`mx-auto max-w-screen-xl px-4 md:px-16 ${classname}`}>
      <TopSearches />
      <div
        id='seperator'
        className='mx-auto mt-4 w-full border-t border-gray-200 dark:border-gray-600'
      ></div>
      <FooterCategories className='mt-8 hidden md:block' />
      <FooterCategoriesAccordion className='mt-8 md:hidden' />

      <div
        id='seperator'
        className='mx-auto mt-8 hidden w-full border-t border-gray-200 dark:border-gray-600 md:block'
      ></div>
      <div className='my-8 mx-auto flex max-w-xs flex-col text-xs md:max-w-screen-xl md:flex-row md:justify-between'>
        <div className='flex items-center justify-center'>
          <p className='text-center dark:text-gray-300'>
            Copyright © 2022{' '}
            <a
              href='https://github.com/miadv'
              className='font-semibold hover:text-teal-500 hover:underline dark:hover:text-teal-500'
            >
              Miad Vosoughi
            </a>
          </p>
        </div>
        <div className='mt-4 flex flex-wrap items-center justify-center gap-2 md:mt-0'>
          {footerLinks.map((link) => (
            <Link key={link.title} href={link.href}>
              <a className='transition-all hover:text-teal-600 hover:underline dark:hover:text-teal-400'>
                {link.title}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const TopSearches: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div id='top-searches' className={className}>
      <span className='mb-4 block text-xs font-semibold'>Top searches</span>
      <div className='flex flex-wrap justify-start gap-1 text-xs'>
        {topSearches.map((item) => (
          <Link key={item.title} href={item.href}>
            <a className="text-teal-500 after:ml-[1ch] after:text-gray-500 after:content-['|'] last:after:hidden">
              {item.title}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

const FooterCategories: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div id='footer-categories' className={className}>
      {Object.keys(footerCategories).map((cat) => (
        <>
          <span key={cat} className='mb-2 mt-8 block text-xs font-semibold'>
            {cat}
          </span>

          <div className='flex flex-wrap justify-start gap-1 text-xs'>
            {footerCategories[cat].map((links) => (
              <Link key={links.title} href={links.href}>
                <a className="after:ml-[1ch] after:text-gray-500 after:content-['•'] last:after:hidden">
                  <span className='transition-all hover:text-teal-600 hover:underline dark:hover:text-teal-400'>
                    {links.title}
                  </span>
                </a>
              </Link>
            ))}
          </div>
        </>
      ))}
    </div>
  );
};

const FooterCategoriesAccordion: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <div id='footer-categories-accordion' className={className}>
      {Object.keys(footerCategories).map((cat) => (
        <div
          key={cat}
          className='my-2 border-b border-gray-200 py-2 dark:border-gray-600'
        >
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className='flex w-full justify-between'>
                  <span className='text-sm font-semibold'>{cat}</span>
                  <ChevronDown
                    className={`transition-all duration-300 ${
                      open ? 'rotate-[-180deg]' : ''
                    }`}
                  />
                </Disclosure.Button>
                <Transition
                  enter='transition origin-top duration-300 ease-in-out'
                  enterFrom='transform scale-y-0 opacity-0'
                  enterTo='transform scale-y-100 opacity-1'
                  leave='transition origin-top duration-300 ease-in-out'
                  leaveFrom='transform scale-y-100 opacity-1'
                  leaveTo='transform scale-y-0 opacity-0'
                >
                  <Disclosure.Panel className='space-y-2 py-2 text-sm text-gray-600 dark:text-gray-400'>
                    {footerCategories[cat].map((links) => (
                      <Link key={links.title} href={links.href}>
                        <a className='block transition-all hover:text-teal-600 hover:underline dark:hover:text-teal-400'>
                          {links.title}
                        </a>
                      </Link>
                    ))}
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        </div>
      ))}
    </div>
  );
};
