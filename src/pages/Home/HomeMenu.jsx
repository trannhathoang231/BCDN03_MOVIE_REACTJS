import { Tabs } from 'antd';
import React from 'react'
import { NavLink } from 'react-router-dom';
import moment from 'moment'
import './HomeMenu.css'

const { TabPane } = Tabs;
export default class HomeMenu extends React.PureComponent {
    componentDidMount() {

    }

    renderHeThongRap = () => {
        return this.props.heThongRapChieu.map((item, index) => {
            return <Tabs.TabPane key={index} tab={
                <img src={item.logo} style={{ width: '50px', height: '50px', borderRadius: '50%' }} alt='' />
            }>
                <Tabs tabPosition='left'>
                    {item.lstCumRap?.map((cumRap, index) => {
                        return <TabPane tab={

                            <div style={{ width: '300px', display: 'flex' }}>
                                <img src='img/PicRap/BHD-1.jpeg' alt='bhd' width={50} />
                                <div className='text-left ml-2'>
                                    {cumRap.tenCumRap}
                                    <p className='text-gray-400' style={{ fontSize: '10px' }}>{cumRap.diaChi}</p>
                                </div>
                            </div>

                        } key={index}>
                            <div className='overflow-x-auto scrollBar' style={{ height: '700px' }} >
                                {cumRap.danhSachPhim.map((phim, index) => {
                                    return <div key={index} >

                                        <div className='py-5' style={{ display: 'flex', padding: '10px 0' }}>
                                            <div>
                                                <img src={phim.hinhAnh} width={50} style={{ width: '60px', height: 'fit-content' }} alt={phim.tenPhim} />
                                            </div>
                                            <div className='text-left ml-2 pt-2'>
                                                <h1 className='text-blue-500'>{phim.tenPhim}</h1>
                                                <p className='text-black'>120 phút - Điểm Tix 10</p>
                                                <div className='grid grid-cols-4 gap-4'>
                                                    {phim.lstLichChieuTheoPhim?.slice(0, 12).map((lichChieu, index) => {
                                                        return <NavLink to={`/checkout/${lichChieu.maLichChieu}`} className='text text-green-400' key={index}>
                                                            {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                                        </NavLink>
                                                    })}
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                })}
                            </div>
                        </TabPane>
                    })}
                </Tabs>
            </Tabs.TabPane >
        })

    }

    render() {
        return (
            <div className='w-full'>
                <Tabs style={{ width: '70%', margin: 'auto', height: '700px', borderRadius: '10px', border: '1px solid rgb(201, 201, 201)' }} tabPosition='left'>

                    {this.renderHeThongRap()}
                </Tabs>
            </div>
        )
    }
}

