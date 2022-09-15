import React from 'react'
import { Tabs, Rate } from 'antd'
import { NavLink } from 'react-router-dom';
import LikeFilled from '@ant-design/icons'
import './News.css'
const { TabPane } = Tabs;
function News(props) {
  return (
    <div >
                <div className="container" style={{ width: '60%', margin: '0 auto', borderRadius: '10px', padding: '0 20px 200px 20px', blur: '10' }}>
                    <Tabs defaultActiveKey='3' centered  >
                        <TabPane aria-selected="false" tabBarGutter='10' tab='Lịch Chiếu' key='1'>
                            <div className='bg-white  bg-white' style={{ borderRadius: '10px', padding: '30px' }}>
                                <Tabs defaultActiveKey='1' tabPosition='left'>

                                  
                                         <Tabs.TabPane style={{}} tab={
                                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'left', width: '100%', borderBottom: '1px solid #80808026', padding: '0px 0 5px 0', borderBottomWidth: 'thin' }}>
                                                <div >
                                                    <img src='' alt='' width={60} height={60} />

                                                </div>
                                                <div className='tenRapcontainer'>
                                                    <span className='tenRap' style={{ marginLeft: '15px', color: 'black', animation: 'none' }}>123</span>

                                                </div>
                                            </div>

                                        } key='1'>
                                            
                                                 <div style={{ color: 'black' }} key='1' >
                                                    <div className="flex flex-row " style={{ alignItems: 'center' }}>
                                                        <img style={{ width: '60px', height: '60px', padding: '5px' }} src='cumRap.hinhAnh}' alt='' />
                                                        <div className='ml-2 '>
                                                            <p style={{ fontSize: '13px', paddingTop: '8px' }}>'1231313</p>
                                                            <p style={{ fontSize: '10px', opacity: '.5', lineHeight: '1' }}>231313</p>
                                                        </div>
                                                    </div>
                                                    <div className="thong_tin_lich_chieu grid grid-cols-6">
                                                        
                                                             <NavLink to='/' key='2' className='col-span-1 text-green-800 font-bold' style={{ padding: '2px' }}>

                                                                123131
                                                            </NavLink>
                                                    
                                                    </div>
                                                </div>
                                         
                                        </Tabs.TabPane>
                              
                            

                                </Tabs>
                            </div>
                        </TabPane>
                        <Tabs.TabPane tab='Thông Tin' key='2'>
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                                    <div style={{ width: '50%' }}>
                                        <table style={{}}>
                                            <tr>
                                                <td className='tdBold'>Ngày công chiếu</td>
                                                <td>13131</td>
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
                                        <p>123131</p>
                                    </div>
                                </div>
                            </div>
                        </Tabs.TabPane>
                        <Tabs.TabPane tab='Đánh Giá' key='3' >
                            <div className='scrollBar'  style={{ display: 'flex', flexDirection: 'flex-column', width: '90%', height: '700px', margin: 'auto', flexDirection: 'column', height: '700px', overflowX: 'auto' }}>
                                <a style={{ color: 'black',margin: '10px 10px' }}>
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
                                <a style={{ color: 'black', margin: '10px 10px', backgroundColor: 'white', alignItems: 'center', padding: '5px 15px', borderRadius: "5px"}}>
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
  )
}

export default News