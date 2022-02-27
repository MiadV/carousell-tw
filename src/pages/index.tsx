import type { NextPage } from 'next';
import SEO from '@/components/SEO';
import { ThemeToggle } from '@/components/ThemeToggle';
import HeartIcon from '@/icons/HeartIcon';
import CommentIcon from '@/icons/CommentIcon';
import SearchIcon from '@/icons/SearchIcon';
import LocationIcon from '@/icons/LocationIcon';
import VerticalDotsIcon from '@/icons/VerticalDotsIcon';
import ChevronUpIcon from '@/icons/ChevronUpIcon';
import ChevronDownIcon from '@/icons/ChevronDownIcon';
import PlusIcon from '@/icons/PlusIcon';

const Home: NextPage = () => {
  return (
    <>
      <SEO />
      <div className='text-xl'>Recommended For you</div>
      <ThemeToggle />
      <HeartIcon />
      <CommentIcon />
      <SearchIcon />
      <LocationIcon />
      <VerticalDotsIcon />
      <ChevronUpIcon />
      <ChevronDownIcon />
      <PlusIcon />
    </>
  );
};

export default Home;
