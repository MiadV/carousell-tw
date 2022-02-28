import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import ChevronDownIcon from '@/icons/ChevronDownIcon';
import SearchIcon from '@/icons/SearchIcon';

const searchModes = [{ title: 'Items' }, { title: 'Users' }];

const SearchForm = () => {
  const [searchMode, setSearchMode] = useState(searchModes[0]);

  return (
    <form className='flex rounded bg-gray-100 p-1'>
      <Listbox value={searchMode} onChange={setSearchMode}>
        <div className='relative'>
          <Listbox.Button className='flex w-full cursor-default py-2 px-4'>
            <span className='block truncate'>{searchMode.title}</span>
            <span className='pointer-events-none pr-2'>
              <ChevronDownIcon />
            </span>
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
                      selected ? 'bg-slate-100' : ''
                    }`
                  }
                  value={item}
                >
                  <>
                    <span>{item.title}</span>
                  </>
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>

      <input type='text' placeholder='Search for an item or user...' />
      <input type='text' placeholder='Location' />
      <Listbox value={searchMode} onChange={setSearchMode}>
        <div className='relative'>
          <Listbox.Button className='flex w-full cursor-default py-2 px-4'>
            <span className='block truncate'>{searchMode.title}</span>
            <span className='pointer-events-none pr-2'>
              <ChevronDownIcon />
            </span>
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
                      selected ? 'bg-slate-100' : ''
                    }`
                  }
                  value={item}
                >
                  <>
                    <span>{item.title}</span>
                  </>
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
      <button type='submit'>
        <SearchIcon />
      </button>
    </form>
  );
};

export default SearchForm;
