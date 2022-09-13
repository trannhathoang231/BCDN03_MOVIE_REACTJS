import React, { useEffect } from 'react'
import { CustomCard } from '@tsamantanis/react-glassmorphism'
import '@tsamantanis/react-glassmorphism/dist/index.css'
import './circle.css'
import { Tabs, Rate } from 'antd';

import { useSelector, useDispatch } from 'react-redux';
import { layThongTinChiTietPhim } from '../../redux/actions/QuanLyRapAction';
import moment from 'moment';
import { NavLink } from 'react-router-dom';
const { TabPane } = Tabs;


function Detail(props) {
    const filmDetail = useSelector(state => state.QuanLyPhimReducer.filmDetail);
    console.log(filmDetail);
    const dispatch = useDispatch();

    useEffect(() => {
        let { id } = props.match.params;

        dispatch(layThongTinChiTietPhim(id))
    }, [])
    return (
        <div style={{ paddingTop: '70px' }}>
            <div style={{ width: '100%', backgroundImage: `url(${filmDetail.hinhAnh})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: '100%' }}>
                <CustomCard
                    style={{ minheight: '50vh', paddingTop: '150px', background: 'transparent !important' }}
                    effectColor="" // required
                    blur={15} // default blur value is 10px
                    borderRadius={'none'} // default border radius value is 10px
                    position="relative"
                    top={0}
                    left={0}
                    width={100}
                >
                    <div className='container m-auto' >


                        <div className='flex m-auto' style={{ alignItems: 'center', justifyContent: 'center', width: '80%', }}>

                            <img src={filmDetail.hinhAnh} alt={filmDetail.hinhAnh} style={{ width: '20%', height: 'fit-content', backgroundSize: 'cover', backgroundPosition: 'center', }} />

                            <div style={{ width: '45%', marginLeft: '10px' }}>
                                <p className='m-0'>{moment(filmDetail.ngayChieuGioChieu).format('DD.MM.YYYY')}</p>

                                <p className=' m-0' style={{ fontSize: '24px' }}><span style={{
                                    color: '#fff',
                                    display: 'inline - block',
                                    padding: '2px 5px',
                                    fontSize: '16px',
                                    minWidth: '33px',
                                    textAlign: 'center',
                                    marginRight: '6px',
                                    borderRadius: '4px',
                                    verticalAlign: '13%',
                                    backgroundColor: '#fb4226'
                                }} className='jss194'>C18</span>{filmDetail.tenPhim}</p>
                                <p>120 phút - 10 Tix - 2D/Digital</p>
                            </div>

                            <div style={{ alignItems: 'center', position: 'relative' }}>
                                <div className={`c100 p${filmDetail.danhGia * 10} orange`}>
                                    <span>{filmDetail.danhGia}</span>
                                    <div className="slice">
                                        <div className="bar" />
                                        <div className="fill" />
                                    </div>

                                </div>

                                <div style={{ position: 'absolute', bottom: '-50px', left: '0', textAlign: 'center' }}>
                                    <Rate style={{ fontSize: '15px' }} allowHalf value={filmDetail.danhGia / 2} />
                                    <p>15 người đánh giá</p>
                                </div>
                            </div>

                        </div>


                        <div className="container    " style={{ width: '60%', margin: '70px auto', borderRadius: '10px', padding: '20px 20px 200px 20px' }}>
                            <Tabs defaultActiveKey='1' centered className=''>
                                <TabPane aria-selected="false" tab='Lịch Chiếu' key='1'>
                                    <div className='bg-white  bg-white' style={{ borderRadius: '10px', height: 'fit-content' }}>
                                        <Tabs style={{ height: 'fit-content' }} defaultActiveKey='1' tabPosition='left' className=''>

                                            {filmDetail.heThongRapChieu?.map((item, index) => {
                                                return <TabPane  tab={
                                                    <div style={{ display: 'flex', alignItems: 'center' , justifyContent:'end', width:'100%'}}>
                                                        <div style={{width:'60%'}}>
                                                        <img src={item.logo} alt={item.logo} className='rounded-full' width={60} height={60} />

                                                        </div>
                                                        <div style={{width:'40%'}}>
                                                        <span style={{ marginLeft: '10px' ,color:'black', animation:'none'}}>{item.tenHeThongRap}</span>

                                                        </div>
                                                    </div>

                                                } key={index}>
                                                 {item.cumRapChieu?.map((cumRap, index) => {
                                                        return <div style={{color:'black'}} key={index} >
                                                               <div className="flex flex-row " style={{alignItems:'center'}}>
                                                                   <img style={{width:'60px',height:'60px', padding:'5px' }} src={cumRap.hinhAnh} alt={cumRap.hinhAnh} />
                                                                   <div className='ml-2 '>
                                                                       <p style={{fontSize:'13px',paddingTop:'8px'}}>{cumRap.tenCumRap}</p>
                                                                       <p style={{fontSize:'10px',opacity:'.5',lineHeight:'1'}}>{cumRap.diaChi}</p>
                                                                   </div>
                                                               </div>
                                                               <div className="thong_tin_lich_chieu grid grid-cols-6">
                                                                    {cumRap.lichChieuPhim?.map((lichChieu,index) => { 
                                                                        return <NavLink to='/' key={index} className='col-span-1 text-green-800 font-bold' style={{padding:'2px'}}>

                                                                            {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                                                        </NavLink>
                                                                     })}
                                                               </div>
                                                        </div>
                                                  })}
                                                </TabPane>
                                            })}

                                        </Tabs>
                                    </div>
                                </TabPane>
                                <Tabs.TabPane tab='Thông Tin' key='2'>
                                    1231323
                                </Tabs.TabPane>
                                <Tabs.TabPane tab='Đánh Giá' key='3'>
                                    1231323
                                </Tabs.TabPane>
                            </Tabs>
                        </div>



                    </div>
                </CustomCard >
            </div >
        </div>
    )
}

export default Detail