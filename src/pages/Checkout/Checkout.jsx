import React, { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import style from './Checkout.module.css';
import { useEffect } from 'react';
import { datVeAction, layChiTietPhongVeAction } from './../../redux/actions/QuanLyDatVeAction';
import { CloseOutlined, UserOutlined, CheckOutlined, HomeOutlined } from '@ant-design/icons'
import './Checkout.css';
import { DAT_VE } from '../../redux/actions/types/QuanLyDatVeType';
import _ from 'lodash';
import { ThongTinDatVe } from './../../_core/models/ThongTinDatVe';
import { Button, Tabs } from 'antd';
import { capNhatThongTinNguoiDungAction, layThongTinNguoiDungAction } from '../../redux/actions/QuanLyNguoiDungAction';
import moment from 'moment';
import { useFormik } from 'formik';
import { history } from '../../App';
import { TOKEN, USER_LOGIN } from '../../ulti/setting';
import { NavLink } from 'react-router-dom';

function Checkout(props) {

  let { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer);

  let { chiTietPhongVe, danhSachGheDangDat } = useSelector(state => state.QuanLyDatVeReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    const action = layChiTietPhongVeAction(props.match.params.id);
    dispatch(action);
  }, []);

  let { thongTinPhim, danhSachGhe } = chiTietPhongVe;

  // console.log("userLogin", userLogin.taiKhoan);

  const renderSeats = () => {
    return danhSachGhe.map((ghe, index) => {
      let classGheVip = ghe.loaiGhe === 'Vip' ? 'gheVip' : '';
      let classGheDaDat = ghe.daDat === true ? 'gheDaDat' : '';
      let classGheDangDat = '';

      let indexGheDangDat = danhSachGheDangDat.findIndex(gheDD => gheDD.maGhe === ghe.maGhe);

      let clasGheDaDuocDat = '';
      if (userLogin.taiKhoan === ghe.taiKhoanNguoiDat) {
        clasGheDaDuocDat = 'gheDaDuocDat';
      }

      if (indexGheDangDat !== -1) {
        classGheDangDat = 'gheDangDat';
      }

      return <Fragment key={index}>
        <button onClick={() => {
          dispatch({
            type: DAT_VE,
            gheDuocChon: ghe
          })
        }} disabled={ghe.daDat} className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat} ${clasGheDaDuocDat} text-center`}>
          {ghe.daDat ? clasGheDaDuocDat !== '' ? <UserOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /> : <CloseOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /> : ghe.stt}
        </button>
        {(index + 1) % 16 === 0 ? <br /> : ''}
      </Fragment>
    })
  }

  return (
    <div className='min-h-screen pt-5'>
      <div className='grid grid-cols-12'>
        <div className='xl:col-span-9 sm:col-span-12'>
          <div className='flex flex-col items-center mt-5'>
            <div className='bg-black' style={{ width: '80%', height: 15 }}></div>
            <div className={`${style['trapezoid']} text-center`}>
              <h3 className='mt-3 text-black'>Màn hình</h3>
            </div>
            <div>
              {renderSeats()}
            </div>
          </div>

          <div className='mt-5 flex justify-center'>
            <table className='divide-y divide-gray-200 w-2/3'>
              <thead className='bg-gray-50 p-5'>
                <tr>
                  <th>Ghế chưa đặt</th>
                  <th>Ghế đang đặt</th>
                  <th>Ghế vip</th>
                  <th>Ghế đã đặt</th>
                  <th>Ghế mình đặt</th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200'>
                <tr className='text-center'>
                  <td><button className='ghe'><CheckOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /></button></td>
                  <td><button className='ghe gheDangDat'><CheckOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /></button></td>
                  <td><button className='ghe gheVip'><CheckOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /></button></td>
                  <td><button className='ghe gheDaDat'><CheckOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /></button></td>
                  <td><button className='ghe gheDaDuocDat'><CheckOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /></button></td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>

        <div className='xl:col-span-3 sm:col-span-12 pt-10'>
          <h3 className='text-green-400 text-center text-2xl'>
            {danhSachGheDangDat.reduce((tongTien, ghe, index) => {
              return tongTien += ghe.giaVe;
            }, 0).toLocaleString()} đ
          </h3>
          <hr />
          <h3 className='text-xl mt-2'>{thongTinPhim.tenPhim}</h3>
          <p>Địa điểm: {thongTinPhim.tenCumRap} - {thongTinPhim.tenRap}</p>
          <p>Ngày chiếu: {thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu}</p>
          <hr />
          <div className='flex flex-row my-5'>
            <div className='w-4/5'>
              <span className='text-red-400 text-lg'>Ghế</span>

              {_.sortBy(danhSachGheDangDat, ['stt']).map((gheDD, index) => {
                return <span key={index} className='text-green-500 text-xl'> {gheDD.stt} </span>
              })}

            </div>
            <div className='text-right col-span-1'>
              <span className='text-green-800 text-lg'>
                {danhSachGheDangDat.reduce((tongTien, ghe, index) => {
                  return tongTien += ghe.giaVe;
                }, 0).toLocaleString()}
              </span>
            </div>
          </div>
          <hr />
          <div className='my-5'>
            <i>Email</i> <br />
            {userLogin.email}
          </div>
          <hr />
          <div className='my-5'>
            <i>Phone</i> <br />
            {userLogin.soDT}
          </div>
          <hr />
          <div className='mb-0 h-full flex flex-col items-center' style={{ marginBottom: 0 }}>
            <div onClick={() => {
              const thongTinDatVe = new ThongTinDatVe();
              thongTinDatVe.maLichChieu = props.match.params.id;
              thongTinDatVe.danhSachVe = danhSachGheDangDat;
              // console.log(thongTinDatVe);
              dispatch(datVeAction(thongTinDatVe));
            }} className='bg-green-500 text-while w-full text-center py-3 font-bold text-2xl cursor-pointer'>ĐẶT VÉ</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CheckoutTab(props) {
//   const operations = <Button> Extra Action</Button>
  const { tabActive } = useSelector(state => state.QuanLyDatVeReducer);
  const dispatch = useDispatch();
  let { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer);
  // console.log("userLogin", userLogin);

  const operations = <Fragment>
    {!_.isEmpty(userLogin) ? <Fragment> <button disabled onClick={()=>{
        history.push('/profile')
    }} className="text-2xl">Xin chào {userLogin.hoTen} <span><UserOutlined style={{fontSize:'30px'}}/></span></button> <button onClick={()=> {
        localStorage.removeItem(USER_LOGIN);
        localStorage.removeItem(TOKEN);
        history.push('/home');
        window.location.reload();
    }} className='text-blue-800'>Sign out</button> </Fragment> :''}
  </Fragment>

  return <div className='p-5'>
    <Tabs tabBarExtraContent={operations} defaultActiveKey='1' activeKey={tabActive} onChange={(key) => {
      dispatch({
        type: 'CHANGE_TAB_ACTIVE',
        number: key
      })
      // console.log(key)
    }}>
      <Tabs.TabPane tab="01 CHỌN GHẾ & THANH TOÁN" key="1">
        <Checkout {...props} />
      </Tabs.TabPane>
      <Tabs.TabPane tab="02 KẾT QUẢ ĐẶT VÉ" key="2">
        <KetQuaDatVe {...props} />
      </Tabs.TabPane>
      <Tabs.TabPane tab="03 THÔNG TIN NGƯỜI DÙNG" key="3">
        <CapNhatThongTinNguoiDung {...props} />
      </Tabs.TabPane>
      <Tabs.TabPane tab={<div className='text-center' style={{display:'flex',justifyContent:'center',alignItems:'center'}}><NavLink to="/"><HomeOutlined style={{marginLeft:10,fontSize:25}}/></NavLink></div>} key="4">
        <KetQuaDatVe {...props} />
      </Tabs.TabPane>


      {/* <Tabs.TabPane disabled tab={<div className='rounded-2xl bg-green-400 text-white p-4 shadow-2xl'>Xin chào: {userLogin.hoTen}!</div>} key="4">
      </Tabs.TabPane> */}
    </Tabs>
  </div>
};

function KetQuaDatVe() {
  const { thongTinNguoiDung } = useSelector(state => state.QuanLyNguoiDungReducer);
  const dispatch = useDispatch()

  useEffect(() => {
    const action = layThongTinNguoiDungAction();
    dispatch(action);
  }, []);

  const renderTicketItem = () => {
    return thongTinNguoiDung?.thongTinDatVe?.map((nguoiDung, index) => {
      let { ngayDat, tenPhim, hinhAnh } = nguoiDung;
      return nguoiDung?.danhSachGhe?.map((ghe, index) => {
        return <div className="p-2 lg:w-1/3 md:w-1/2 w-full" key={index}>
          <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={hinhAnh} />
            <div className="flex-grow">
              <h2 className="text-gray-900 title-font font-medium">{tenPhim}</h2>
              <p className="text-gray-500">
                Ngày đặt {moment(ngayDat).format('DD-MM-YYYY hh:mm')}
              </p>
              <p>Địa điểm: {ghe?.tenHeThongRap} - {ghe?.tenCumRap}</p>
              <p>Số ghế: {ghe?.tenGhe}</p>
            </div>
          </div>
        </div>
      })
    })

  }

  return <div className='p-5'>
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-purple-600">Lịch sử đặt vé khách hàng</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Hãy xem thông tin địa điểm và thời gian để xem phim vui vẻ bạn nhé!</p>
        </div>
        <div className="flex flex-wrap -m-2">
          {renderTicketItem()}
        </div>
      </div>
    </section>
  </div>
}

function CapNhatThongTinNguoiDung() {
  const { thongTinNguoiDung } = useSelector(state => state.QuanLyNguoiDungReducer);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      hoTen: '',
      matKhau: '',
      email: '',
      soDT: '',
    },
    onSubmit: values => {
      console.log(values);
      // const action = capNhatThongTinNguoiDungAction(values);
      // dispatch(action);
    },
  });

  // console.log(thongTinNguoiDung)

  return (
    <form onSubmit={formik.handleSubmit} className="font-sans antialiased bg-grey-lightest">
      {/* Content */}
      <div className="w-full bg-grey-lightest" style={{ paddingTop: '4rem' }}>
        <div className="lg:mx-auto py-8 xl:container">
          <div className="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow">
            <div className="py-4 px-8 text-black text-xl border-b border-grey-lighter text-center">Cập nhật thông tin người dùng</div>

            <div className="py-4 px-8">
              <div className="flex mb-4">
                <div className="w-1/2 mr-1">
                  <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="taiKhoan">Tài khoản</label>
                  <input disabled className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" value={thongTinNguoiDung.taiKhoan} name="taiKhoan" id="taiKhoan" type="text" placeholder="Nhập tên tài khoản" />

                </div>
                <div className="w-1/2 ml-1">
                  <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="hoTen">Họ và tên</label>
                  <input onChange={formik.handleChange} value={thongTinNguoiDung.hoTen} className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" name='hoTen' id="hoTen" type="text" placeholder="Nhập họ và tên" />

                </div>
              </div>
              <div className="flex mb-4">
                <div className="w-1/2 mr-1">
                  <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="matKhau">Mật khẩu</label>
                  <input onChange={formik.handleChange} value={thongTinNguoiDung.matKhau} className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" name='matKhau' id="matKhau" type="password" placeholder="Nhập mật khẩu" />

                </div>

              </div>
              <div className="flex mb-4">
                <div className="w-1/2 mr-1">
                  <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="email">Email</label>
                  <input onChange={formik.handleChange} value={thongTinNguoiDung.email} className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" name="email" id="email" type="email" placeholder="Nhập email" />

                </div>
                <div className="w-1/2 ml-1">
                  <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="soDT">Số điện thoại</label>
                  <input onChange={formik.handleChange} value={thongTinNguoiDung.soDT} className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" name='soDT' id="soDt" type="text" placeholder="Nhập số điện thoại" />

                </div>
              </div>

              <div className="flex items-center justify-center mt-8">
                <button className="bg-blue hover:bg-blue-dark text-blue-700 font-bold py-2 px-4 rounded-full" type="submit">
                  Cập nhật
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}
