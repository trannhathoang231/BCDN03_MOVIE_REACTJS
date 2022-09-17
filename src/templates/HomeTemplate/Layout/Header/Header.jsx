import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";
import { history } from '../../../../App';
import _ from 'lodash';
import {
  UserOutlined
} from '@ant-design/icons';
import { TOKEN, USER_LOGIN } from '../../../../ulti/setting';
// import './Header.css'
// import logo from '../../../../../public/img/headTixLogo.png'


// import { Link, animateScroll as scroll } from "react-scroll"; 

function Header(props) {
  const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer)

  const renderLogin = () => {
    if (_.isEmpty(userLogin)) {
      return <Fragment>
        <button onClick={() => {
          history.push('/login')
        }} className="self-center px-2 py-3 rounded text-black">Log in</button>
        <button onClick={() => {
          history.push('/register')
        }} className="self-center px-2 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900 text-black pr-20">Register</button>
      </Fragment>
    }

    return <Fragment> <button onClick={() => {
      history.push('/profile')
    }} className="self-center px-2 py-3 rounded text-black ">{userLogin.hoTen} <span onClick={() => { history.push('/profile') }}><UserOutlined style={{ fontSize: '30px' }} /></span> </button>
      <button onClick={() => {
        localStorage.removeItem(USER_LOGIN);
        localStorage.removeItem(TOKEN);
        localStorage.removeItem("accessToken");
        history.push('/home');
        window.location.reload();
      }} className='text-blue-800 mr-7 pb-1'>Sign out</button>
    </Fragment>

  }

  return (
    <header className="p-1 bg-coolGray-100 text-coolGray-100 fixed w-full" id='headerRes' style={{ zIndex: '10', backgroundColor: 'rgba(255,255,255,.95)' }} >

   
      <div className="container flex justify-between h-16 mx-auto m-auto">
        <NavLink to='/' rel="noopener noreferrer" aria-label="Back to homepage" className="flex items-center text-black p-2 mx-8">
          <img src='/img/headTixLogo.png' style={{ width: '40px', height: '40px' }} alt="logo" className='w-10' />
        </NavLink >
        <ul className="items-stretch hidden space-x-3 lg:flex" style={{ paddingTop: '12px' }} id='navbarNav'>
          <li className="flex">
            <a rel="noopener noreferrer" href='/#lichChieu' className="flex items-center px-2 -mb-1 dark:text-violet-400 text-black dark:border-violet-400">Lịch Chiếu</a>
          </li>
          <li className="flex">
            <a rel="noopener noreferrer" href='/#cumrap' className="flex items-center px-2 -mb-1 dark:text-violet-400 text-black dark:border-violet-400">Cụm Rạp</a>
          </li>
          <li className="flex">
            <a rel="noopener noreferrer" href='/#news' className="flex items-center px-2 -mb-1 dark:text-violet-400 text-black dark:border-violet-400">Tin Tức</a>
          </li>
          <li className="flex">
            <a rel="noopener noreferrer" href='/#apps' className="flex items-center px-2 -mb-1 dark:text-violet-400 text-black dark:border-violet-400">Ứng dụng</a>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">

          {renderLogin()}

        </div>
        <button className="p-4 lg:hidden" type='button' data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100" >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>

          </svg>
        </button>
      </div>
    </header>



    // return (
    //     <header className="p-1 bg-coolGray-100 text-coolGray-100 fixed w-full" style={{ zIndex: '10', backgroundColor: 'rgba(255,255,255,.95)' }} >
    //         <div className="container flex justify-between h-16 mx-auto m-auto">
    //             <NavLink to='/home' rel="noopener noreferrer" aria-label="Back to homepage" className="flex items-center text-black p-2 mx-8">
    //                 <img src='/img/headTixLogo.png' style={{ width: '40px', height: '40px' }} alt="logo" className='w-10' />
    //             </NavLink>
    //             <ul className="items-stretch hidden space-x-3 lg:flex" style={{ paddingTop: '12px' }}>
    //                 <li className="flex">
    //                     <a rel="noopener noreferrer" href='#lichChieu' className="flex items-center px-2 -mb-1 dark:text-violet-400 text-black dark:border-violet-400">Lịch Chiếu</a>
    //                 </li>
    //                 <li className="flex">
    //                     <a rel="noopener noreferrer" href='/contact' className="flex items-center px-2 -mb-1 dark:text-violet-400 text-black dark:border-violet-400">Liên Hệ</a>
    //                 </li>
    //                 <li className="flex">
    //                     <a rel="noopener noreferrer" href='news' className="flex items-center px-2 -mb-1 dark:text-violet-400 text-black dark:border-violet-400">Tin Tức</a>
    //                 </li>
    //                 <li className="flex">
    //                     <a rel="noopener noreferrer" to='/app' className="flex items-center px-2 -mb-1 dark:text-violet-400 text-black dark:border-violet-400">Ứng dụng</a>
    //                 </li>
    //             </ul>
    //             <div className="items-center flex-shrink-0 hidden lg:flex">

    //                 {renderLogin()}

    //             </div>
    //             <button className="p-4 lg:hidden">
    //                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
    //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
    //                 </svg>
    //             </button>
    //         </div>
    //     </header>

    // )

  )
}

export default Header