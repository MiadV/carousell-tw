import { FreeMode, Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import Image from 'next/image';
import { categories } from '@/mockData';

const Categories: React.FC<{ classname?: string }> = ({ classname }) => {
  return (
    <section id='categories' className={classname}>
      <h3 className='block text-lg font-semibold md:text-2xl'>
        Explore Caroosell
      </h3>
      <div className='mt-4'>
        <Swiper
          modules={[FreeMode, Navigation, Scrollbar]}
          freeMode
          navigation
          scrollbar={{
            hide: true,
          }}
          slidesPerView='auto'
          spaceBetween={32}
          breakpoints={{
            '768': {
              spaceBetween: 24,
            },
          }}
          className='!py-4 pl-2'
        >
          {categories.map((item, i) => (
            <SwiperSlide key={i} className='!w-auto'>
              <Link href={'/#'}>
                <a className='group flex w-[60px] flex-col items-center justify-center md:w-[90px]'>
                  <div className='relative flex items-center justify-center'>
                    <span className='dark:gray-600 absolute h-[68px] w-[68px] rounded-full bg-gray-300/50 opacity-100 transition-all duration-300 group-hover:-translate-y-1 group-hover:opacity-100 dark:bg-teal-600/50 md:h-[78px] md:w-[78px] md:opacity-0' />
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      height={70}
                      width={70}
                      className='block transition-all duration-300 ease-in-out group-hover:-translate-y-1'
                    />
                  </div>
                  <span className='mt-4 block text-center text-sm'>
                    {item.title}
                  </span>
                </a>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Categories;
