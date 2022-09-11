import React from 'react';
import { NavLink } from 'react-router-dom';
// import './Header.css'
import logo from '../../../../img/headTixLogo.png'
function Header(props) {
  return (
    <header className="p-1 bg-coolGray-100 text-coolGray-100 fixed w-full" style={{zIndex:'10',backgroundColor:'rgba(255, 255, 255, 0.8)'}} >
      <div className="container flex justify-between h-16 mx-auto ">
        <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center text-black p-2">
          <img src={logo} alt="logo" className='w-10' />
        </a>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <NavLink rel="noopener noreferrer" to='/home' className="flex items-center px-4 -mb-1 dark:text-violet-400 text-black dark:border-violet-400">Lịch Chiếu</NavLink>
          </li>
          <li className="flex">
          <NavLink rel="noopener noreferrer" to='/contact' className="flex items-center px-4 -mb-1 dark:text-violet-400 text-black dark:border-violet-400">Liên Hệ</NavLink>
          </li>
          <li className="flex">
          <NavLink rel="noopener noreferrer" to='/news' className="flex items-center px-4 -mb-1 dark:text-violet-400 text-black dark:border-violet-400">Tin Tức</NavLink>
          </li>
          <li className="flex">
          <NavLink rel="noopener noreferrer" to='/app' className="flex items-center px-4 -mb-1 dark:text-violet-400 text-black dark:border-violet-400">Ứng dụng</NavLink>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <button className="self-center px-8 py-3 rounded text-black">Sign in</button>
          <button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900 text-black">Sign up</button>
        </div>
        <button className="p-4 lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </header>

  )
}

export default Header