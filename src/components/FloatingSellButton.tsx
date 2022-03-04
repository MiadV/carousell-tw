import PlusIcon from '@/icons/PlusIcon';

const FloatingSellButton: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <button
      className={`fixed bottom-4 right-4 flex items-center rounded-full bg-red-500 py-3 px-4 font-semibold text-white shadow-xl ${className}`}
    >
      <PlusIcon className='mr-2' /> Sell
    </button>
  );
};

export default FloatingSellButton;
