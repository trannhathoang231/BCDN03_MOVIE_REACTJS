import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { layThongTinNguoiDungAction } from '../../redux/actions/QuanLyNguoiDungAction';
import Header from '../../templates/HomeTemplate/Layout/Header/Header';
import moment from 'moment';
import { Layout } from 'antd';
import styles from './UserInfo.module.css'
import { Col, Row } from 'antd';
import { Card } from 'antd';
import { animateScrollasscroll } from 'react-scroll';
const { Meta } = Card;


// const { Header, Footer, Sider, Content } = Layout;

export default function UserInfo() {
    const { thongTinNguoiDung } = useSelector(state => state.QuanLyNguoiDungReducer);
    const dispatch = useDispatch()

    useEffect(() => {
        const action = layThongTinNguoiDungAction();
        dispatch(action);
    }, []);

    console.log(thongTinNguoiDung);

    const renderTable = () => {
        return thongTinNguoiDung?.thongTinDatVe?.map((nguoiDung, index) => {
            let { ngayDat, tenPhim, hinhAnh } = nguoiDung;
            return nguoiDung?.danhSachGhe?.map((ghe, index) => {
                let { tenHeThongRap, tenRap, tenGhe } = ghe;
                return <tr key={index}>
                    <td>{tenPhim}</td>
                    <td>{ngayDat}</td>
                    <td>{tenHeThongRap}</td>
                    <td>{tenRap}</td>
                    <td>{tenGhe}</td>
                </tr>
            })
        })
    }

    return (
        // <Layout className='p-5'>
        //     <Header className={styles.myStyle}>Header</Header>
        //     <Content>
        //         <Row>
        //             <Col span={8}>
        //                 <Card
        //                     hoverable
        //                     style={{
        //                         width: 240,
        //                     }}
        //                     cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        //                 >
        //                     {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
        //                     <h3>Họ và tên: {thongTinNguoiDung?.hoTen}</h3>
        //                     <p>Email: {thongTinNguoiDung?.email}</p>
        //                     <p>Số điện thoại: {thongTinNguoiDung?.soDT}</p>
        //                 </Card>
        //             </Col>
        //             <Col span={16}>
        //                 <table className="table border-1">
        //                     <thead>
        //                         <tr>
        //                             <th scope="col">Tên phim</th>
        //                             <th scope="col">Ngày đặt</th>
        //                             <th scope="col">Tên hệ thống rạp</th>
        //                             <th scope="col">Tên rạp</th>
        //                             <th scope="col">Số ghế</th>
        //                         </tr>
        //                     </thead>
        //                     <tbody>
        //                         {renderTable()}
        //                     </tbody>
        //                 </table>
        //             </Col>
        //         </Row>
        //     </Content>
        //     <Footer>Footer</Footer>
        // </Layout>

        <>
            {/* <Header /> */}
            <div className='container py-10'>
                <div className="row">
                    <div className="col-4">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Họ và tên: {thongTinNguoiDung?.hoTen}</h5>
                                <p className="card-text">Email: {thongTinNguoiDung?.email}</p>
                                <p className="card-text">Số điện thoại: {thongTinNguoiDung?.soDT}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                        <h2 className='text-center py-3'>THÔNG TIN VÉ ĐÃ ĐẶT</h2>
                        <table className="table">
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
        </>
    )
}
