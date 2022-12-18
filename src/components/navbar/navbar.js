import React from 'react'
import "./navbar.css"

export default function navbar() {
  return (
    <>
      <div className='box'>
        <div className='navbar sticky top-0 p-5 lg:flex flex-row gap-8 items-center bg-black'>
          <a className='text-white font-medium lg:ml-64 md:ml-96 ml-12 w-64' href="/">Newton School</a>
          <button data-collapse-toggle="navbar-dropdown" type="button" class="inline-flex  ml-64 items-center p-2 md:ml-10 text-sm text-gray-400 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
          <div className='hidden w-full lg:flex flex-row gap-8 items-center'>
          <a className='text-gray-400 hover:text-white ml-28' href="/">Courses</a>
          <a className='text-gray-400 hover:text-white' href="/">Hire from Us</a>
          <a className='text-gray-400 hover:text-white' href="/">Blog</a>
          <a className='text-gray-400 hover:text-white' href="/">Coding Contest</a>
          <a className='text-gray-400 hover:text-white' href="/">About Us</a>
          <a className='text-gray-400 hover:text-white' href="/">Contact</a>
          <button className='bg-blue-600 text-white w-20 p-2 rounded-full'>Login</button>
          </div>
        </div>
        <div className='items'></div>
        <div className='ok'></div>
      </div>
    </>
  )
}
