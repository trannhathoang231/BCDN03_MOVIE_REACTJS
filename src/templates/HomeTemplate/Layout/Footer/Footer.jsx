import React from 'react'

function Footer(props) {
    return (
        <div className='w-full ' style={{ backgroundColor: '#222', color: 'white' }}>
            <footer className="p-6 dark:bg-gray-800 dark:text-gray-100 " style={{ width: '70%', margin: 'auto' }}>
                <div className="grid grid-cols-3 gap-2 mx-auto" id="footerRes-Div">
                    <div className="flex p-4" id='footerRes-Tix'>
                        <div style={{ width: '30%', }}>

                            <p>TIX</p>

                            <div><a style={{ display: 'block', color: '#949494' }} href="https://www.cgv.vn/">FAQ</a></div>
                            <div><a style={{ display: 'block', color: '#949494' }} href="https://www.cgv.vn/">Brand Guidelines</a></div>
                        </div>
                        <div style={{ width: '70%', lineHeight: '3' }} id='footerRes-div-a'>
                            <div>
                                <a id='footerRes-a' style={{ display: 'block', color: '#949494' }} href="https://www.cgv.vn/">Thoả thuận sử dụng</a>
                            </div>
                            <div><a id='footerRes-a' style={{ display: 'block', color: '#949494' }} href="https://www.cgv.vn/">Chính sách bảo mật</a></div>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-4 p-4">
                        <h2 className="font-light text-white">Đối tác</h2>
                        <div className="grid grid-cols-5 gap-2 text-sm dark:text-gray-400" id='footerRes-partner'>
                            <div className='m-auto'>
                                <img src='/img/Partner/123go.png' alt='123go' style={{ width: '30px', height: '30px', borderRadius: '50%', border: '1px solid gray' }} />
                            </div>
                            <div className='m-auto'>
                                <img src='/img/Partner/AGRIBANK.png' alt='AGRIBANK' style={{ width: '30px', height: '30px', borderRadius: '50%', border: '1px solid gray' }} />
                            </div>
                            <div className='m-auto'>
                                <img src='../../../../img/Partner/bhd.png' alt='bhd' style={{ width: '30px', height: '30px', borderRadius: '50%', border: '1px solid gray' }} />
                            </div>
                            <div className='m-auto'>
                                <img src='../../../../img/Partner/bt.jpeg' alt='bt' style={{ width: '30px', height: '30px', borderRadius: '50%', border: '1px solid gray' }} />
                            </div>
                            <div className='m-auto'>
                                <img src='../../../../img/Partner/cgv.png' alt='cgv' style={{ width: '30px', height: '30px', borderRadius: '50%', border: '1px solid gray' }} />
                            </div>
                            <div className='m-auto'>
                                <img src='../../../../img/Partner/cinestar.png' alt='cinestar' style={{ width: '30px', height: '30px', borderRadius: '50%', border: '1px solid gray' }} />
                            </div>
                            <div className='m-auto'>
                                <img src='../../../../img/Partner/cnx.jpeg' alt='cnx' style={{ width: '30px', height: '30px', borderRadius: '50%', border: '1px solid gray' }} />
                            </div>
                            <div className='m-auto'>
                                <img src='../../../../img/Partner/dcine.png' alt='dcine' style={{ width: '30px', height: '30px', borderRadius: '50%', border: '1px solid gray' }} />
                            </div>
                            <div className='m-auto'>
                                <img src='../../../../img/Partner/dongdacinema.png' alt='dongdacinema' style={{ width: '30px', height: '30px', borderRadius: '50%', border: '1px solid gray' }} />
                            </div>
                            <div className='m-auto'>
                                <img src='../../../../img/Partner/galaxycine.png' alt='galaxycine' style={{ width: '30px', height: '30px', borderRadius: '50%', border: '1px solid gray' }} />
                            </div>
                            <div className='m-auto'>
                                <img src='../../../../img/Partner/IVB.png' alt='IVB' style={{ width: '30px', height: '30px', borderRadius: '50%', border: '1px solid gray' }} />
                            </div><div className='m-auto'>
                                <img src='../../../../img/Partner/laban.png' alt='laban' style={{ width: '30px', height: '30px', borderRadius: '50%', border: '1px solid gray' }} />
                            </div><div className='m-auto'>
                                <img src='../../../../img/Partner/lotte.png' alt='lotte' style={{ width: '30px', height: '30px', borderRadius: '50%', border: '1px solid gray' }} />
                            </div><div className='m-auto'>
                                <img src='../../../../img/Partner/megags.png' alt='megags' style={{ width: '30px', height: '30px', borderRadius: '50%', border: '1px solid gray' }} />
                            </div><div className='m-auto'>
                                <img src='/img/Partner/payoo.jpeg' alt='payoo' style={{ width: '30px', height: '30px', borderRadius: '50%', border: '1px solid gray' }} />
                            </div><div className='m-auto'>
                                <img src='../../../../img/Partner/STARLIGHT.png' alt='STARLIGHT' style={{ width: '30px', height: '30px', borderRadius: '50%', border: '1px solid gray' }} />
                            </div><div className='m-auto'>
                                <img src='../../../../img/Partner/TOUCH.png' alt='TOUCH' style={{ width: '30px', height: '30px', borderRadius: '50%', border: '1px solid gray' }} />
                            </div><div className='m-auto'>
                                <img src='../../../../img/Partner/VIETTINBANK.png' alt='VIETTINBANK' style={{ width: '30px', height: '30px', borderRadius: '50%', border: '1px solid gray' }} />
                            </div><div className='m-auto'>
                                <img src='../../../../img/Partner/zalopay_icon.png' alt='zalopay_icon' style={{ width: '30px', height: '30px', borderRadius: '50%', border: '1px solid gray' }} />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4 p-4">
                        <div className='flex'>
                            <h2 className="font-medium" style={{ textAlign: 'center', width: '50%', color: 'white' }}>MOBILE APP</h2>
                            <h2 className="font-medium" style={{ textAlign: 'center', width: '50%', color: 'white' }}>SOCIAL APP</h2>
                        </div>
                        <div className='flex'>
                            <div className='flex m-auto justify-around' style={{ width: '50%' }}>
                                <img src='/img/Partner/App/apple-logo.png' alt='appleLogo' style={{ width: '30px', height: '30px' }} />
                                <img src='/img/Partner/App/android-logo.png' alt='androidLogo' style={{ width: '30px', height: '30px' }} />

                            </div>
                            <div className='flex m-auto justify-around' style={{ width: '50%' }}>
                                <img src='/img/Partner/App/facebook-logo.png' alt='facebookLogo' style={{ width: '30px', height: '30px', }} />
                                <img src='/img/Partner/App/zalo-logo.png' alt='zaloLogo' style={{ width: '30px', height: '30px' }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex  px-6 pt-12 text-sm" id='footerRes'>
                    <img src="/img/Partner/zion-logo.jpeg" alt="zion" style={{ width: '90px', height: 'fit-content', borderRadius: '10px', border: '1px solid white', display: 'block' }} />
                    <span className="dark:text-gray-400 px-3" id='text-footer' style={{ fontSize: '11px' }}>TIX - SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZIONĐịa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh, Việt Nam.Giấy chứng nhận đăng ký kinh doanh số: 0101659783,đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế hoạch và đầu tư Thành phố Hồ Chí Minh cấp.Số Điện Thoại (Hotline): 1900 545 436
                        Email: support@tix.vn</span>
                    <img src="/img/Partner/certificate.png" alt="certificate" style={{ width: '150px', height: 'fit-content' }} />

                </div>
            </footer>

        </div>

    )
}

export default Footer