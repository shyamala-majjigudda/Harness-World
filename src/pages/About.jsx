import React from "react"
import "./Pages.css"

const About = () => {
  return (
    <>
     <section className='about background container'>
        <div className='container d_flex'>
          <h1>About Us</h1>
        </div>
        <div className='container d_flex'>
          <p>Harness World provides end to end solution of enclosure design and fabrication services.</p>
          {/* <h1>VISION</h1> */}
        </div>
        <div className='container'>

          <h4>INDUSTRIES WE SERVE</h4>
          <ul>
            <li>Electronics</li>
            <li>Aerospace</li>
            <li>Medical</li>
            <li>Audio</li>
            <li>Textile</li>
            <li>Vending Machines</li>
          </ul>
        </div>

          <div className='container d_flex vision'>
            {/* <p>Harness World provides end to end solution of enclosure design and fabrication services.</p> */}
            <h2>VISION</h2>
          </div>
          <div className='container d_flex'>
          <p>Our vision is to become a leading and efficiency in various industries. We aim to establish ourselves as a trusted partner for our customers, delivering customized and reliable harnesses that meet their specific needs. Through our commitment to exceptional craftsmanship, cutting-edge technology, and outstanding customer service, we strive to exceed expectations and contribute to the success of our clients.</p>
          </div>

          {/* <div className='container d_flex mision '>
            <p>Harness World provides end to end solution of enclosure design and fabrication services.</p>
            <h2>MISSION</h2>
        </div> */}

          <div className='container d_flex mision'>
            {/* <p>Harness World provides end to end solution of enclosure design and fabrication services.</p> */}
            <h2>MISSION</h2>
          </div>
          <div className='container d_flex'>
          <p>Our mission is to provide high-quality electrical harness solutions that empower our customers' success. We are committed to delivering exceptional value through customized designs, superior craftsmanship, and reliable products. With a focus on innovation, collaboration, and customer satisfaction, we aim to be the preferred partner for all their electrical harness needs.</p>
          </div>

  
      </section>
    </>
  )
}

export default About
