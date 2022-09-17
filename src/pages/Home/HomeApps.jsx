import React from 'react'
import './HomeApps.css'

function HomeApps() {

    return (
        <div className='bgimage' style={{ backgroundImage: 'url(img/backapp.jpeg)', height: '500px', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <div style={{ display: 'flex', width: '70%', margin: 'auto', alignItems: 'center', justifyContent: 'space-evelyn' }}>
                <div>
                    <div >
                        <h1>Ứng dụng tiện lợi dành cho người yêu điện ảnh</h1>
                    </div>
                    <div>
                        <p>Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi quà hấp dẫn.</p>
                    </div>
                    <button>Cài đặt Progressive App!</button>
                    <div>
                        <p>Tix có hai phiên bản <a href="https://apps.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197">IOS</a> và <a href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123">Android</a></p>
                    </div>
                </div>
                <div style={{ height: 'fit-content' }}>
                    <img src="img/mobile.png" alt="mobile" style={{ width: 'auto', height: '370px', display: 'block' }} />
                    <div style={{ width: 'fit-content' }}>

                    </div>


                </div>
            </div>
        </div>

    )
}

export default HomeApps