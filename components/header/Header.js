//front-end
import Image from 'next/image'
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon
} from '@heroicons/react/solid'
import { DateRangePicker } from 'react-date-range'
//back-end
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

function Header ({ placeholder }) {
  const router = useRouter()
  const [searchInput, setSearchInput] = useState('')
  const [noOfGuests, setNoOfGuests] = useState(1)
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  const selectionRange = {
    startDate,
    endDate,
    key: 'selection'
  }

  const resetInput = () => {
    setSearchInput('')
  }

  const handleSelect = ranges => {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }

  const search = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests
      }
    })
  }

  return (
    <header className='headerDiv'>
      <div onClick={() => router.push('/')} className='headerLogo'>
        <Image
          src='https://links.papareact.com/qd3'
          layout='fill'
          objectFit='contain'
          objectPosition='left'
        />
      </div>
      <div
        className='
      flex 
      items-center
      flex-grow
      rounded-full
      md:border-2
      md:shadow-md
      py-2
      '
      >
        <input
          type='text'
          value={searchInput}
          onChange={t => setSearchInput(t.target.value)}
          placeholder={placeholder || 'Start your search'}
          className='headerSearch'
        />
        <SearchIcon
          className='
          hidden
          md:inline-flex
          h-8
          cursor-pointer
          bg-red-400
          rounded-full
          text-white
          md:mx-2
        '
        />
      </div>
      <div
        className='
        justify-end
        space-x-4
        text-gray-500
        flex 
        items-center'
      >
        <p className='hidden md:inline-flex cursor-pointer'>Become a host</p>
        <GlobeAltIcon className='headerLink' />
        <div
          className='
            flex
            items-center
            space-x-2
            border-2
            p-2
            rounded-full
        '
        >
          <MenuIcon className='headerLink' />
          <UserCircleIcon className='headerLink' />
        </div>
      </div>
      {searchInput && (
        <div
          className='
        flex 
        flex-col 
        col-span-3
        mx-auto
        mt-1
        '
        >
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['#FD5B61']}
            onChange={handleSelect}
          />
          <div className='flex items-center border-b-2 my-4'>
            <h2
              className='
            text-2xl 
            pl-2 
            flex-grow
            font-semibold
            '
            >
              Number of Guests
            </h2>
            <UsersIcon className='h-5' />
            <input
              value={noOfGuests}
              min={1}
              onChange={t => setNoOfGuests(t.target.value)}
              type='number'
              className='
            w-12
            pl-2
            text-lg
            outline-none
            text-red-400
            '
            />
          </div>
          <div className='flex'>
            <button onClick={resetInput} className='flex-grow text-gray-500'>
              Cancel
            </button>
            <button onClick={search} className='flex-grow text-red-400'>
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
