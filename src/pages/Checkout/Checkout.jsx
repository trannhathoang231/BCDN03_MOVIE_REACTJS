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
import { Tabs } from 'antd';
import { layThongTinNguoiDungAction } from '../../redux/actions/QuanLyNguoiDungAction';
import moment from 'moment';
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
                            <h3 className='mt-3 text-black'>M??n h??nh</h3>
                        </div>
                        <div>
                            {renderSeats()}
                        </div>
                    </div>

                    <div className='mt-5 flex justify-center'>
                        <table className='divide-y divide-gray-200 w-2/3'>
                            <thead className='bg-gray-50 p-5'>
                                <tr>
                                    <th>Gh??? ch??a ?????t</th>
                                    <th>Gh??? ??ang ?????t</th>
                                    <th>Gh??? vip</th>
                                    <th>Gh??? ???? ?????t</th>
                                    <th>Gh??? m??nh ?????t</th>
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

                <div className='xl:col-span-3 sm:col-span-12 pt-10 ml-5'>
                    <h3 className='text-green-400 text-center text-2xl'>
                        {danhSachGheDangDat.reduce((tongTien, ghe, index) => {
                            return tongTien += ghe.giaVe;
                        }, 0).toLocaleString()} ??
                    </h3>
                    <hr />
                    <h3 className='text-xl mt-2'>{thongTinPhim.tenPhim}</h3>
                    <p>?????a ??i???m: {thongTinPhim.tenCumRap} - {thongTinPhim.tenRap}</p>
                    <p>Ng??y chi???u: {thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu}</p>
                    <hr />
                    <div className='flex flex-row my-5'>
                        <div className='w-4/5'>
                            <span className='text-red-400 text-lg'>Gh???</span>

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
                            dispatch(datVeAction(thongTinDatVe));
                        }} className='bg-green-500 text-while w-full text-center py-3 font-bold text-2xl cursor-pointer'>?????T V??</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function CheckoutTab(props) {
    const { tabActive } = useSelector(state => state.QuanLyDatVeReducer);
    const dispatch = useDispatch();
    let { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer);

    const operations = <Fragment>
        {!_.isEmpty(userLogin) ? <Fragment> <button onClick={() => {
            history.push('/profile')
        }} className="text-2xl">Xin ch??o {userLogin.hoTen} <span onClick={() => { history.push('/profile') }}><UserOutlined style={{ fontSize: '30px' }} /></span></button> <button onClick={() => {
            localStorage.removeItem(USER_LOGIN);
            localStorage.removeItem(TOKEN);
            localStorage.removeItem("accessToken");
            history.push('/home');
            window.location.reload();
        }} className='text-blue-800'>Sign out</button> </Fragment> : ''}
    </Fragment>

    useEffect(() => {
        return () => {
            dispatch({
                type: 'CHANGE_TAB_ACTIVE',
                number: '1'
            })
        }
    }, [])


    return <div className='p-5'>
        <Tabs tabBarExtraContent={operations} defaultActiveKey='1' activeKey={tabActive} onChange={(key) => {
            dispatch({
                type: 'CHANGE_TAB_ACTIVE',
                number: key
            })
        }}>
            <Tabs.TabPane tab="01 CH???N GH??? & THANH TO??N" key="1">
                <Checkout {...props} />
            </Tabs.TabPane>
            <Tabs.TabPane tab="02 K???T QU??? ?????T V??" key="2">
                <KetQuaDatVe {...props} />
            </Tabs.TabPane>
            <Tabs.TabPane tab={<div className='text-center' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><NavLink to="/"><HomeOutlined style={{ marginLeft: 10, fontSize: 25 }} /></NavLink></div>} key="4">
                <KetQuaDatVe {...props} />
            </Tabs.TabPane>

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
                                Ng??y ?????t {moment(ngayDat).format('DD-MM-YYYY hh:mm')}
                            </p>
                            <p>?????a ??i???m: {ghe?.tenHeThongRap} - {ghe?.tenCumRap}</p>
                            <p>S??? gh???: {ghe?.tenGhe}</p>
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
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-purple-600">L???ch s??? ?????t v?? kh??ch h??ng</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">H??y xem th??ng tin ?????a ??i???m v?? th???i gian ????? xem phim vui v??? b???n nh??!</p>
                </div>
                <div className="flex flex-wrap -m-2">
                    {renderTicketItem()}
                </div>
            </div>
        </section>
    </div>
}