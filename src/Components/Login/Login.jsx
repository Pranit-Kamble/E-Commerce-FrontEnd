import React, { useEffect } from 'react'
import { useState } from 'react';
import './register.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [msg,setMesg]= useState('')
  const navigate = useNavigate()
  const [name,setName]= useState('')
  const [password,setPass]= useState('')



  const handlesubmit = async (e) =>{
    e.preventDefault();
    const result = await axios.post('https://e-commerce-backend-ueee.onrender.com/login',{name,password})
    .then((res)=>res.data)
    .catch((err)=>console.log(err))
    // console.log(result.msg)
    if(result.msg === 'User Does Not Exists'){
      setMesg('UserName Does not Exists')
    }
    else if(result.msg === 'Wrong Password'){
      setMesg('Incorrect Password')
    }
    if(result.msg === 'Login Sucessfull'){
      sessionStorage.setItem('Token',result.Token)
      navigate('/')
    }
  }
  
  return (
    <div className='home_container'>
      <div>{msg}</div>
        <div className='register'>
        <form className='register-form' onSubmit={handlesubmit} action="post">
            <h1>Login</h1>
            <div>
            <label className='name-label' htmlFor="name"><FontAwesomeIcon icon={faUser} size='2xl' /></label>
            <input required type="text" onChange={(e)=>setName(e.target.value)} placeholder='Your Name' id='name'/>
            </div>

            <div>
              <label className='pass-label' htmlFor="password"><FontAwesomeIcon icon={faLock} size='2xl' /></label>
              <input required type="password"  onChange={(e)=>setPass(e.target.value)} placeholder='Password' id='password'/>
            </div>
            <button  className='register-btn' type='submit'>LOGIN</button>
        </form>
        <img className='register-img' src="https://www.allen.ac.in/ace2324/assets/images/register.png" alt="" />
        </div>
    </div>
  )
}

export default Login;