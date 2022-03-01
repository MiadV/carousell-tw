import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import SearchIcon from '@/icons/SearchIcon';
import LocationIcon from '@/icons/LocationIcon';
import ChevronUpDown from '@/icons/ChevronUpDown';
import Button from './Button';

export const SearchFormCompact = () => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className='flex items-center rounded bg-gray-100 px-3 py-1 text-gray-600'
    >
      <SearchIcon className='pointer-events-none h-4 w-4' />
      <input
        type='text'
        placeholder='Search Caroosell...'
        className='w-full border-none bg-transparent px-1 text-sm placeholder:text-gray-400 focus:ring-0'
      />
    </form>
  );
};

const searchModes = [{ title: 'Items' }, { title: 'Users' }];
const distances = ['+km', '0.5km', '1km', '1.5km', '2km'];

export const SearchForm = () => {
  const [searchMode, setSearchMode] = useState(searchModes[0]);
  const [distance, setDistance] = useState(distances[0]);

  return (
    <form
      className='flex w-full rounded bg-gray-100 text-gray-600 focus-within:outline-none focus-within:ring-4 focus-within:ring-teal-500/40 focus-within:ring-offset-1 focus-within:ring-offset-teal-500'
      onSubmit={(e) => e.preventDefault()}
    >
      <Listbox value={searchMode} onChange={setSearchMode}>
        <div className='relative'>
          <Listbox.Button
            className={({ open }) =>
              `flex w-full items-center justify-between py-2 px-4 transition-colors duration-150 focus:bg-white focus:outline-none ${
                open ? 'bg-white' : 'bg-transparent'
              }`
            }
          >
            <span className='block truncate'>{searchMode.title}</span>
            <ChevronUpDown className='pointer-events-none h-5 w-5' />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className='absolute max-h-60 w-full overflow-auto rounded-md py-1 shadow-lg'>
              {searchModes.map((item, i) => (
                <Listbox.Option
                  key={i}
                  className={({ active, selected }) =>
                    `select-none p-2 ${active ? 'bg-gray-100' : ''} ${
                      selected ? 'bg-teal-100' : ''
                    }`
                  }
                  value={item}
                >
                  <span>{item.title}</span>
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
      <div className='flex shrink grow px-2 transition-colors duration-150 focus-within:bg-white'>
        <input
          type='text'
          placeholder='Search...'
          className='w-full min-w-[80px] border-none bg-transparent focus:ring-0'
        />
      </div>
      <div className='flex items-center border-x border-white px-2 transition-colors duration-150 focus-within:bg-white'>
        <LocationIcon className='mr-1 h-4 w-4' />
        <input
          type='text'
          placeholder='Australia'
          className='w-[120px] border-none bg-transparent focus:ring-0'
        />
      </div>
      <Listbox value={distance} onChange={setDistance}>
        <div className='relative min-w-[100px] shrink-0'>
          <Listbox.Button
            className={({ open }) =>
              `flex w-full items-center justify-between py-2 px-4 transition-colors duration-150 focus:bg-white focus:outline-none ${
                open ? 'bg-white' : 'bg-transparent'
              }`
            }
          >
            <span className='block truncate'>{distance}</span>
            <ChevronUpDown className='pointer-events-none h-5 w-5' />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className='absolute max-h-60 w-full overflow-auto rounded-md border bg-white py-1 shadow-xl'>
              {distances.map((item, i) => (
                <Listbox.Option
                  key={i}
                  className={({ active, selected }) =>
                    `select-none p-2 ${active ? 'bg-gray-100' : ''} ${
                      selected ? 'bg-teal-100' : ''
                    }`
                  }
                  value={item}
                >
                  <span>{item}</span>
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
      <Button type='submit'>
        <SearchIcon className='h-4 w-4 text-white' />
      </Button>
    </form>
  );
};
