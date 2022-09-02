import { Tabs } from 'antd';
import React from 'react'
import { useState } from 'react';

const { TabPane } = Tabs;

function HomeMenu(props) {
    return (
        <div>
            <Tabs tabPosition={'left'}>
                <TabPane tab={<img src="https://picsum.photos/200" className='rounded-full' width={80} alt="" />} key="1">
                    <Tabs defaultActiveKey='4' type="card" tabPosition={'left'} >
                        <TabPane  tab={<img src="https://picsum.photos/200" className='rounded-full' width={80} alt="" />} key="1">
                            Content of card tab 1-1
                        </TabPane>
                        <TabPane tab={<img src="https://picsum.photos/200" className='rounded-full' width={80} alt="" />} key="2">
                            Content of card tab 1-2  
                        </TabPane>
                        <TabPane tab={<img src="https://picsum.photos/200" className='rounded-full' width={80} alt="" />} key="3">
                            Content of card tab 1-3
                        </TabPane>

                    </Tabs>
                </TabPane>
                <TabPane tab={<img src="https://picsum.photos/200" className='rounded-full' width={80} alt="" />} key="2">
                    Content of Tab 2
                </TabPane>
                <TabPane tab={<img src="https://picsum.photos/200" className='rounded-full' width={80} alt="" />} key="3">
                    Content of Tab 3
                </TabPane>
            </Tabs>
        </div>
    )
}

export default HomeMenu