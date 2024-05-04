import React from 'react'
import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-slate-400 shadow-md">
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-yellow-500'>Car </span>
            <span className='text-cyan-600'>Studio</span>
        </h1>
        <form action="" className='bg-slate-100 p-3 rounded-lg flex items-center '>
          <input className='bg-transparent focus:outline-none w-24 sm:w-64' type="text" placeholder='search...' />
          <FaSearch className='text-slate-400'/>
        </form>
        <ul className='flex gap-2 '>
          <Link to="/">
          <li className='hidden sm:inline text-slate-700 hover:underline'>Home</li>
          </Link>
          <Link to="/about">
          <li className=' hidden sm:inline text-slate-700 hover:underline'>About</li>
          </Link>
          <Link to="/sign-in">
          <li className='6  text-slate-700 hover:underline'>login</li>
          </Link>
        </ul>
    </div>
    </header>
  )
}
