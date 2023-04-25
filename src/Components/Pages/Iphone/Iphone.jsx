import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { store } from '../../API/ApiFile'

const Iphone = () => {
    // const context=useContext(store)
    const [data,setData]=useState('')
  useEffect(()=>{
    axios.post('http://localhost:4000/getproduct')
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
    <div>
        <div className="home_container">
            <div className="carthr">Iphone</div>
            <div className="blockcon">
            {data &&
            data.filter((index)=>index.catagory==='Mobile').map((item,value)=>{
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
    </div>
  )
}

export default Iphone