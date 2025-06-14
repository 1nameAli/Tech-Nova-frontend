import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center text-center">
        <div className="col-lg-8">
          <h1 className="display-4 fw-bold">404 Page Not Found</h1>
          <p className="lead text-muted">
           Sorry the page you are looking for doesnot exists!
          </p>
          <Link to="/" className="btn btn-primary btn-lg mt-3">
            Go back Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
