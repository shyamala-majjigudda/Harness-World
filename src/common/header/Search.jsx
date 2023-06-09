import React,  { useState, useEffect } from "react"
import logo from "../../components/assets/images/HW1.png"
import { Link } from "react-router-dom"
import Navbar from "./Navbar"
import Navbarmenu from "./Navbarmenu"

const Search = () => {

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
  
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })

  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className={isMobile ? "mobileLogo width" : "logo width"}>
            <img src={logo} alt='' />
          </div>
          <div className='search-box f_flex'>
            <Navbar />
            {/* <Navbarmenu /> */}
          </div>
        </div>


      </section>
    </>
  )
}

export default Search
