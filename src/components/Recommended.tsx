import { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import HeartIcon from '@/icons/HeartIcon';
import { mockProducts } from '@/mockProducts';

dayjs.extend(relativeTime);

const Recommended: React.FC<{ classname?: string }> = ({ classname }) => {
  return (
    <section id='recommended-products' className={classname}>
      <h3 className='block text-lg font-semibold md:text-2xl'>
        Recommended For you
      </h3>

      <div className='mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'>
        {mockProducts.map((product) => (
          <Fragment key={product.id}>
            <ProductItem product={product} />
          </Fragment>
        ))}
      </div>
      <div className='my-8 flex justify-center'>
        <button className='rounded border py-2 px-4 font-semibold transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-600'>
          View more
        </button>
      </div>
    </section>
  );
};

export default Recommended;

const ProductItem: React.FC<{ product: typeof mockProducts[number] }> = ({
  product,
}) => {
  return (
    <Link href={'/#'}>
      <a className='block rounded border border-gray-100 p-2 transition-all hover:border-teal-500 hover:shadow-xl dark:border-gray-600 dark:hover:border-teal-500'>
        <div className='mb-2 flex items-center justify-start'>
          <span>
            <Image
              src={product.avatar}
              alt={product.username}
              height={32}
              width={32}
              className='rounded-full border-gray-300'
            />
          </span>
          <div className='ml-2'>
            <span className='block text-sm font-semibold'>
              {product.username}
            </span>
            <span className='block text-xs'>
              {dayjs(product.uploaded_at).from(dayjs('2021-11-17T20:46:55Z'))}
            </span>
          </div>
        </div>
        <div>
          <Image
            src={product.photo}
            alt={product.title}
            height={300}
            width={300}
            className='rounded'
            objectFit='cover'
          />
        </div>
        <div className='mt-1 space-y-1'>
          <p className='text-sm font-semibold'>{product.title}</p>
          <p className='text-base font-semibold'>{product.price}</p>
          <p className='text-sm'>{product.state}</p>
        </div>

        <div className='mt-4'>
          <HeartIcon height={16} width={16} />
        </div>
      </a>
    </Link>
  );
};
