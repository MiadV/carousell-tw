import Image from 'next/image';
import Link from 'next/link';
import { Navigation, Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { slides } from '@/mockData';

const HeroSlider: React.FC<{ classname?: string }> = ({ classname }) => {
  return (
    <section id='hero-slider' className={classname}>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        navigation
        autoplay={{
          delay: 5000,
        }}
        pagination
        spaceBetween={16}
        slidesPerView={1}
        breakpoints={{
          '768': {
            slidesPerView: 2,
          },
        }}
      >
        {slides.map((item, i) => (
          <SwiperSlide key={i}>
            <Link href={item.href}>
              <a>
                <Image
                  src={item.image}
                  alt='hero-slides'
                  height={610}
                  width={1500}
                  className='dark:gray-600 rounded bg-gray-200 dark:border-b dark:border-gray-600'
                />
              </a>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
