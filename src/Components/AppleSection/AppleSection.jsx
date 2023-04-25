import React from 'react'
import './apple.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAppleAlt } from '@fortawesome/free-solid-svg-icons'

const AppleSection = () => {
  return (
    <div className='apple-container'>
        <FontAwesomeIcon className='apple-icon' size='5x' icon={faAppleAlt} />
        <FontAwesomeIcon className='apple-icon2' size='5x' icon={faAppleAlt} />
            <h1 className='apple-title'>APPLE</h1>
            <p>Think different</p>
            <button className='apple-btn'>SHOP</button>
    </div>
  )
}

export default AppleSection