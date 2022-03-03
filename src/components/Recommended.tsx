const Recommended: React.FC<{ classname?: string }> = ({ classname }) => {
  return (
    <section id='recommended-products' className={classname}>
      <h3 className='block text-2xl font-semibold'>Recommended For you</h3>
    </section>
  );
};

export default Recommended;
