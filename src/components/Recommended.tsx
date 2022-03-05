import { Fragment } from 'react';
import ProductItem from './ProductItem';
import { mockProducts } from '@/mockProducts';

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
