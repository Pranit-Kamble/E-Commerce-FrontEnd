import React, { createContext, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import RoutesFile from './Components/RoutesFile/RoutesFile'
import './App.css'
import Footer from './Components/Footer/Footer'
import Section from './Components/Section/Section'
import Section2 from './Components/Section2/Section2'
import Register from './Components/Login/Register'
import Login from './Components/Login/Login'
import Allitems_section from './Components/AllItems/Allitems_section'
import AppleSection from './Components/AppleSection/AppleSection'
import StoreSection from './Components/StoreSection/StoreSection'
<style>
@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Montserrat&family=Poppins&display=swap');
</style>

export const context = createContext()
const App = () => {
  const [count,setCount] = useState(0)
  return (
    <context.Provider value={{count:count,setCount:setCount}}>
      <div className='body'>
      <Navbar/>
      <RoutesFile/>
      <Section/>
      <Section2/>
      <Footer/>
    </div>
    </context.Provider>
  )
}

export default App