import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full flex px-4 my-2'>
        <div className='ring-1 ring-gray-500 rounded-full px-4 hidden md:block'>
            <input type="search" className='outline-none p-2 text-sm text-gray-500' placeholder='Search...' />
        </div>
        <div className='flex justify-end w-full items-center'>
            <div className='flex flex-col leading-3 justify-center items-center'>
                <span className='text-sm text-gray-900'>Shivam</span>
                <span className='text-xs text-gray-500 text-end'>Admin</span>
            </div>
        </div>
    </div>
  )
}

export default Navbar