import React from 'react'
import { useState } from 'react';
import './register.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate()
  const [msg,setMsg] = useState('')
  const [name,setName]= useState('')
  const [email,setEmail]= useState('')
  const [password,setPass]= useState('')
  



  const handlesubmit = async (e) =>{
    e.preventDefault();
    
    const result = await axios.post('https://e-commerce-backend-ueee.onrender.com/register',{name,email,password})
    .then((res)=>res.data)
    .catch((err)=>console.log(err))
    // console.log(result)
    if(result === 'username Already Exists'){
        setMsg('UserName Already Exists')
      }
    else if(result === 'User Created'){
          navigate('/login')
      }
  }
  return (
    <div className='home_container'>
                  <div>{msg}</div>
        <div className='register'>
        <form className='register-form' onSubmit={handlesubmit} action="post">
            <h1>Register</h1>
            <div>
            <label className='name-label' htmlFor="name"><FontAwesomeIcon icon={faUser} size='2xl' /></label>
            <input required type="text" onChange={(e)=>setName(e.target.value)} placeholder='Your Name' id='name'/>
            </div>
           <div>
            <label className='email-label' htmlFor="email"><FontAwesomeIcon icon={faEnvelope} size='2xl' /></label>
            <input required type="email"  onChange={(e)=>setEmail(e.target.value)} placeholder='Your Email' id='email' />
           </div>
            <div>
              <label className='pass-label' htmlFor="password"><FontAwesomeIcon icon={faLock} size='2xl' /></label>
              <input required type="password"  onChange={(e)=>setPass(e.target.value)} placeholder='Password' id='password'/>
            </div>
            <button className='register-btn' type='submit'>REGISTER</button>
            <div>if already registered click <Link style={{color:'red'}} to='/login' >Here</Link> </div>
        </form>
        <img className='register-img' src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=2000" alt="" />
        </div>

    </div>
  )
}

export default Register;