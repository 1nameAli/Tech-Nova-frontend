import React from 'react'
import {Link} from "react-router-dom"
const Hero = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center text-center">
        
          <h1 className="display-4 fw-bold">Technology</h1>
          <p className="lead text-muted">
           Sleek,modern and intuitive trading platforms
          </p>
          <Link to="#" className="text-primary fw-semibold text-decoration-none">
              Checkout our investments <i className="fa-solid fa-arrow-right ms-1"></i>
            </Link>
        </div>
      </div>
    
  )
}

export default Hero
