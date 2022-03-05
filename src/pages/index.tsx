import type { NextPage } from 'next';
import SEO from '@/components/SEO';
import Header from '@/components/Header';
import NoticeCard from '@/components/NoticeCard';
import HeroSlider from '@/components/HeroSlider';
import Categories from '@/components/Categories';
import Recommended from '@/components/Recommended';
import DownloadApp from '@/components/DownloadApp';
import Footer from '@/components/Footer';
import FloatingSellButton from '@/components/FloatingSellButton';

const Home: NextPage = () => {
  return (
    <>
      <SEO />
      <Header />
      <main className='px-4 md:px-16'>
        <div className='mx-auto max-w-screen-xl'>
          <NoticeCard classname='mt-4 md:hidden' />
          <HeroSlider classname='mt-4' />
          <Categories classname='mt-12' />
          <Recommended classname='mt-12' />
        </div>
      </main>
      <DownloadApp classname='hidden md:block mt-12' />
      <div className='mx-auto mt-12 w-11/12 border-t border-dashed border-gray-500'></div>
      <Footer classname='my-12' />
      <FloatingSellButton className='md:hidden' />
    </>
  );
};

export default Home;
