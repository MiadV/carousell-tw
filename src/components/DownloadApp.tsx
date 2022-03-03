import Image from 'next/image';

const DownloadApp: React.FC<{ classname?: string }> = ({ classname }) => {
  return (
    <section
      id='download-app'
      className={`relative ${classname}`}
      style={{ backgroundImage: "url('/images/red-bg.png')" }}
    >
      <div className='mx-auto flex max-w-screen-lg items-center justify-center space-x-8 py-6 px-4'>
        <Image
          src={'/images/app-cat.png'}
          alt='bg-red'
          height={458}
          width={461}
          className='block'
        />
        <div className='space-y-6 text-gray-50'>
          <h1 className='text-4xl font-semibold'>Everyone Wins on Caroosell</h1>
          <p className='text-xl'>
            Unlock exclusive features when you download the Caroosell app today!
          </p>
          <div className='flex space-x-2'>
            <a href='#' className='block'>
              <img
                src='/images/app_store_download_button.svg'
                alt='download app'
                className='h-12'
              />
            </a>
            <a href='#' className='block'>
              <img
                src='/images/google_play_download_button.svg'
                alt='download app'
                className='h-12'
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
