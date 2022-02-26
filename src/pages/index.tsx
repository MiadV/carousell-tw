import type { NextPage } from 'next';
import SEO from '@/components/SEO';

const Home: NextPage = () => {
  return (
    <>
      <SEO />
      <div className='text-xl'>Recommended For you</div>
    </>
  );
};

export default Home;
