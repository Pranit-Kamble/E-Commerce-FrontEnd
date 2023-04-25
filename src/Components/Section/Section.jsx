import React from 'react'
import './Section.css'
import iphone6 from '../Images/iphone_6_plus.png'


const Section = () => {
  return (
    <div className='sectioncon'>
      <div className='sectiontext'>
      <div className='iphone6name'>iPhone 6 Plus</div>
      <div className='iphone6para'>Performance and design. Taken right to the edge.</div>
      <h5 className='iphone6last'>Shop Now</h5>
      </div>
      <img className='iphone6img' src={iphone6} alt="" />
    </div>
  )
}

export default Section