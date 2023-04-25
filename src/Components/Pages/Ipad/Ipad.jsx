import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { store } from '../../API/ApiFile'

const Ipad = () => {
    // const context=useContext(store)
    const [data,setData]=useState('')
    useEffect(()=>{
    axios.post('https://e-commerce-backend-ueee.onrender.com/getproduct')
    .then((res)=>setData(res.data))
  },[])

    const handleclick=(id)=>{
      data.setcount((prevVal)=>{
        prevVal.push(id)
        console.log(prevVal)
        return prevVal
      })
    }
  return (
    <>
        <div className='home_container'>
        <div className='carthr'>Ipad</div>
       <div className="blockcon">
       {data &&
          data.filter(index=>index.catagory==='Ipad').map((item,value)=>{
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
  
    </>
  )
}

export default Ipad