import React from 'react'
import '../Film/Film.css'
import { history } from '../../App'

function Film(props) {

    const { phim } = props;
    return (
        <div className="phimDangChieu max-w-xs   my-3" style={{ backgroundColor: 'white !important', marginTop: '20px', paddingBottom: '20px' }}>
            <div className='img_container' style={{ background: `url(${phim.hinhAnh})` }}>
                <img src={phim.hinhAnh} alt={phim.hinhAnh} className="object-cover object-center rounded-md opacity-0 w-full " style={{ height: '300px' }} />

                <div>

                </div>

            </div>

            <div className="py-2" style={{ paddingBottom: '30px', marginBottom: '30px' }}>
                <h3 className="text-base font-semibold" style={{ position: 'absolute', top: '305px', left: '0', lineHeight: '120%' }}>{phim.tenPhim}</h3>
            </div>
            <span style={{ fontWeight: '3', color: 'w', backgroundColor: '#fb4226', padding: '5px', borderRadius: '5px', marginRight: '8px', lineHeight: '19px' }}>C18</span>
            <p className="dark:text-gray-100" style={{ marginTop: '3rem' }}>120 Phút | Tix 10</p>

            <div onClick={() => {
                history.push(`/detail/${phim.maPhim}`)
            }} className='btn btnHover cursor-pointer bg-warning' style={{ position: 'absolute', bottom: '0' }}>Mua Vé</div>

        </div>
    )
}

export default Film