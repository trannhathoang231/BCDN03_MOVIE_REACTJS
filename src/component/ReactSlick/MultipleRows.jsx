import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import Film from "../Film/Film";
import styleSlick from './MultipleRowSlick.module.css'
import { SET_FILM_DANG_CHIEU, SET_FILM_SAP_CHIEU } from "../../redux/actions/types/QuanLyPhimType";




function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} ${styleSlick['slick-prev']}`}
            style={{ ...style, display: "block", }}
            onClick={onClick}
        />
    );
}



function SamplePrevArrow(props) {
    const { className, style, onClick } = props;

    return (
        <div
            className={`${className} ${styleSlick['slick-prev']}`}
            style={{ ...style, display: "block", position: 'absolute', left: '-60px' }}
            onClick={onClick}
        />
    );
}

const MultipleRows = (props) => {
    const dispatch = useDispatch();
    const renderFilm = () => {
        return props.arrFilm.map((phim, index) => {
            return <div className={`${styleSlick['width-item']}`} key={index}>
                <Film phim={phim} />
            </div>
        })
    }
    const { sapChieu, dangChieu } = useSelector(state => state.QuanLyPhimReducer)

    let activeClassDC = dangChieu === true ? 'active_Film' : 'none_active_Film';
    let activeClassSC = sapChieu === true ? 'active_Film' : 'none_active_Film';

    const settings = {
        className: "center variable-width",
        centerMode: false,
        infinite: true,
        slidesToShow: 4,
        speed: 500,
        rows: 1,
        slidesPerRow: 2,
        variableWidth: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        centerPadding: "200px",
    };
    return (
        <div className="content-style" style={{ width: '60%', margin: 'auto' }}>
            <button className={`${styleSlick[activeClassDC]} px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100`} type="button" style={{ margin: '5px' }} onClick={() => {
                const action = {
                    type: SET_FILM_DANG_CHIEU,
                }
                dispatch(action)
            }}>PHIM ĐANG CHIẾU</button>
            <button className={`${styleSlick[activeClassSC]} px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100`} type="button" style={{ margin: '5px' }} onClick={() => {
                const action = {
                    type: SET_FILM_SAP_CHIEU,
                }
                dispatch(action)
            }}>PHIM SẮP CHIẾU</button>
            <Slider  {...settings}>
                {renderFilm()}
            </Slider>
        </div>
    );
}

export default MultipleRows;