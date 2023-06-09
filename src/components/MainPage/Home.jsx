import React from "react"
// import Categories from "./Categories"
import "./Home.css"
import SliderHome from "./Slider"
// import NewArrivals from "../newarrivals/NewArrivals"
import TopCate from "../top/TopCate"

const Home = () => {
  return (
    <>
      <section className='home'>
        <div className='container d_flex'>
          {/* <Categories /> */}
          <SliderHome />
        </div>
        {/* <div className='container d_flex products'>
          <h1>PRODUCTS</h1>
        </div>
        <div className='container d_flex products'>
          <h3>Quality is never an accident. It is always the result of intelligent effort.</h3>
          <h3>Quality is everyone’s responsibility</h3>
          <h3>Quality is pride of workmanship</h3>
        </div> */}
        {/* <NewArrivals /> */}
        {/* <div className='container d_flex products'>
          <h1>INDUSTRIES WE SERVE</h1>
        </div> */}
        <TopCate />
      </section>

      
    </>
  )
}

export default Home
