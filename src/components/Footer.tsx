const Footer: React.FC<{ classname?: string }> = ({ classname }) => {
  return (
    <footer className={`mx-auto max-w-screen-xl ${classname}`}>
      <span className='block text-xs font-semibold'>Top searches</span>
    </footer>
  );
};

export default Footer;
