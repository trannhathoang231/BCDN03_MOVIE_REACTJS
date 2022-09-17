import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";
import { history } from '../../../../App';
import _ from 'lodash';
import useCollapse from 'react-collapsed'
import {
    MenuOutlined,
    UserOutlined
} from '@ant-design/icons';
import { TOKEN, USER_LOGIN } from '../../../../ulti/setting';

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

    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

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

                <div className="collapsible">

                    <div className="px-4 lg:hidden " {...getToggleProps()}>
                        {isExpanded ? <MenuOutlined /> : <MenuOutlined />}
                    </div>

                    <div {...getCollapseProps()}>
                        <div className="contentZ">
                            <a rel="noopener noreferrer" href="/#lichChieu" className="flex items-center -mb-1 dark:text-violet-400 text-black dark:border-violet-400 bg-light px-10 py-3">Lịch Chiếu</a>
                            <a rel="noopener noreferrer" href='/#cumrap' className="flex items-center  -mb-1 dark:text-violet-400 text-black dark:border-violet-400 collapse show bg-light px-10 py-3" >Cụm Rạp</a>
                            <a rel="noopener noreferrer" href='/#news' className="flex items-center -mb-1 dark:text-violet-400 text-black dark:border-violet-400 bg-light px-10 py-3">Tin Tức</a>
                            <a rel="noopener noreferrer" href='/#apps' className="flex items-center -mb-1 dark:text-violet-400 text-black dark:border-violet-400 bg-light px-10 py-3">Ứng dụng</a>
                            <button onClick={() => {
                                localStorage.removeItem(USER_LOGIN);
                                localStorage.removeItem(TOKEN);
                                localStorage.removeItem("accessToken");
                                history.push('/home');
                                window.location.reload();
                            }} className='text-blue-800 bg-light px-10 py-3'>Đăng xuất</button>
                        </div>

                    </div>

                </div>

            </div>
        </header>

    )
}

export default Header