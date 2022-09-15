import React, { useEffect } from 'react'
import HomeMenu from './HomeMenu'
import './Home.css'
import { useSelector, useDispatch } from 'react-redux'
import MultipleRows from '../../component/ReactSlick/MultipleRows'
import { layDanhSachPhimAction } from '../../redux/actions/QuanLyPhimAction'
import { layDanhSachHeThongRapAction } from '../../redux/actions/QuanLyRapAction'
// import backNew from '../../../public/img/PicRap/back-news.png'
import News from '../News/News'
import HomeCarousel from '../../templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel'
export default function Home() {

  const { arrFilm } = useSelector(state => state.QuanLyPhimReducer);
  const {heThongRapChieu} = useSelector(state => state.QuanLyRapReducer)
  const dispatch = useDispatch();

  useEffect(() => { 
    const action = layDanhSachPhimAction();
    dispatch(action) //dispatch function từ thunk

    dispatch(layDanhSachHeThongRapAction);

   },[])
  
  return (
    <div className='slickStyle'>
            <HomeCarousel/>

      
      <div id='lichChieu' className='w-full'>
      
        {/* <div className="film film__container flex m-auto py-10" style={{ justifyContent: 'space-around' }}> */}
          <MultipleRows  arrFilm={arrFilm}/>
          
        </div>
        <div style={{height: '120px',  maxWidth: '940px', margin: 'auto', width: "100%", background: `url(../../../public/img/PicRap/back-news.png) 0% 0% / 100% no-repeat`}} ></div>
        <div className="container m-auto ">
          <HomeMenu heThongRapChieu={heThongRapChieu}/>
        <div style={{height: '120px',  maxWidth: '940px', margin: 'auto', width: "100%", background: `url(../../../public/img/PicRap/back-news.png) 0% 0% / 100% no-repeat`}} >

        </div>
        {/* </div> */}
      </div>
      <div id='news'>
          <News/>

      </div>
    </div>
  )
}
