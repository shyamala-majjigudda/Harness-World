import React from "react"
import "./style.css"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
              <h2>Contact Us</h2>
              <ul>
                <li>1st main road, opposite to seegehalli govt school, Bangalore </li>
                <li>Email: worldofharness@gmail.com</li>
                <li>Phone: +91 7022731287</li>
              </ul>
            </div>
          {/* <div className='box'>
            <h1>Harness World</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <i class='fa-brands fa-google-play'></i>
                <span>Google Play</span>
              </div>
              <div className='img d_flex'>
                <i class='fa-brands fa-app-store-ios'></i>
                <span>App Store</span>
              </div>
            </div>
          </div> */}

          <div className='box'>
            <h2>Quick Links</h2>
            <ul>
            <li>
                <Link to='/'>home</Link>
              </li>
              <li>
                <Link to='/about'>about</Link>
              </li>
              <li>
                <Link to='/products'>products</Link>
              </li>
              {/* <li>Terms & Conditions</li> */}
            </ul>
          </div>
          {/* <div className='box'>
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </div> */}

        </div>
        {/* <hr></hr> */}
        <div class="copyright"> Copyright © 2023 Harness World Electronics Devices Pvt Ltd | All rights reserved</div>
      </footer>
    </>
  )
}

export default Footer
