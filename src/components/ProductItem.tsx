import Image from 'next/image';
import Link from 'next/link';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import HeartIcon from '@/icons/HeartIcon';
import { mockProducts } from '@/mockProducts';
import { CompactLogo } from './Logo';

dayjs.extend(relativeTime);

const ProductItem: React.FC<{ product: typeof mockProducts[number] }> = ({
  product,
}) => {
  return (
    <Link href={'/#'}>
      <a className='flex flex-col items-start rounded border border-gray-100 p-2 transition-all hover:border-teal-500 hover:shadow-xl dark:border-gray-600 dark:hover:border-teal-500'>
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
        <div className='relative'>
          <Image
            src={product.photo}
            alt={product.title}
            height={300}
            width={300}
            className='rounded'
            objectFit='cover'
          />
          {product.protected && (
            <span className='absolute left-1.5 bottom-3 flex items-center rounded-md bg-gray-100 px-2 py-1 text-sm'>
              <CompactLogo width={14} height={14} />{' '}
              <span className='ml-1'>Protection</span>
            </span>
          )}
        </div>

        <div className='mt-1 space-y-1'>
          <p className='h-10 text-sm font-semibold'>
            {product.title.slice(0, 60) + '...'}
          </p>
          <p className='text-lg font-semibold'>{product.price}</p>
          <p className='text-sm text-gray-600 dark:text-gray-300'>
            {product.state}
          </p>
        </div>
        <div className='mt-4 flex items-center text-gray-600 dark:text-gray-300'>
          <HeartIcon height={16} width={16} />{' '}
          {product.likes > 0 && (
            <span className='ml-1 text-sm'>{product.likes}</span>
          )}
        </div>
      </a>
    </Link>
  );
};

export default ProductItem;
