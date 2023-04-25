import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'
import './Slider.css'
import img1 from '../Images/1.jpeg'
import img2 from '../Images/2.jpeg'
import img3 from '../Images/3.jpeg'
import img4 from '../Images/4.jpeg'
import img5 from '../Images/5.jpeg'

const Slider = () => {
    const [index,setIndex]=useState(0);
    const [allimg]=useState([img1,img2,img3,img4,img5])

    useEffect(() => {
      const intervalId = setInterval(() => {
        setIndex((index + 1) % allimg.length);
      }, 3000);
      return () => clearInterval(intervalId);
    }, [index]);

    const handlePrevClick = () => {
      setIndex(index-1);
    };
  
    const handleNextClick = () => {
      setIndex(index + 1);
    };
  
  return (
    <div className='slidercon'>
        <button className='prevbtn' onClick={handlePrevClick}><FontAwesomeIcon  size="3x" icon={faCircleChevronLeft}/></button>
        <img className='slider' src={allimg[index]} alt="Not Found" />
        <button className='nextbtn' onClick={handleNextClick}><FontAwesomeIcon  size="3x" icon={faCircleChevronRight}/></button>
    </div>
  )
}

export default Slider