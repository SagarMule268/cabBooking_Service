import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar({isAuthenticated ,handleLogout}) {
  return (
    <nav className="navbar navbar-expand-lg bg-dark-warning">
    <div className="container-fluid">
    
      <Link className="navbar-brand fw-bold" to="/">Cab Booking</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item fw-bold">
            <Link className="nav-link active"  aria-current="page" to={isAuthenticated ? "/dashboard":"/"}>Home</Link>
          </li>
          {isAuthenticated ? (
            <>
             <li className="nav-item fw-bold">
                  <Link className="nav-link" to="/book-ride">Schedule Cab</Link>
                </li>
                <li className="nav-item fw-bold">
                  <Link className="nav-link" to="/view-fare">View Fare</Link>
                </li>
                <li className="nav-item fw-bold">
                  <Link className="nav-link" to="/contact-Us">Contact Us</Link>
                </li>
            <li className="nav-item fw-bold">
                <button className='btn fw-bold' onClick={handleLogout}>Logout</button>
              </li>
            </>
              
            ) : (
              <>
                <li className="nav-item fw-bold">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item fw-bold">
                  <Link className="nav-link" to="/register">Register</Link>
                </li>
              </>
            )}
         
        </ul>
      </div>
    </div>
  </nav>
  )
}
