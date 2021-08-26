//front-end
import Image from 'next/image'
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon
} from '@heroicons/react/outline'
//back-end

function Header () {
  return (
    <header className='headerDiv'>
      <div className='headerLogo'>
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
          placeholder='Start your search'
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
    </header>
  )
}

export default Header
