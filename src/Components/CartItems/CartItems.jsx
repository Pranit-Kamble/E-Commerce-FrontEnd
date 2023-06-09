import axios from 'axios'
import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useEffect,useMemo } from 'react'
import { context } from '../../App'
import './Cart.css'

const CartItems = () => {
  const count2 = useContext(context).count 
  const setCount2 = useContext(context).setCount 
  const count = useContext(context).count
  const setCount = useContext(context).setCount
  const [check,setCheck] = useState(false)
  const [order,setOrder] = useState()
  const [post,setPost] = useState(0)
    // const context=useContext(store)
    useEffect(()=>{
      const token = sessionStorage.getItem('Token')
      // setInterval(()=>{
        axios.post('https://e-commerce-backend-ueee.onrender.com/getorder',{token:token})
      .then((res)=>setOrder(res.data.orders))
      // },100)
    },[])
    // console.log(order.length)


      var sum = 0
      useMemo(() => {
        order && order.forEach((x)=>sum = sum +parseInt(x.price.split('').splice(1).filter((x)=>x!==',').join(''),10)*x.qty)
      // console.log(sum)
      }, [order])

      const initPayment = (data)=>{
        const options = {
          key: 'rzp_test_1e843KbAQUB6Sn',
          amount: data.amount,
          currency: data.currency,
          description: "Test Transaction",
          order_id: data.id,
          handler: async (response) => {
            try {
              const verifyUrl = "https://e-commerce-backend-ueee.onrender.com/verify";
              const { data } = await axios.post(verifyUrl, response);
              console.log(data.message);
            } catch (error) {
              console.log(error);
            }
          },
          theme: {
            color: "#3399cc",
          },
        };
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
      }

      const handleCheck=async()=>{
        setCount2(count2+1)
        const {data} = await axios.post('https://e-commerce-backend-ueee.onrender.com/payment',{amount:sum+50})
        console.log(data)
    
      if(initPayment(data.data)==='Payment verified successfully'){
        setCheck(true)
      }
      const token = sessionStorage.getItem('Token')
      await axios.put('https://e-commerce-backend-ueee.onrender.com/checkout',{token:token})
      // .then((res)=>console.log(res))
      await axios.post('https://e-commerce-backend-ueee.onrender.com/getorder',{token:token})
      .then((res)=>setOrder(res.data.orders))
      }


    const handleClick = async (data)=>{
      setCount(count+1)
      const token  = sessionStorage.getItem('Token')
      setPost(post+1)
      await axios.put('https://e-commerce-backend-ueee.onrender.com/order',{data:data,token:token})
      // .then((res)=>console.log(res))
      .catch((err)=>console.log(err))
      await axios.post('https://e-commerce-backend-ueee.onrender.com/getorder',{token:token})
      .then((res)=>setOrder(res.data.orders))
      // console.log(order)
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
        {
          check && 
          <div className='thank'>
            <h1>Thank you</h1>
            <h1>Your Order is on the way</h1>
            <button className='add-cart-btn' onClick={()=>setCheck(false)}>Close</button>
          </div>
        }
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
            {
              (order && order.length===0)?<></>:<button className='add-cart-btn' onClick={handleCheck}>CheckOut</button>
            }
          </div>
        </div>
    </div>
  )
}

export default CartItems