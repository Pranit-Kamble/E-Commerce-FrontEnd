import React, { useEffect } from 'react'
import { useContext } from 'react'
import { store } from '../../API/ApiFile'
import { useState } from 'react'
import axios from 'axios'

const Accesories = () => {
    // const context=useContext(store)
    const [show,setshow]=useState(8)
    const [data,setData]=useState('')
    useEffect(()=>{
      axios.post('https://e-commerce-backend-ueee.onrender.com/getproduct')
      .then((res)=>setData(res.data))
    },[])
    
    const handlemore=()=>{
      setshow(prev=>prev+8)
    }
  
    const handleless=()=>{
      setshow(prev=>prev-8)
    }
    const handleclick=(id)=>{
      data.setcount((prevVal)=>{
        prevVal.push(id)
        console.log(prevVal)
        return prevVal
      })
    }
    return (
      <div>
      <div className='home_container'>
      <div className='carthr'>Acessories</div>
          <div className='blockcon'>
          {data &&
              data.filter((index)=>index.catagory==='Accessories').slice(0,show).map((item,value)=>{
                  return (
                      <div className='block' key={value}>
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
        {/* <div> {(show<=data.filter((value)=>value.catagory='Accessories').length)&&<button onClick={handlemore} className='loadmore'>Load More<hr style={{border:'2px solid rgb(72, 157, 226)'}}/></button>}</div> */}
        <div> {(show>=9)&&<button onClick={handleless} className='loadmore'>Show Less<hr style={{border:'2px solid rgb(72, 157, 226)'}}/></button>}</div>
      </div>
      </div>
     
    )
}

export default Accesories