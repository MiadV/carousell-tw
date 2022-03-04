const Recommended: React.FC<{ classname?: string }> = ({ classname }) => {
  return (
    <section id='recommended-products' className={classname}>
      <h3 className='block text-lg font-semibold md:text-2xl'>
        Recommended For you
      </h3>
    </section>
  );
};

export default Recommended;
