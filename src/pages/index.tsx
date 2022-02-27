import type { NextPage } from 'next';
import SEO from '@/components/SEO';
import { ThemeToggle } from '@/components/ThemeToggle';

const Home: NextPage = () => {
  return (
    <>
      <SEO />
      <div className='text-xl'>Recommended For you</div>
      <ThemeToggle />
    </>
  );
};

export default Home;
