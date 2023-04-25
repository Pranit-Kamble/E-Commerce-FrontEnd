import React from 'react'
import './storesection.css'

const StoreSection = () => {
  return (
    <div className='store-sec-con'>
        <div className='store-sec-img' ></div>
        <h1 className='store-sec-head'>WELCOME</h1>
        <p className='store-sec-para'>SHOP ANYTHING YOU WANT</p>
        <a href="#store"> <button className='store-sec-btn'>EXPLORE</button></a>
    </div>
  )
}

export default StoreSection