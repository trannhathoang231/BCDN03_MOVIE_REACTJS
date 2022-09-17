import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { layThongTinNguoiDungAction } from '../../redux/actions/QuanLyNguoiDungAction';
import Header from '../../templates/HomeTemplate/Layout/Header/Header';
import Footer from './../../templates/HomeTemplate/Layout/Footer/Footer';
import styles from './UserInfo.module.css'
import moment from 'moment';
export default function UserInfo() {
    const { thongTinNguoiDung } = useSelector(state => state.QuanLyNguoiDungReducer);
    const dispatch = useDispatch()

    useEffect(() => {
        const action = layThongTinNguoiDungAction();
        dispatch(action);
    }, []);

    const renderTable = () => {
        return thongTinNguoiDung?.thongTinDatVe?.map((nguoiDung, index) => {
            let { ngayDat, tenPhim, hinhAnh } = nguoiDung;
            return nguoiDung?.danhSachGhe?.map((ghe, index) => {
                let { tenHeThongRap, tenRap, tenGhe } = ghe;
                return <tr key={index}>
                    <td>{tenPhim}</td>
                    <td>{moment(ngayDat).format('DD-MM-YYYY hh:mm')}</td>
                    <td>{tenHeThongRap}</td>
                    <td>{tenRap}</td>
                    <td>{tenGhe}</td>
                </tr>
            })
        })
    }

    return (
        <>
            <div className="header">
                <Header />
            </div>

            <div className='container section py-40'>
                <div className="row">
                    <div className="col d-flex justify-content-center col-sm-12  col-lg-4">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Họ và tên: {thongTinNguoiDung?.hoTen}</h5>
                                <p className="card-text">Email: {thongTinNguoiDung?.email}</p>
                                <p className="card-text">Số điện thoại: {thongTinNguoiDung?.soDT}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col col-sm-12 mt-10 col-lg-8">
                        <h2 className='text-center py-3'>THÔNG TIN VÉ ĐÃ ĐẶT</h2>
                        <table className="table border-1 table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Tên phim</th>
                                    <th scope="col">Ngày đặt</th>
                                    <th scope="col">Tên hệ thống rạp</th>
                                    <th scope="col">Tên rạp</th>
                                    <th scope="col">Số ghế</th>
                                </tr>
                            </thead>
                            <tbody>
                                {renderTable()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="footer">
                <Footer />
            </div>
        </>
    )
}
