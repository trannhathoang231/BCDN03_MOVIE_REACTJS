import React from 'react'
// import playbutton from '../../img/buttonplay.png'
import '../Film/Film.css'
// import { PlayCircleOutlined } from '@ant-design/icons'


function Film(props) {

  const { phim } = props;
  return (
    <div className="phimDangChieu max-w-xs   my-3" style={{ backgroundColor: 'white !important', marginTop: '20px', paddingBottom: '20px' }}>
      <div className='img_container' style={{ background: `url(${phim.hinhAnh})`}}>
        <img src={phim.hinhAnh} alt={phim.hinhAnh} className="object-cover object-center rounded-md opacity-0 w-full " style={{ height: '300px' }} />

        <div>
          {/* <button type="button" data-toggle="modal" data-target="#myModal">Launch modal</button> */}
          {/* <div className="rounded-full playButton cursor-pointer"><PlayCircleOutlined style={{ fontSize: '50px' }} />
          
            </div> */}

            {/* <div className="text-2xl mt-2 font-bold">{phim.tenPhim}</div> */}

          </div>

        </div>

        <div className="py-2" style={{ paddingBottom: '30px',marginBottom:'30px' }}>
          <h3 className="text-base font-semibold" style={{position:'absolute',top:'305px',left:'0',lineHeight:'120%'}}>{phim.tenPhim}</h3>
        </div>
        <span style={{ fontWeight: '3', color: 'w', backgroundColor: '#fb4226', padding: '5px', borderRadius: '5px', marginRight: '8px', lineHeight: '19px' }}>C18</span>
        <p className="dark:text-gray-100" style={{ marginTop: '3rem' }}>120 Phút | Tix 10</p>
        {/* <div className='div_container'style={{width:'100%',height:'181px', backgroundColor:'white',position:'absolute',bottom:'-76px',left:'0'}}>
       
        </div> */}
        <button className='btn btnHover ' style={{position:'absolute',bottom:'0'}}>Mua Vé</button>

      </div>
      )
}

      export default Film