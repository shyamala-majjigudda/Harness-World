import React from "react"
import "./Pages.css"
// import mit from "./images/arrivals/mit.jpg"
import Home from "../components/MainPage/Home"
import FlashDeals from "../components/flashDeals/FlashDeals"
import TopCate from "../components/top/TopCate"
import NewArrivals from "../components/newarrivals/NewArrivals"
import Discount from "../components/discount/Discount"
import Shop from "../components/shops/Shop"
import Annocument from "../components/annocument/Annocument"
import Wrapper from "../components/wrapper/Wrapper"

const MedicalTransformer = () => {
  return (
    <>
     <section className='mit background container'>
        <div className='container d_flex'>
          <h1>MEDICAL ISOLATION TRANSFORMER</h1>
        </div>

          <div className='container gird mit-image'>
            <div className='box' key='mit'>
              <div className='img'>
                <img src='./images/products/mit.jpg' alt='' />
              </div>
              {/* <h5>{val.name}</h5> */}
              {/* <span>${val.price}</span> */}
            </div>
          </div>
  
      </section>
    </>
  )
}

export default MedicalTransformer
