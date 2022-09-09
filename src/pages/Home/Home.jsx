import React, { useEffect } from 'react'
import HomeMenu from './HomeMenu'
import './Home.css'
import { useSelector, useDispatch } from 'react-redux'
import MultipleRows from '../../component/ReactSlick/MultipleRows'
import { layDanhSachPhimAction } from '../../redux/actions/QuanLyPhimAction'
import { layDanhSachHeThongRapAction } from '../../redux/actions/QuanLyRapAction'
import backNew from '../../img/PicRap/back-news.png'
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
      
      <div className='w-full'>
      
        {/* <div className="film film__container flex m-auto py-10" style={{ justifyContent: 'space-around' }}> */}
          <MultipleRows arrFilm={arrFilm}/>
          
        </div>
        <div style={{height: '120px',  maxWidth: '940px', margin: 'auto', width: "100%", background: `url("${backNew}") 0% 0% / 100% no-repeat`}} ></div>
        <div className="container m-auto ">
          <HomeMenu heThongRapChieu={heThongRapChieu}/>

        {/* </div> */}
      </div>
    </div>
  )
}
