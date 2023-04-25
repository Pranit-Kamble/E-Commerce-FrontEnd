import React from 'react'
import './Section2.css'
import shipping from '../Images/shipping.svg'
import refund from '../Images/refund.svg'
import support from '../Images/support.svg'

const Section2 = () => {
  return (
    <div className='sec2con'>
        <div className="sec2item">
            <img src={shipping} alt="" />
            <h3 className='sec2head'>FREE SHIPPING</h3>
            <p>Lorem, ipsum dolor sit amet consectetur gsjsk  Fugit deleniti voluptatibus saepe, pariatur illo quos sapiente distinctio repudiandae error unde maiores soluta quod autem ipsam harum! Assumenda quisquam quos dolore!</p>
        </div>
        <div className="sec2item">
        <img style={{height:'50px'}} src={refund} alt="" />
        <h3 className='sec2head'>100% REFUND</h3>
         <p>Lorem, ipsum dolor sit amet consectetur  elit. Fugit deleniti voluptatibus saepe, pariatur illo quos sapiente distinctio repudiandae error unde maiores soluta quod autem ipsam harum! Assumenda quisquam quos dolore!</p>
        </div>
        <div className="sec2item">
        <img style={{height:'50px'}} src={support} alt="" />
        <h3 className='sec2head'>SUPPORT 24/7</h3>
         <p>Lorem, ipsum dolor sit amet consectetur  elit. Fugit deleniti voluptatibus saepe, pariatur illo quos sapiente distinctio repudiandae error unde maiores soluta quod autem ipsam harum! Assumenda quisquam quos dolore!</p>
        </div>
    </div>
  )
}

export default Section2