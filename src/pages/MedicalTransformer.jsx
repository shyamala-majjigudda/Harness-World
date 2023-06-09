import React from "react"
import "./Pages.css"

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
