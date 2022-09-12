import React from 'react'
import { CustomCard } from '@tsamantanis/react-glassmorphism'
import '@tsamantanis/react-glassmorphism/dist/index.css'
import '../../../public/assets/circleRating.css'

function Detail(props) {
    return (
        <div style={{ minheight: '100vh', paddingTop: '70px' }}>
            <CustomCard
                style={{ height: '100%' }}
                effectColor="#fff" // required
                color="black" // default color is white
                blur={20} // default blur value is 10px
                borderRadius={'none'} // default border radius value is 10px
            >

                <div className='grid grid-cols-12'>
                    <div className='col-span-4 col-col-start-4'>
                        <div className='grid grid-cols-2'>
                            <img src="https://picsum.photos/200/350" alt="123" />
                            <div className="c100 p25 dark orange">
                                <span>25%</span>
                                <div className="slice">
                                    <div className="bar" />
                                    <div className="fill" />
                                </div>
                            </div>


                            <p>Tên phim</p>
                            <p>Mô tả</p>
                        </div>
                    </div>

                </div>
            </CustomCard>
        </div>
    )
}

export default Detail