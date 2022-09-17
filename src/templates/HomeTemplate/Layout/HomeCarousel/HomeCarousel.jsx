import React, {useEffect} from 'react'
import { Carousel } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { getCarouselAction } from '../../../../redux/actions/CarouselAction';
import './HomeCarousel.css'
const contentStyle = {
    height: '600px',
    // lineHeight: '160px',
    // textAlign: 'center',
    marginTop: '72px',
    backgroundSize: 'cover ',
    backgroundRepeat: 'no-repeat ',
    backgroundPosition:'center'
};
function HomeCarousel(props) {
    
    const {arrImg} = useSelector(state=> state.CarouselReducer)
    const dispatch = useDispatch();

    //sẽ tự kích hoạt khi component tự load ra
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(  () => { 
        dispatch(getCarouselAction)
     },[])
   
    // console.log(arrImg);

    const renderImg = () => { 
        return arrImg.map((item,maBanner) => { 
            return <div key={maBanner}>
                <div id='img-carousel' style={{...contentStyle, backgroundImage: `url(${item.hinhAnh})`, height:'690px'}}>
                    <img src={item.hinhAnh} className='w-full opacity-0'  alt={item.hinhAnh} />
                </div>
            </div>
         })
     }
    return (
        <Carousel autoplay  style={{height: 'fit-content',}}>
            {renderImg()}
        </Carousel>
    )
}

export default HomeCarousel