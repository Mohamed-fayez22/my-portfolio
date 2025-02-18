import Hero from './components/2-hero/Hero'
import Header from './components/1-header/Header'
import { useState } from 'react'
import Contact from './components/4-contact/Contact'
import Main from './components/3-main/Main'
import Footer from './components/5-footer/Footer'

function App() {
 

  return (
   <div className='container'>
     <Header/>
     <div className='devider'/>
     <Hero/>   
     <div className='devider'/> 
     <Main/> 
     <div className='devider'/>
     <Contact/>
     <div className='devider'/>
     <Footer/>
     </div>
  )
}

export default App
