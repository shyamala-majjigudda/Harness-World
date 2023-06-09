import React,  { useState, useEffect } from "react"
import "./Pages.css"
// import mit from "./images/arrivals/mit.jpg"
import WireHarnessData from "./WireHarnessData"
import Home from "../components/MainPage/Home"
import FlashDeals from "../components/flashDeals/FlashDeals"
import TopCate from "../components/top/TopCate"
import NewArrivals from "../components/newarrivals/NewArrivals"
import Discount from "../components/discount/Discount"
import Shop from "../components/shops/Shop"
import Annocument from "../components/annocument/Annocument"
import Wrapper from "../components/wrapper/Wrapper"

const Transformers = () => {


  // const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  

  return (
    <>
     <section className='wire-harness background container'>
        <div className='container d_flex'>
          <h1>Transformers</h1>
        </div>
              {/* <div className='content grid'>
                {WireHarnessData.map((value, index) => {
                    return (
                      <>
                        <div className='box product' key={index}>
                          <div className='nametop d_flex'>
                          </div>
                          <div className='img'>
                            <img src={value.cover} alt='' />
                          </div>
                        </div>
                      </>
                    )
                })}
              </div> */}
            <div className='container content product'>
              <div className={isMobile ? "mobileGrid" : "grid"}>
                {WireHarnessData.map((val, index) => {
                  return (
                    <div className='box product' key={index}>
                      <div className='img'>
                        <img src={val.cover} alt='' />
                      </div>
                      {/* <h5>{val.name}</h5> */}
                      {/* <span>${val.price}</span> */}
                    </div>
                  )
                })}
              </div>             
            </div>
  
      </section>
    </>
  )
}

export default Transformers
