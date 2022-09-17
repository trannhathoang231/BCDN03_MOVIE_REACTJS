import React, { useEffect } from 'react'
import HomeMenu from './HomeMenu'
import './Home.css'
import { useSelector, useDispatch } from 'react-redux'
import MultipleRows from '../../component/ReactSlick/MultipleRows'
import { layDanhSachPhimAction } from '../../redux/actions/QuanLyPhimAction'
import { layDanhSachHeThongRapAction } from '../../redux/actions/QuanLyRapAction'
import News from '../News/News'
import HomeCarousel from '../../templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel'
import HomeApps from './HomeApps'
export default function Home() {

    const { arrFilm } = useSelector(state => state.QuanLyPhimReducer);
    const { heThongRapChieu } = useSelector(state => state.QuanLyRapReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        const action = layDanhSachPhimAction();
        dispatch(action)

        dispatch(layDanhSachHeThongRapAction);

    }, [])

    return (
        <div className='slickStyle'>
            <HomeCarousel />
            <div id='lichChieu' className='w-full'>

                <MultipleRows arrFilm={arrFilm} />

            </div>
            <div className='bgIMG' style={{ height: '120px', maxWidth: '940px', margin: 'auto', width: "100%", background: `url(img/PicRap/back-news.png) 0% 0% / 100% no-repeat` }} ></div>
            <div className="container m-auto " id='cumrap'>
                <HomeMenu heThongRapChieu={heThongRapChieu} />
                <div className='bgIMG' style={{ height: '120px', maxWidth: '940px', margin: 'auto', width: "100%", background: `url(img/PicRap/back-news.png) 0% 0% / 100% no-repeat` }} >

                </div>
            </div>
            <div id='news'>
                <News />

            </div>
            <div id='apps'>
                <HomeApps />
            </div>
        </div>
    )
}
