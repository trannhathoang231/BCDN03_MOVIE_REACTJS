import React from 'react'
import { Carousel } from 'antd';

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    marginTop: '96px'
};
function HomeCarousel() {
    return (
        <Carousel autoplay style={{ position: 'relative', zIndex: -1 }}>
            <div>
                <div style={contentStyle}>
                    <img src="https://picsum.photos/4000" className='w-full' alt="123" />
                </div>
            </div>
            <div>
                <h3div style={contentStyle}>
                    <img src="https://picsum.photos/4000" className='w-full' alt="222" />
                </h3div>
            </div>
            <div>
                <div style={contentStyle}>
                    <img src="https://picsum.photos/4000" className='w-full' alt="333" />
                </div>
            </div>
            <div>
                <div style={contentStyle}>
                    <img src="https://picsum.photos/4000" className='w-full' alt="444" />
                </div>
            </div>
        </Carousel>
    )
}

export default HomeCarousel