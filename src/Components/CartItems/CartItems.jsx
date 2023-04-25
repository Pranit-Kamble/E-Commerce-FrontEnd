import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import './Cart.css'

const CartItems = () => {
  const [order,setOrder] = useState()
  const [post,setPost] = useState(0)
    // const context=useContext(store)
    useEffect(()=>{
      const token = sessionStorage.getItem('Token')
       axios.post('https://e-commerce-backend-ueee.onrender.com/getorder',{token:token})
      .then((res)=>setOrder(res.data.orders))
    },[post])
    // console.log(order)


      var sum = 0
      order && order.forEach((x)=>sum = sum +parseInt(x.price.split('').splice(1).filter((x)=>x!==',').join(''),10)*x.qty)
      // console.log(sum)




    const handleClick =  (data)=>{
      const token  = sessionStorage.getItem('Token')
      setPost(post+1)
       axios.put('https://e-commerce-backend-ueee.onrender.com/order',{data:data,token:token})
      // .then((res)=>console.log(res))
      .catch((err)=>console.log(err))
    }
  return (
    <div className='cartcon'>
      <div className='carthr'>Cart</div>
      <table>
        <thead>
        <tr>
          <th>PRODUCT</th>
          <th></th>
          <th>PRICE</th>
          <th>QTY</th>
          <th>UNIT PRICE</th>
        </tr>
        </thead>
        {
          order &&
            order.map((item,index)=>{
              return(
                  <tbody key={index}>
                    <tr >
                    <td><img className='cartimg' src={item.image} alt="" /></td>
                    <td>{item.name}</td>
                    <td>₹{parseInt(item.price.split('').splice(1).filter((x)=>x!==',').join(''),10)*item.qty}</td>
                    <td>
                      <button onClick={()=>handleClick({order:item,type:'inc'})} className='qty-btn'>+</button>
                      {item.qty}
                      <button onClick={()=>handleClick({order:item,type:'dec'})} className='qty-btn'>-</button>
                    </td>
                    <td>{item.price}</td>
                  </tr>
                  </tbody>
              )
            })
        }
        </table>
        <div className='cartfoot'>
          <div>
            <input placeholder='Voucher code' className='redeem' type="text" />
            <button className='redeembtn'>Redeem</button>
          </div>
          <div className='carttotal'>
            <div className='carttotal1'><span>Subtotal</span><span>₹{sum}</span></div>
            <div className='carttotal1'><span>Shipping fee</span><span>₹50</span></div>
            <div className='carttotal1'><span>Coupon</span><span>No</span></div>
            <hr />
            <div className='carttotal1'><h2>TOTAL</h2><span>₹{sum+50}</span></div>
            <button className='add-cart-btn'>CheckOut</button>
          </div>
        </div>
    </div>
  )
}

export default CartItems