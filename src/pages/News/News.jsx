import React from 'react'
import { Tabs } from 'antd'
import './News.css'
const { TabPane } = Tabs;
function News(props) {
    return (
        <div >
            <div id='news' className="container" style={{ width: '70%', margin: '0 auto', borderRadius: '10px' }}>
                <Tabs defaultActiveKey='1' centered  >
                    <TabPane aria-selected="false" tabBarGutter='10' tab='ĐIỆN ẢNH 24H' key='1'>
                        <div className='gap-4' style={{ display: 'flex' }}>
                            <a style={{ width: '50%' }} href='https://movie.zalopay.vn/landing'>
                                <div>
                                    <img src="img/News/an-dinh-chac-nich-ngay-khoi-chieu-16-04-ly-hai-tung-clip-lat-mat-48h-dam-chat-fast-furious-mien-song-nuoc-16170881088272.png" alt="1" style={{ borderRadius: '5px', width: '100%', height: '250px', marginBottom: '15px' }} />
                                </div>
                                <div>
                                    <h1 style={{ fontWeight: '800', fontSize: '17px' }}>Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip Lật Mặt: 48H đậm chất</h1>
                                </div>
                                <div>
                                    <span style={{ fontSize: '13px', color: '#6c757d' }}>Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip rượt đuổi gay cấn thót tim fans hâm mộ</span>
                                </div>
                            </a>
                            <a style={{ width: '50%' }} href='https://movie.zalopay.vn/landing'>
                                <div>
                                    <img src="img/News/mortal-kombat-cuoc-chien-sinh-tu-goi-ten-nhung-phim-dien-anh-noi-tieng-duoc-chuyen-the-tu-cac-tua-game-dinh-dam-16170160290762.png" alt="1" style={{ borderRadius: '5px', width: '100%', height: '250px', marginBottom: '15px' }} />
                                </div>
                                <div>
                                    <h1 style={{ fontWeight: '800', fontSize: '17px' }}>[MORTAL KOMBAT: CUỘC CHIẾN SINH TỬ] - GỌI TÊN NHỮNG PHIM ĐIỆN ẢNH NỔI...</h1>
                                </div>
                                <div>
                                    <span style={{ fontSize: '13px', color: '#6c757d' }}>Cư dân nơi khác đang sắp “gato nổ mắt” với dân Sài Thành khi sắp tới đây thành phố HCM sẽ chào đón một rạp chiếu phim mang phong cách Artistic Urban Lifestyle đầu tiên tại Việt Nam!</span>
                                </div>
                            </a>

                        </div>
                        <div className='gap-4' style={{ display: 'flex', margin: '20px 0' }}>
                            <a style={{ width: '35%' }} href='https://movie.zalopay.vn/landing'>
                                <div>
                                    <img src="img/News/promising-young-woman-bong-hong-nuoc-anh-carey-mulligan-va-man-tra-thu-dan-ong-de-doi-16166710855522.png" alt="1" style={{ borderRadius: '5px', width: '100%', height: '200px', marginBottom: '15px' }} />
                                </div>
                                <div>
                                    <h1 style={{ fontWeight: '800', fontSize: '17px' }}>PROMISING YOUNG WOMAN | Bông hồng nước Anh Carey Mulligan và màn trả thù...</h1>
                                </div>
                                <div>
                                    <span style={{ fontSize: '13px', color: '#6c757d' }}>Đề cử giải Oscar danh giá vừa gọi tên Carey Mulligan ở hạng mục nữ chính xuất sắc nhất cho vai diễn "đẫm máu" nhất sự nghiệp của cô trong phim</span>
                                </div>
                            </a>
                            <a style={{ width: '35%' }} href='https://movie.zalopay.vn/landing'>
                                <div>
                                    <img src="img/News/vua-dep-lai-vua-tai-nang-dan-sao-nam-cua-phim-ban-tay-diet-quy-dam-bao-don-tim-hoi-chi-em-16165783843676.png" alt="1" style={{ borderRadius: '5px', width: '100%', height: '200px', marginBottom: '15px' }} />
                                </div>
                                <div>
                                    <h1 style={{ fontWeight: '800', fontSize: '17px' }}>[MORTAL KOMBAT: CUỘC CHIẾN SINH TỬ] - GỌI TÊN NHỮNG PHIM ĐIỆN ẢNH NỔI...</h1>
                                </div>
                                <div>
                                    <span style={{ fontSize: '13px', color: '#6c757d' }}>Quy tụ 3 nam tài tử vừa điển trai, vừa được đánh giá cao về năng lực diễn xuất là Park Seo Joon, Woo Do Hwan và Choi Woo Sik, tác phẩm kinh dị – hành</span>
                                </div>
                            </a>
                            <div style={{ width: '30%', display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                                <a style={{ display: 'flex' }} href='https://movie.zalopay.vn/landing'>
                                    <img src="img/News/1.jpeg" alt="1" style={{ display: 'inline-block', width: '30%', height: 'auto' }} />
                                    <span style={{ color: '#6c757d', fontSize: '15px', fontWeight: '500', padding: '0 5px 0 5px' }}>Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn</span>
                                </a>
                                <a style={{ display: 'flex' }} href='https://movie.zalopay.vn/landing'>
                                    <img src="img/News/2.png" alt="2" style={{ display: 'inline-block', width: '30%', height: 'auto' }} />
                                    <span style={{ color: '#6c757d', fontSize: '15px', fontWeight: '500', padding: '0 5px 0 5px' }}>“Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành</span>
                                </a>
                                <a style={{ display: 'flex' }} href='https://movie.zalopay.vn/landing'>
                                    <img src="img/News/3.png" alt="3" style={{ display: 'inline-block', width: '30%', height: 'auto' }} />
                                    <span style={{ color: '#6c757d', fontSize: '15px', fontWeight: '500', padding: '0 5px 0 5px' }}>Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần công</span>
                                </a>
                                <a style={{ display: 'flex' }} href='https://movie.zalopay.vn/landing'>
                                    <img src="img/News/4.jpeg" alt='4' style={{ display: 'inline-block', width: '30%', height: 'auto' }} />
                                    <span style={{ color: '#6c757d', fontSize: '15px', fontWeight: '500', padding: '0 5px 0 5px' }}>NGÔ THANH VÂN CHÍNH THỨC KHỞI ĐỘNG CUỘC THI THIẾT</span>
                                </a>
                            </div>

                        </div>
                    </TabPane>
                    <Tabs.TabPane tab='REVIEW' key='2'>
                        <div className='gap-4' style={{ display: 'flex' }}>
                            <a style={{ width: '50%' }} href='https://movie.zalopay.vn/landing'>
                                <div>
                                    <img src="img/News/review-dinh-thu-oan-khuat-ghost-of-war-15965120886610.png" alt="1" style={{ borderRadius: '5px', width: '100%', height: '250px', marginBottom: '15px' }} />
                                </div>
                                <div>
                                    <h1 style={{ fontWeight: '800', fontSize: '17px' }}>Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip Lật Mặt: 48H đậm chất</h1>
                                </div>
                                <div>
                                    <span style={{ fontSize: '13px', color: '#6c757d' }}>Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip rượt đuổi gay cấn thót tim fans hâm mộ</span>
                                </div>
                            </a>
                            <a style={{ width: '50%' }} href='https://movie.zalopay.vn/landing'>
                                <div>
                                    <img src="img/News/review-tan-tich-quy-am-relic-ba-the-he-va-moi-lien-ket-15965255784224.png" alt="1" style={{ borderRadius: '5px', width: '100%', height: '250px', marginBottom: '15px' }} />
                                </div>
                                <div>
                                    <h1 style={{ fontWeight: '800', fontSize: '17px' }}>Review: Dinh Thự Oan Khuất (Ghost Of War)</h1>
                                </div>
                                <div>
                                    <span style={{ fontSize: '13px', color: '#6c757d' }}>Cư dân nơi khác đang sắp “gato nổ mắt” với dân Sài Thành khi sắp tới đây thành phố HCM sẽ chào đón một rạp chiếu phim mang phong cách Artistic Urban Lifestyle đầu tiên tại Việt Nam!</span>
                                </div>
                            </a>

                        </div>
                        <div className='gap-4' style={{ display: 'flex', margin: '20px 0' }}>
                            <a style={{ width: '35%' }} href='https://movie.zalopay.vn/landing'>
                                <div>
                                    <img src="img/News/promising-young-woman-bong-hong-nuoc-anh-carey-mulligan-va-man-tra-thu-dan-ong-de-doi-16166710855522.png" alt="1" style={{ borderRadius: '5px', width: '100%', height: '200px', marginBottom: '15px' }} />
                                </div>
                                <div>
                                    <h1 style={{ fontWeight: '800', fontSize: '17px' }}>PROMISING YOUNG WOMAN | Bông hồng nước Anh Carey Mulligan và màn trả thù...</h1>
                                </div>
                                <div>
                                    <span style={{ fontSize: '13px', color: '#6c757d' }}>Đề cử giải Oscar danh giá vừa gọi tên Carey Mulligan ở hạng mục nữ chính xuất sắc nhất cho vai diễn "đẫm máu" nhất sự nghiệp của cô trong phim</span>
                                </div>
                            </a>
                            <a style={{ width: '35%' }} href='https://movie.zalopay.vn/landing'>
                                <div>
                                    <img src="img/News/vua-dep-lai-vua-tai-nang-dan-sao-nam-cua-phim-ban-tay-diet-quy-dam-bao-don-tim-hoi-chi-em-16165783843676.png" alt="1" style={{ borderRadius: '5px', width: '100%', height: '200px', marginBottom: '15px' }} />
                                </div>
                                <div>
                                    <h1 style={{ fontWeight: '800', fontSize: '17px' }}>[MORTAL KOMBAT: CUỘC CHIẾN SINH TỬ] - GỌI TÊN NHỮNG PHIM ĐIỆN ẢNH NỔI...</h1>
                                </div>
                                <div>
                                    <span style={{ fontSize: '13px', color: '#6c757d' }}>Quy tụ 3 nam tài tử vừa điển trai, vừa được đánh giá cao về năng lực diễn xuất là Park Seo Joon, Woo Do Hwan và Choi Woo Sik, tác phẩm kinh dị – hành</span>
                                </div>
                            </a>
                            <div style={{ width: '30%', display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                                <a style={{ display: 'flex' }} href='https://movie.zalopay.vn/landing'>
                                    <img src="img/News/1.jpeg" alt="1" style={{ display: 'inline-block', width: '30%', height: 'auto' }} />
                                    <span style={{ color: '#6c757d', fontSize: '15px', fontWeight: '500', padding: '0 5px 0 5px' }}>Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn</span>
                                </a>
                                <a style={{ display: 'flex' }} href='https://movie.zalopay.vn/landing'>
                                    <img src="img/News/2.png" alt="2" style={{ display: 'inline-block', width: '30%', height: 'auto' }} />
                                    <span style={{ color: '#6c757d', fontSize: '15px', fontWeight: '500', padding: '0 5px 0 5px' }}>“Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành</span>
                                </a>
                                <a style={{ display: 'flex' }} href='https://movie.zalopay.vn/landing'>
                                    <img src="img/News/3.png" alt="3" style={{ display: 'inline-block', width: '30%', height: 'auto' }} />
                                    <span style={{ color: '#6c757d', fontSize: '15px', fontWeight: '500', padding: '0 5px 0 5px' }}>Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần công</span>
                                </a>
                                <a style={{ display: 'flex' }} href='https://movie.zalopay.vn/landing'>
                                    <img src="img/News/4.jpeg" alt='4' style={{ display: 'inline-block', width: '30%', height: 'auto' }} />
                                    <span style={{ color: '#6c757d', fontSize: '15px', fontWeight: '500', padding: '0 5px 0 5px' }}>NGÔ THANH VÂN CHÍNH THỨC KHỞI ĐỘNG CUỘC THI THIẾT</span>
                                </a>
                            </div>

                        </div>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab='KHUYẾN MÃI' key='3' >
                        <div className='gap-4' style={{ display: 'flex' }}>
                            <a style={{ width: '50%' }} href='https://movie.zalopay.vn/landing'>
                                <div>
                                    <img src="img/News/tix-1k-ve-ngai-chi-gia-ve-16045662877511.jpeg" alt="1" style={{ borderRadius: '5px', width: '100%', height: '250px', marginBottom: '15px' }} />
                                </div>
                                <div>
                                    <h1 style={{ fontWeight: '800', fontSize: '17px' }}>BHD 59K/VÉ CẢ TUẦN !!!</h1>
                                </div>
                                <div>
                                    <span style={{ fontSize: '13px', color: '#6c757d' }}>Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá 59k/vé khi mua vé trên TIX hoặc Mục Vé Phim trên ZaloPay.</span>
                                </div>
                            </a>
                            <a style={{ width: '50%' }} href='https://movie.zalopay.vn/landing'>
                                <div>
                                    <img src="img/News/bhd-59k-ve-ca-tuan-16190002421777.jpeg" alt="1" style={{ borderRadius: '5px', width: '100%', height: '250px', marginBottom: '15px' }} />
                                </div>
                                <div>
                                    <h1 style={{ fontWeight: '800', fontSize: '17px' }}>TIX 1K/VÉ NGẠI CHI GIÁ VÉ</h1>
                                </div>
                                <div>
                                    <span style={{ fontSize: '13px', color: '#6c757d' }}>Đồng giá 1k/vé cả tuần tất cả các rạp trên TIX + Nhận thêm 02 voucher thanh toán ZaloPay thả ga</span>
                                </div>
                            </a>

                        </div>
                        <div className='gap-4' style={{ display: 'flex', margin: '20px 0' }}>
                            <a style={{ width: '35%' }} href='https://movie.zalopay.vn/landing'>
                                <div>
                                    <img src="img/News/promising-young-woman-bong-hong-nuoc-anh-carey-mulligan-va-man-tra-thu-dan-ong-de-doi-16166710855522.png" alt="1" style={{ borderRadius: '5px', width: '100%', height: '200px', marginBottom: '15px' }} />
                                </div>
                                <div>
                                    <h1 style={{ fontWeight: '800', fontSize: '17px' }}>PROMISING YOUNG WOMAN | Bông hồng nước Anh Carey Mulligan và màn trả thù...</h1>
                                </div>
                                <div>
                                    <span style={{ fontSize: '13px', color: '#6c757d' }}>Đề cử giải Oscar danh giá vừa gọi tên Carey Mulligan ở hạng mục nữ chính xuất sắc nhất cho vai diễn "đẫm máu" nhất sự nghiệp của cô trong phim</span>
                                </div>
                            </a>
                            <a style={{ width: '35%' }} href='https://movie.zalopay.vn/landing'>
                                <div>
                                    <img src="img/News/vua-dep-lai-vua-tai-nang-dan-sao-nam-cua-phim-ban-tay-diet-quy-dam-bao-don-tim-hoi-chi-em-16165783843676.png" alt="1" style={{ borderRadius: '5px', width: '100%', height: '200px', marginBottom: '15px' }} />
                                </div>
                                <div>
                                    <h1 style={{ fontWeight: '800', fontSize: '17px' }}>[MORTAL KOMBAT: CUỘC CHIẾN SINH TỬ] - GỌI TÊN NHỮNG PHIM ĐIỆN ẢNH NỔI...</h1>
                                </div>
                                <div>
                                    <span style={{ fontSize: '13px', color: '#6c757d' }}>Quy tụ 3 nam tài tử vừa điển trai, vừa được đánh giá cao về năng lực diễn xuất là Park Seo Joon, Woo Do Hwan và Choi Woo Sik, tác phẩm kinh dị – hành</span>
                                </div>
                            </a>
                            <div style={{ width: '30%', display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                                <a style={{ display: 'flex' }} href='https://movie.zalopay.vn/landing'>
                                    <img src="img/News/1.jpeg" alt="1" style={{ display: 'inline-block', width: '30%', height: 'auto' }} />
                                    <span style={{ color: '#6c757d', fontSize: '15px', fontWeight: '500', padding: '0 5px 0 5px' }}>Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn</span>
                                </a>
                                <a style={{ display: 'flex' }} href='https://movie.zalopay.vn/landing'>
                                    <img src="img/News/2.png" alt="2" style={{ display: 'inline-block', width: '30%', height: 'auto' }} />
                                    <span style={{ color: '#6c757d', fontSize: '15px', fontWeight: '500', padding: '0 5px 0 5px' }}>“Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành</span>
                                </a>
                                <a style={{ display: 'flex' }} href='https://movie.zalopay.vn/landing'>
                                    <img src="img/News/3.png" alt="3" style={{ display: 'inline-block', width: '30%', height: 'auto' }} />
                                    <span style={{ color: '#6c757d', fontSize: '15px', fontWeight: '500', padding: '0 5px 0 5px' }}>Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần công</span>
                                </a>
                                <a style={{ display: 'flex' }} href='https://movie.zalopay.vn/landing'>
                                    <img src="img/News/4.jpeg" alt='4' style={{ display: 'inline-block', width: '30%', height: 'auto' }} />
                                    <span style={{ color: '#6c757d', fontSize: '15px', fontWeight: '500', padding: '0 5px 0 5px' }}>NGÔ THANH VÂN CHÍNH THỨC KHỞI ĐỘNG CUỘC THI THIẾT</span>
                                </a>
                            </div>

                        </div>
                    </Tabs.TabPane>
                </Tabs>
            </div>
        </div>
    )
}

export default News