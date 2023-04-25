import React from 'react'
import { Link } from 'react-router-dom';
import './Allitem.css'

const Allitems_section = () => {
  return (
   <div className="wrapper" id='store'>
    <Link onClick={()=>window.scroll(0,0)} to='/macbook'>
    <div className="parent">
      <div className="child bg-one">
      <div className='hidden-text'>MACKBOOK</div>
      </div>
    </div>
    </Link>
    <Link onClick={()=>window.scroll(0,0)} to='/iphone'>
    <div className="parent">
      <div className="child bg-two">
      <div className='hidden-text'>IPHONES</div>
      </div>
    </div>
    </Link>
    <Link onClick={()=>window.scroll(0,0)} to='/accesories'>
    <div className="parent">
      <div className="child bg-three">
      <div className='hidden-text'>IPODS</div>
      </div>
    </div>
    </Link>
   </div>
  )
}

export default Allitems_section;