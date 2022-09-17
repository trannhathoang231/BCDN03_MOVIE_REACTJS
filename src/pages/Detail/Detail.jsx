import React, { useEffect } from 'react'
import { CustomCard } from '@tsamantanis/react-glassmorphism'
import '@tsamantanis/react-glassmorphism/dist/index.css'
import './circle.css'
import './Detail.css'
import { Tabs, Rate } from 'antd';
import { LikeFilled } from '@ant-design/icons'
import { useSelector, useDispatch } from 'react-redux';
import { layThongTinChiTietPhim } from '../../redux/actions/QuanLyRapAction';
import moment from 'moment';
import { NavLink } from 'react-router-dom';

const { TabPane } = Tabs;


function Detail(props) {
    const filmDetail = useSelector(state => state.QuanLyPhimReducer.filmDetail);
    const dispatch = useDispatch();
    useEffect(() => {
        let { id } = props.match.params;

        dispatch(layThongTinChiTietPhim(id))
    }, [])
    return (
        <div style={{ paddingTop: '70px', position: 'relative' }}>
            <div style={{ backgroundColor: 'rgb(10, 32, 41)', width: '100%', height: '100%', position: 'absolute', top: '0', left: '0', right: '0', bottom: '0', zIndex: '-1' }}> </div>
            <div >
                <div style={{ width: '100%', height: '40%', backgroundImage: `url(${filmDetail.hinhAnh})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: '100%', position: 'absolute', top: '0', left: '0', right: '0', bottom: '0', filter: 'blur(15px)' }}>
                </div>
                <CustomCard
                    style={{ minheight: '41vw', paddingTop: '150px', background: 'transparent !important' }}
                    effectColor=""
                    blur={15}
                    borderRadius={'none'}
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

                    </div>
                </CustomCard >
            </div >
            <div >
                <div className="container" id='detailCss' style={{ width: '60%', margin: '0 auto', borderRadius: '10px', padding: '0 20px 200px 20px', blur: '10' }}>
                    <Tabs defaultActiveKey='1' centered  >
                        <TabPane aria-selected="false" tabBarGutter='10' tab='Lịch Chiếu' key='1'>
                            <div className='bg-white' style={{ borderRadius: '10px', padding: '0 23px 0 0', height: '700px' }}>
                                <Tabs defaultActiveKey='1' tabPosition='left'>

                                    {filmDetail.heThongRapChieu?.map((item, index) => {
                                        return <Tabs.TabPane tab={
                                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'left', width: '100%', borderBottom: '1px solid #80808026', padding: '10px 0 0 10px', borderBottomWidth: 'thin' }}>
                                                <div >
                                                    <img src={item.logo} alt={item.logo} width={60} height={60} />

                                                </div>
                                                <div className='tenRapcontainer'>
                                                    <span className='tenRap' style={{ marginLeft: '15px', color: 'black', animation: 'none' }}>{item.tenHeThongRap}</span>

                                                </div>
                                            </div>

                                        } key={index}>
                                            {item.cumRapChieu?.map((cumRap, index) => {
                                                return <div style={{ color: 'black' }} key={index} >
                                                    <div className="flex flex-row " style={{ alignItems: 'center' }}>
                                                        <img style={{ width: '60px', height: '60px', padding: '5px' }} src={cumRap.hinhAnh} alt={cumRap.hinhAnh} />
                                                        <div className='ml-2 '>
                                                            <p style={{ fontSize: '13px', paddingTop: '8px' }}>{cumRap.tenCumRap}</p>
                                                            <p style={{ fontSize: '10px', opacity: '.5', lineHeight: '1' }}>{cumRap.diaChi}</p>
                                                        </div>
                                                    </div>
                                                    <div className="thong_tin_lich_chieu grid grid-cols-6">
                                                        {cumRap.lichChieuPhim?.map((lichChieu, index) => {
                                                            return <NavLink to={`/checkout/${lichChieu.maLichChieu}`} key={index} className='col-span-1 text-green-800 font-bold' style={{ padding: '2px' }}>

                                                                {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                                            </NavLink>
                                                        })}
                                                    </div>
                                                </div>
                                            })}
                                        </Tabs.TabPane>
                                    })}

                                </Tabs>
                            </div>
                        </TabPane>
                        <Tabs.TabPane tab='Thông Tin' key='2'>
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'flex-start', height: '700px' }}>
                                    <div style={{ width: '50%' }}>
                                        <table style={{}}>
                                            <tr>
                                                <td className='tdBold'>Ngày công chiếu</td>
                                                <td>{moment(filmDetail.ngayChieuGioChieu).format('YYYY.MM.DD')}</td>
                                            </tr>
                                            <tr>
                                                <td className='tdBold'>Đạo diễn</td>
                                                <td>Adam Wingard</td>
                                            </tr>
                                            <tr>
                                                <td className='tdBold'>Diễn Viên</td>
                                                <td>Kyle Chandler, Rebecca Hall, Eiza González, Millie Bobby Brown</td>
                                            </tr>
                                            <tr>
                                                <td className='tdBold'>Thể loại</td>
                                                <td>hành động, giả tưởng, ly kỳ, thần thoại</td>
                                            </tr>
                                            <tr>
                                                <td className='tdBold'>Định Dạng</td>
                                                <td>2D/Digital</td>
                                            </tr>
                                            <tr>
                                                <td className='tdBold'>Quốc gia SX</td>
                                                <td>Mỹ</td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div style={{ width: '50%', paddingLeft: '20px' }}>
                                        <p style={{ fontWeight: '700' }}>Nội dung</p>
                                        <p>{filmDetail.moTa}</p>
                                    </div>
                                </div>
                            </div>
                        </Tabs.TabPane>
                        <Tabs.TabPane tab='Đánh Giá' key='3'>
                            <div style={{ display: 'flex', flexDirection: 'flex-column', width: '90%', margin: 'auto', flexDirection: 'column', height: '700px', overflowX: 'auto' }}>
                                <a style={{ color: 'black', margin: '10px 10px' }}>
                                    <div style={{ width: '100%', display: 'flex', backgroundColor: 'white', justifyContent: 'space-between', borderRadius: "5px", alignItems: 'center', padding: '5px 15px' }}>
                                        <div class="flex " style={{ alignItems: 'center' }}>
                                            <img src="img/headTixLogo.png" alt="" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                                            <input type='text' style={{ outline: 'none', paddingLeft: '5px' }} placeholder='Bạn nghĩ gì về phim này?' />
                                        </div>
                                        <div style={{ alignItems: 'center' }}>
                                            <Rate disabled style={{ fontSize: '21px', color: '#f5c401' }} allowHalf defaultValue='9' />
                                        </div>
                                    </div>
                                </a>
                                <a style={{ color: 'black', margin: '10px 10px', backgroundColor: 'white', alignItems: 'center', padding: '5px 15px', borderRadius: "5px" }}>
                                    <div style={{ width: '100%', display: 'flex', backgroundColor: 'white', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <div className="flex " style={{ alignItems: 'center' }}>
                                            <img src="img/headTixLogo.png" alt="" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />

                                            <span style={{ paddingLeft: '5px', display: 'inline-block' }}>
                                                <p style={{ fontWeight: '500', lineHeight: '1', marginBottom: '0' }} >Dương Minh</p>
                                                <p style={{ marginBottom: '0', color: '#a7a7a7' }}>một năm trước</p>
                                            </span>
                                        </div>
                                        <div style={{ alignItems: 'center' }}>
                                            <p style={{ marginBottom: '0', color: '#a7a7a7', textAlign: 'center', fontSize: '15px' }}>9</p>
                                            <Rate disabled style={{ fontSize: '21px', color: '#f5c401' }} allowHalf defaultValue={4.5} />
                                        </div>
                                    </div>
                                    <div style={{ paddingTop: '20px', borderBottom: '1px solid rgb(196 195 195)' }}>
                                        <p>mâu thuẫn chưa đủ sâu! tính cách nv xây dựng vẫn còn hời hợt. tuyến nv dày nhưng không kĩ họ chỉ xuất hiện để cố làm hợp lí mạch phim nên phim nh chỗ khá vô lý. và thêm 1 cái muôn thưở của phim Hàn là thích tạo drama để lấy đồng cảm của ng xem.</p>
                                    </div>
                                    <div className='py-3' style={{ alignItems: 'center', display: 'flex' }}>
                                        <span><LikeFilled style={{ fontSize: '20px', color: '#a7a7a7' }} /></span>
                                        <span style={{ color: '#a7a7a7', marginLeft: '5px' }}>76 Thích</span>
                                    </div>
                                </a>
                                <a style={{ color: 'black', margin: '10px 10px', backgroundColor: 'white', alignItems: 'center', padding: '5px 15px', borderRadius: "5px" }}>
                                    <div style={{ width: '100%', display: 'flex', backgroundColor: 'white', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <div className="flex " style={{ alignItems: 'center' }}>
                                            <img src="img/headTixLogo.png" alt="" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />

                                            <span style={{ paddingLeft: '5px', display: 'inline-block' }}>
                                                <p style={{ fontWeight: '500', lineHeight: '1', marginBottom: '0' }} >Dương Minh</p>
                                                <p style={{ marginBottom: '0', color: '#a7a7a7' }}>một năm trước</p>
                                            </span>
                                        </div>
                                        <div style={{ alignItems: 'center' }}>
                                            <p style={{ marginBottom: '0', color: '#a7a7a7', textAlign: 'center', fontSize: '15px' }}>9</p>
                                            <Rate disabled style={{ fontSize: '21px', color: '#f5c401' }} allowHalf defaultValue={4.5} />
                                        </div>
                                    </div>
                                    <div style={{ paddingTop: '20px', borderBottom: '1px solid rgb(196 195 195)' }}>
                                        <p>mâu thuẫn chưa đủ sâu! tính cách nv xây dựng vẫn còn hời hợt. tuyến nv dày nhưng không kĩ họ chỉ xuất hiện để cố làm hợp lí mạch phim nên phim nh chỗ khá vô lý. và thêm 1 cái muôn thưở của phim Hàn là thích tạo drama để lấy đồng cảm của ng xem.</p>
                                    </div>
                                    <div className='py-3' style={{ alignItems: 'center', display: 'flex' }}>
                                        <span><LikeFilled style={{ fontSize: '20px', color: '#a7a7a7' }} /></span>
                                        <span style={{ color: '#a7a7a7', marginLeft: '5px' }}>76 Thích</span>
                                    </div>
                                </a>
                                <a style={{ color: 'black', margin: '10px 10px', backgroundColor: 'white', alignItems: 'center', padding: '5px 15px', borderRadius: "5px" }}>
                                    <div style={{ width: '100%', display: 'flex', backgroundColor: 'white', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <div className="flex " style={{ alignItems: 'center' }}>
                                            <img src="img/headTixLogo.png" alt="" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />

                                            <span style={{ paddingLeft: '5px', display: 'inline-block' }}>
                                                <p style={{ fontWeight: '500', lineHeight: '1', marginBottom: '0' }} >Dương Minh</p>
                                                <p style={{ marginBottom: '0', color: '#a7a7a7' }}>một năm trước</p>
                                            </span>
                                        </div>
                                        <div style={{ alignItems: 'center' }}>
                                            <p style={{ marginBottom: '0', color: '#a7a7a7', textAlign: 'center', fontSize: '15px' }}>9</p>
                                            <Rate disabled style={{ fontSize: '21px', color: '#f5c401' }} allowHalf defaultValue={4.5} />
                                        </div>
                                    </div>
                                    <div style={{ paddingTop: '20px', borderBottom: '1px solid rgb(196 195 195)' }}>
                                        <p>mâu thuẫn chưa đủ sâu! tính cách nv xây dựng vẫn còn hời hợt. tuyến nv dày nhưng không kĩ họ chỉ xuất hiện để cố làm hợp lí mạch phim nên phim nh chỗ khá vô lý. và thêm 1 cái muôn thưở của phim Hàn là thích tạo drama để lấy đồng cảm của ng xem.</p>
                                    </div>
                                    <div className='py-3' style={{ alignItems: 'center', display: 'flex' }}>
                                        <span><LikeFilled style={{ fontSize: '20px', color: '#a7a7a7' }} /></span>
                                        <span style={{ color: '#a7a7a7', marginLeft: '5px' }}>76 Thích</span>
                                    </div>
                                </a>
                                <a style={{ color: 'black', margin: '10px 10px', backgroundColor: 'white', alignItems: 'center', padding: '5px 15px', borderRadius: "5px" }}>
                                    <div style={{ width: '100%', display: 'flex', backgroundColor: 'white', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <div className="flex " style={{ alignItems: 'center' }}>
                                            <img src="img/headTixLogo.png" alt="" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />

                                            <span style={{ paddingLeft: '5px', display: 'inline-block' }}>
                                                <p style={{ fontWeight: '500', lineHeight: '1', marginBottom: '0' }} >Dương Minh</p>
                                                <p style={{ marginBottom: '0', color: '#a7a7a7' }}>một năm trước</p>
                                            </span>
                                        </div>
                                        <div style={{ alignItems: 'center' }}>
                                            <p style={{ marginBottom: '0', color: '#a7a7a7', textAlign: 'center', fontSize: '15px' }}>9</p>
                                            <Rate disabled style={{ fontSize: '21px', color: '#f5c401' }} allowHalf defaultValue={4.5} />
                                        </div>
                                    </div>
                                    <div style={{ paddingTop: '20px', borderBottom: '1px solid rgb(196 195 195)' }}>
                                        <p>mâu thuẫn chưa đủ sâu! tính cách nv xây dựng vẫn còn hời hợt. tuyến nv dày nhưng không kĩ họ chỉ xuất hiện để cố làm hợp lí mạch phim nên phim nh chỗ khá vô lý. và thêm 1 cái muôn thưở của phim Hàn là thích tạo drama để lấy đồng cảm của ng xem.</p>
                                    </div>
                                    <div className='py-3' style={{ alignItems: 'center', display: 'flex' }}>
                                        <span><LikeFilled style={{ fontSize: '20px', color: '#a7a7a7' }} /></span>
                                        <span style={{ color: '#a7a7a7', marginLeft: '5px' }}>76 Thích</span>
                                    </div>
                                </a>
                                <a style={{ color: 'black', margin: '10px 10px', backgroundColor: 'white', alignItems: 'center', padding: '5px 15px', borderRadius: "5px" }}>
                                    <div style={{ width: '100%', display: 'flex', backgroundColor: 'white', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <div className="flex " style={{ alignItems: 'center' }}>
                                            <img src="img/headTixLogo.png" alt="" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />

                                            <span style={{ paddingLeft: '5px', display: 'inline-block' }}>
                                                <p style={{ fontWeight: '500', lineHeight: '1', marginBottom: '0' }} >Dương Minh</p>
                                                <p style={{ marginBottom: '0', color: '#a7a7a7' }}>một năm trước</p>
                                            </span>
                                        </div>
                                        <div style={{ alignItems: 'center' }}>
                                            <p style={{ marginBottom: '0', color: '#a7a7a7', textAlign: 'center', fontSize: '15px' }}>9</p>
                                            <Rate disabled style={{ fontSize: '21px', color: '#f5c401' }} allowHalf defaultValue={4.5} />
                                        </div>
                                    </div>
                                    <div style={{ paddingTop: '20px', borderBottom: '1px solid rgb(196 195 195)' }}>
                                        <p>mâu thuẫn chưa đủ sâu! tính cách nv xây dựng vẫn còn hời hợt. tuyến nv dày nhưng không kĩ họ chỉ xuất hiện để cố làm hợp lí mạch phim nên phim nh chỗ khá vô lý. và thêm 1 cái muôn thưở của phim Hàn là thích tạo drama để lấy đồng cảm của ng xem.</p>
                                    </div>
                                    <div className='py-3' style={{ alignItems: 'center', display: 'flex' }}>
                                        <span><LikeFilled style={{ fontSize: '20px', color: '#a7a7a7' }} /></span>
                                        <span style={{ color: '#a7a7a7', marginLeft: '5px' }}>76 Thích</span>
                                    </div>
                                </a>
                                <a style={{ color: 'black', margin: '10px 10px', backgroundColor: 'white', alignItems: 'center', padding: '5px 15px', borderRadius: "5px" }}>
                                    <div style={{ width: '100%', display: 'flex', backgroundColor: 'white', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <div className="flex " style={{ alignItems: 'center' }}>
                                            <img src="img/headTixLogo.png" alt="" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />

                                            <span style={{ paddingLeft: '5px', display: 'inline-block' }}>
                                                <p style={{ fontWeight: '500', lineHeight: '1', marginBottom: '0' }} >Dương Minh</p>
                                                <p style={{ marginBottom: '0', color: '#a7a7a7' }}>một năm trước</p>
                                            </span>
                                        </div>
                                        <div style={{ alignItems: 'center' }}>
                                            <p style={{ marginBottom: '0', color: '#a7a7a7', textAlign: 'center', fontSize: '15px' }}>9</p>
                                            <Rate disabled style={{ fontSize: '21px', color: '#f5c401' }} allowHalf defaultValue={4.5} />
                                        </div>
                                    </div>
                                    <div style={{ paddingTop: '20px', borderBottom: '1px solid rgb(196 195 195)' }}>
                                        <p>mâu thuẫn chưa đủ sâu! tính cách nv xây dựng vẫn còn hời hợt. tuyến nv dày nhưng không kĩ họ chỉ xuất hiện để cố làm hợp lí mạch phim nên phim nh chỗ khá vô lý. và thêm 1 cái muôn thưở của phim Hàn là thích tạo drama để lấy đồng cảm của ng xem.</p>
                                    </div>
                                    <div className='py-3' style={{ alignItems: 'center', display: 'flex' }}>
                                        <span><LikeFilled style={{ fontSize: '20px', color: '#a7a7a7' }} /></span>
                                        <span style={{ color: '#a7a7a7', marginLeft: '5px' }}>76 Thích</span>
                                    </div>
                                </a>
                                <a style={{ color: 'black', margin: '10px 10px', backgroundColor: 'white', alignItems: 'center', padding: '5px 15px', borderRadius: "5px" }}>
                                    <div style={{ width: '100%', display: 'flex', backgroundColor: 'white', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <div className="flex " style={{ alignItems: 'center' }}>
                                            <img src="img/headTixLogo.png" alt="" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />

                                            <span style={{ paddingLeft: '5px', display: 'inline-block' }}>
                                                <p style={{ fontWeight: '500', lineHeight: '1', marginBottom: '0' }} >Dương Minh</p>
                                                <p style={{ marginBottom: '0', color: '#a7a7a7' }}>một năm trước</p>
                                            </span>
                                        </div>
                                        <div style={{ alignItems: 'center' }}>
                                            <p style={{ marginBottom: '0', color: '#a7a7a7', textAlign: 'center', fontSize: '15px' }}>9</p>
                                            <Rate disabled style={{ fontSize: '21px', color: '#f5c401' }} allowHalf defaultValue={4.5} />
                                        </div>
                                    </div>
                                    <div style={{ paddingTop: '20px', borderBottom: '1px solid rgb(196 195 195)' }}>
                                        <p>mâu thuẫn chưa đủ sâu! tính cách nv xây dựng vẫn còn hời hợt. tuyến nv dày nhưng không kĩ họ chỉ xuất hiện để cố làm hợp lí mạch phim nên phim nh chỗ khá vô lý. và thêm 1 cái muôn thưở của phim Hàn là thích tạo drama để lấy đồng cảm của ng xem.</p>
                                    </div>
                                    <div className='py-3' style={{ alignItems: 'center', display: 'flex' }}>
                                        <span><LikeFilled style={{ fontSize: '20px', color: '#a7a7a7' }} /></span>
                                        <span style={{ color: '#a7a7a7', marginLeft: '5px' }}>76 Thích</span>
                                    </div>
                                </a>
                                <a style={{ color: 'black', margin: '10px 10px', backgroundColor: 'white', alignItems: 'center', padding: '5px 15px', borderRadius: "5px" }}>
                                    <div style={{ width: '100%', display: 'flex', backgroundColor: 'white', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <div className="flex " style={{ alignItems: 'center' }}>
                                            <img src="img/headTixLogo.png" alt="" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />

                                            <span style={{ paddingLeft: '5px', display: 'inline-block' }}>
                                                <p style={{ fontWeight: '500', lineHeight: '1', marginBottom: '0' }} >Dương Minh</p>
                                                <p style={{ marginBottom: '0', color: '#a7a7a7' }}>một năm trước</p>
                                            </span>
                                        </div>
                                        <div style={{ alignItems: 'center' }}>
                                            <p style={{ marginBottom: '0', color: '#a7a7a7', textAlign: 'center', fontSize: '15px' }}>9</p>
                                            <Rate disabled style={{ fontSize: '21px', color: '#f5c401' }} allowHalf defaultValue={4.5} />
                                        </div>
                                    </div>
                                    <div style={{ paddingTop: '20px', borderBottom: '1px solid rgb(196 195 195)' }}>
                                        <p>mâu thuẫn chưa đủ sâu! tính cách nv xây dựng vẫn còn hời hợt. tuyến nv dày nhưng không kĩ họ chỉ xuất hiện để cố làm hợp lí mạch phim nên phim nh chỗ khá vô lý. và thêm 1 cái muôn thưở của phim Hàn là thích tạo drama để lấy đồng cảm của ng xem.</p>
                                    </div>
                                    <div className='py-3' style={{ alignItems: 'center', display: 'flex' }}>
                                        <span><LikeFilled style={{ fontSize: '20px', color: '#a7a7a7' }} /></span>
                                        <span style={{ color: '#a7a7a7', marginLeft: '5px' }}>76 Thích</span>
                                    </div>
                                </a>
                                <a style={{ color: 'black', margin: '10px 10px', backgroundColor: 'white', alignItems: 'center', padding: '5px 15px', borderRadius: "5px" }}>
                                    <div style={{ width: '100%', display: 'flex', backgroundColor: 'white', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <div className="flex " style={{ alignItems: 'center' }}>
                                            <img src="img/headTixLogo.png" alt="" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />

                                            <span style={{ paddingLeft: '5px', display: 'inline-block' }}>
                                                <p style={{ fontWeight: '500', lineHeight: '1', marginBottom: '0' }} >Dương Minh</p>
                                                <p style={{ marginBottom: '0', color: '#a7a7a7' }}>một năm trước</p>
                                            </span>
                                        </div>
                                        <div style={{ alignItems: 'center' }}>
                                            <p style={{ marginBottom: '0', color: '#a7a7a7', textAlign: 'center', fontSize: '15px' }}>9</p>
                                            <Rate disabled style={{ fontSize: '21px', color: '#f5c401' }} allowHalf defaultValue={4.5} />
                                        </div>
                                    </div>
                                    <div style={{ paddingTop: '20px', borderBottom: '1px solid rgb(196 195 195)' }}>
                                        <p>mâu thuẫn chưa đủ sâu! tính cách nv xây dựng vẫn còn hời hợt. tuyến nv dày nhưng không kĩ họ chỉ xuất hiện để cố làm hợp lí mạch phim nên phim nh chỗ khá vô lý. và thêm 1 cái muôn thưở của phim Hàn là thích tạo drama để lấy đồng cảm của ng xem.</p>
                                    </div>
                                    <div className='py-3' style={{ alignItems: 'center', display: 'flex' }}>
                                        <span><LikeFilled style={{ fontSize: '20px', color: '#a7a7a7' }} /></span>
                                        <span style={{ color: '#a7a7a7', marginLeft: '5px' }}>76 Thích</span>
                                    </div>
                                </a>
                                <a style={{ color: 'black', margin: '10px 10px', backgroundColor: 'white', alignItems: 'center', padding: '5px 15px', borderRadius: "5px" }}>
                                    <div style={{ width: '100%', display: 'flex', backgroundColor: 'white', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <div className="flex " style={{ alignItems: 'center' }}>
                                            <img src="img/headTixLogo.png" alt="" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />

                                            <span style={{ paddingLeft: '5px', display: 'inline-block' }}>
                                                <p style={{ fontWeight: '500', lineHeight: '1', marginBottom: '0' }} >Dương Minh</p>
                                                <p style={{ marginBottom: '0', color: '#a7a7a7' }}>một năm trước</p>
                                            </span>
                                        </div>
                                        <div style={{ alignItems: 'center' }}>
                                            <p style={{ marginBottom: '0', color: '#a7a7a7', textAlign: 'center', fontSize: '15px' }}>9</p>
                                            <Rate disabled style={{ fontSize: '21px', color: '#f5c401' }} allowHalf defaultValue={4.5} />
                                        </div>
                                    </div>
                                    <div style={{ paddingTop: '20px', borderBottom: '1px solid rgb(196 195 195)' }}>
                                        <p>mâu thuẫn chưa đủ sâu! tính cách nv xây dựng vẫn còn hời hợt. tuyến nv dày nhưng không kĩ họ chỉ xuất hiện để cố làm hợp lí mạch phim nên phim nh chỗ khá vô lý. và thêm 1 cái muôn thưở của phim Hàn là thích tạo drama để lấy đồng cảm của ng xem.</p>
                                    </div>
                                    <div className='py-3' style={{ alignItems: 'center', display: 'flex' }}>
                                        <span><LikeFilled style={{ fontSize: '20px', color: '#a7a7a7' }} /></span>
                                        <span style={{ color: '#a7a7a7', marginLeft: '5px' }}>76 Thích</span>
                                    </div>
                                </a>
                            </div>
                        </Tabs.TabPane>
                    </Tabs>
                </div>
            </div>

        </div>
    )
}

export default Detail