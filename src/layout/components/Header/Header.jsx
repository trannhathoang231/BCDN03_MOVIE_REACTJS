import React from 'react';
import './Header.css'

function Header() {
  return (
    <div className='container-header '>
     
      <div className="logo">
        <img src="../../../img/headTixLogo.png" alt="Logo" />
      </div>
      <div className="nav-menu">
        <ul>
          <li>Lịch Chiếu</li>
          <li>Cụm Rạp</li>
          <li>Tin Tức</li>
          <li>Ứng Dụng</li>
        </ul>
      </div>
      <div className="login">
        <a href="">Đăng Nhập</a>
        <a href="">Đăng Ký</a>
      </div>
      
    </div>
  )
}

export default Header