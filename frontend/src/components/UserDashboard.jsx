import React from 'react'

const UserDashboard = ({user}) => {
  return (
    <div className='fluid-container'>
      <div className="container">
        <h1 className='text-center'>User Dashboard</h1>
        <div className="row">
            {
                user? <h2>Welcome {user.name.split(' ')[0]}</h2> : <h2>Welcome User</h2>
            }
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Book Ride</h5>
                <p className="card-text">Book a cab for your next ride.</p>
                <a href="/book-ride" className="btn btn-primary">Book Now</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">View Fare</h5>
                <p className="card-text">View fare for your next ride.</p>
                <a href="/view-fare" className="btn btn-primary">View Fare</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Contact Us</h5>
                <p className="card-text">Contact us for any query.</p>
                <a href="/contact-us" className="btn btn-primary">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDashboard;
