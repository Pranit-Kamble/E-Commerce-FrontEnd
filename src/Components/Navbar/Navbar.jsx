import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import profilelogo from '../Images/profile_icon.svg'
import cartlogo from '../Images/bag_icon.svg'
import { useContext } from 'react'
import { store } from '../API/ApiFile'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import axios, { AxiosHeaders } from 'axios'

const Navbar = () => {
    const ul=useRef()
    const [count,setCount] = useState(0)
    const [nav,setNav]=useState(false)
    const [items,setitems]=useState(0)
    const [name,setName] = useState('Login')
    // const context=useContext(store)

    const token = sessionStorage.getItem('Token')
    useEffect(()=>{
           setInterval(()=>{
            axios.post(`https://e-commerce-backend-ueee.onrender.com/auth`,{token:token})
            .then((res)=>setName(res.data.name))
           },100)
    },[token])

    useEffect(()=>{
        // const token = sessionStorage.getItem('Token')
        setInterval(()=>{
        axios.post(`https://e-commerce-backend-ueee.onrender.com/getorder`,{token:token})
        .then((res)=>setitems(res.data.orders.length))
        },100)
    },[items])

    // useEffect(()=>{
    //    setInterval(()=>{
    //     setitems(context.count.length)
    //    },1)
    // },[context.count.length])
    
    const navclick=()=>{ 
        setNav(!nav)
        if(nav===true){
            ul.current.classList="Hideul"
            for(let i=0;i<=5;i++){
                document.getElementsByTagName('li')[i].classList='Hideli'
            }
            // document.getElementsByClassName('navbtn')[0].style.left='unset'
            // document.getElementsByClassName('navbtn')[0].style.right='0px'
            // document.getElementsByClassName('navbtn')[0].style.transform='translateY(0px)'
            document.getElementsByClassName('navbtn')[0].style.width='40px'
            document.getElementsByClassName('navbtn')[0].style.height='40px'
        }
        else{
            for(let i=0;i<=5;i++){
                document.getElementsByTagName('li')[i].classList='Showli'
            }
            ul.current.classList="Showul"
            // document.getElementsByClassName('navbtn')[0].style.left='0px'
            // document.getElementsByClassName('navbtn')[0].style.transform='translateY(40px)'
            document.getElementsByClassName('navbtn')[0].style.width='100%'
            document.getElementsByClassName('navbtn')[0].style.height='70px'
        }
        
    }
  return (
    <div className='navbar'>
        <div className='topbar'>
            <div className="topbar1">
                <select style={{border:'none'}} name="" id="">
                    <option value="">EN</option>
                </select>
                <select style={{border:'none',marginLeft:'10px'}} name="" id="">
                    <option value="">$</option>
                </select>
            </div>
            <div className="topbar1 topbar2">
                <Link to='/register'><div> <img src={profilelogo} alt="" />{name}</div></Link>
                <Link to='/cart'><div> <img src={cartlogo} alt="" /> {items} items</div></Link>
                
            </div>
        </div>
        {/* <hr /> */}
        <div className='ishop'></div>
        <ul onClick={navclick} className='Hideul' ref={ul} type='none'>
            <Link to='/'><li>HOME</li></Link>
            <Link to='/store'><li>STORE</li></Link>
            <Link to='/iphone'><li>IPHONE</li></Link>
            <Link to='/ipad'><li>IPAD</li></Link>
            <Link to='/macbook'><li>MACBOOK</li></Link>
            <Link to='/accesories'><li>ACCESORIES</li></Link>
        </ul>
        {/* <hr /> */}
        <button className='navbtn' onClick={navclick}>=</button>
    </div>
  )
}

export default Navbar