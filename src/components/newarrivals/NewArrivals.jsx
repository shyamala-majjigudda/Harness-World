import React from "react"
import Cart from "./Cart"
import "./style.css"

const NewArrivals = () => {
  return (
    <>
      <section className='NewArrivals background'>
        <div className='container d_flex products'>
          <h1>PRODUCTS</h1>
        </div>
        <div className='container d_flex products'>
          {/* <h3>Quality is never an accident. It is always the result of intelligent effort.</h3> */}
          <h3>Quality is everyone’s responsibility</h3>
          {/* <h3>Quality is pride of workmanship</h3> */}
        </div>
        <div className='container'>
          <div className='heading d_flex'>
            {/* <div className='heading-left row  f_flex'>
              <img src='https://img.icons8.com/glyph-neue/64/26e07f/new.png' />
              <h2>New Arrivals </h2>
            </div> */}
            {/* <div className='heading-right row '>
              <span>View all</span>
              <i className='fa-solid fa-caret-right'></i>
            </div> */}
            
          </div>

          <Cart />
        </div>
      </section>
    </>
  )
}

export default NewArrivals
