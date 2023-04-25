import React from 'react'
import Allitems_section from '../../AllItems/Allitems_section'
import StoreSection from '../../StoreSection/StoreSection'
import './Store.css'

const Store = () => {
  return (
    <div className='home_container'>
      <StoreSection/>
      <Allitems_section/>
    </div>
  )
}

export default Store