import React, { useContext, useEffect, useState } from 'react'
// import { store } from '../../API/ApiFile'
import './Home.css'
import Slider from '../../Slider/Slider'
import AppleSection from '../../AppleSection/AppleSection'
import axios from 'axios'

const Home = () => {
  // const context=useContext(store)
  const [msg,setMsg] = useState('')
  const [filter,setFilter] = useState('')
  const [show,setshow]=useState(4)
  const [data,setData]=useState('')

  useEffect(()=>{
    axios.post('https://e-commerce-backend-ueee.onrender.com/getproduct',filter)
    .then((res)=>setData(res.data))
  },[filter])



  const handlemore=()=>{
    setshow(prev=>prev+4)
  }

  const handleless=()=>{
    setshow(prev=>prev-4)
  }
  const handleclick= async  (order)=>{
      var token = sessionStorage.getItem('Token')
      await axios.post('http://localhost:4000/order',{order:order,token:token})
      .then((res)=>console.log(res.data))
      .catch((err)=>console.log(err))
  }

  return (
    <div className='body'>
        {/* <Slider /> */}
        <a href='#home'>
      {/* <AppleSection/> */}
        </a>
    <div className='home_container'>
      <h1 id='home' >Best Sellers</h1>
      <div className='homenav'>
        <div onClick={()=>setFilter('')}>All</div>
        <div onClick={()=>setFilter({'catagory':'Ipad'})}>Ipad</div>
        <div onClick={()=>setFilter({'catagory':'Mobile'})}>Iphone</div>
        <div onClick={()=>setFilter({'catagory':'macbook'})}>Macbook</div>
        <div onClick={()=>setFilter({'catagory':'Accessories'})}>Accessories</div>

       
      </div>
        <div className='blockcon'>
        {data &&
            data.slice(0,show).map((item,value)=>{
                return (
                    <div  className='block' key={value}>
                       <img style={{height:'150px'}} src={item.image} alt="" />
                       <h3>{item.name}</h3>
                       <img style={{height:'50px'}} src={item.ratting} alt="" />
                       <div><span>{item.price}</span> <span style={{textDecoration:'line-through',color:'gray'}}>{item.oPrice}</span></div>
                       <button className='add-cart-btn' id={item.id} onClick={()=>handleclick(item)}>Add to Cart</button>
                    </div>
                )
            })
        }
        </div>
    </div>
    <div className='loading'>
      <div> {(show<=data.length)&&<button onClick={handlemore} className='loadmore'>Load More<hr style={{border:'2px solid rgb(72, 157, 226)'}}/></button>}</div>
      <div> {(show>=5)&&<button onClick={handleless} className='loadmore'>Show Less<hr style={{border:'2px solid rgb(72, 157, 226)'}}/></button>}</div>
    </div>
    </div>
   
  )
}

export default Home