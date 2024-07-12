
import { useState,useEffect } from 'react'
import Header from './compoments/1-header/Header'
import Hero from './compoments/2-hero/Hero'
import Main from './compoments/3-main/Main'
import Contact from './compoments/4-contact/Contact'
import Footer from './compoments/5-footer/Footer' 
import './App.css'

function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setshowScrollBTN(true);
      } else {
        setshowScrollBTN(false);
      }
    });
  }, []);

  

  const [showScrollBTN, setshowScrollBTN] = useState(false);
  
  return (
    <div id="up" className="containor">
      <Header/>
      
      <Hero />
      <div className='divider'/>
      <Main />
      <div className='divider'/>
      <Contact/>
      <div className='divider'/>
      <Footer/>
      <a href="#up">
        <button style={{ opacity: showScrollBTN? 1 : 0, transition: "1s" }} className="icon-arrow-up scroll2Top"></button>
      </a>
    </div>
    
  )
}

export default App
