import React, { useState, useEffect } from "react"
// import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Tdata from "./Tdata"

const TopCart = () => {

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

  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  // }
  return (
    <>
      {/* <Slider {...settings}>
        {Tdata.map((value, index) => {
          return (
            <>
              <div className='box product' key={index}>
                <div className='nametop d_flex'>
                  <span className='tleft'>{value.para}</span>
                  <span className='tright'>{value.desc}</span>
                </div>
                <div className='img'>
                  <img src={value.cover} alt='' />
                </div>
              </div>
            </>
          )
        })}
      </Slider> */}

      <section className='industry background'>
        
      <div className='container d_flex products'>
          <h1>INDUSTRIES WE SERVE</h1>
        </div>
      <div className='container d_flex'>
        <div className='heading d_flex content'>
        <div className={isMobile ? "mobileGrid" : "grid3"}>
          {Tdata.map((value, index) => {
            return (
              <>
                <div className='box product' key={index}>
                  <div className='nametop d_flex'>
                    <span className='tleft'>{value.para}</span>
                    {/* <span className='tright'>{value.desc}</span> */}
                  </div>
                  <div className='img'>
                    <img src={value.cover} alt='' />
                  </div>
                </div>
              </>
            )
          })}
          </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TopCart
