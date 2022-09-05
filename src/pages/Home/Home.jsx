import React from 'react'
import HomeMenu from './HomeMenu'
import './Home.css'
export default function Home() {



  return (
    <div className='w-full'>
      <div className="film flex m-auto w-90 py-10" style={{ justifyContent: 'space-around' }}>
        <div className="phimDangChieu max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50" >
          <img src="https://source.unsplash.com/random/300x300/?1" alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
          <div className="mt-6 mb-2">
            <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">Quisque</span>
            <h2 className="text-xl font-semibold tracking-wide">Nam maximus purus</h2>
          </div>
          <p className="dark:text-gray-100">Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.</p>
          <button className='btn btnHover flex '>Mua Vé</button>
        </div>
        <div className="phimDangChieu max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50" >
          <img src="https://source.unsplash.com/random/300x300/?1" alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
          <div className="mt-6 mb-2">
            <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">Quisque</span>
            <h2 className="text-xl font-semibold tracking-wide">Nam maximus purus</h2>
          </div>
          <p className="dark:text-gray-100">Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.</p>
          <button className='btn btnHover flex '>Mua Vé</button>
        </div>
        <div className="phimDangChieu max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50" >
          <img src="https://source.unsplash.com/random/300x300/?1" alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
          <div className="mt-6 mb-2">
            <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">Quisque</span>
            <h2 className="text-xl font-semibold tracking-wide">Nam maximus purus</h2>
          </div>
          <p className="dark:text-gray-100">Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.</p>
          <button className='btn btnHover flex '>Mua Vé</button>
        </div>

      </div>

      <div className="container m-auto py-10">
        <HomeMenu />

      </div>
    </div>
  )
}
