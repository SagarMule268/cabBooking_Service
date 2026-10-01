import React from 'react'
// import axios from 'axios';
const BookRide = ({cab ,setCab , user}) => {
    const handleChange = (e) => {
       setCab({ ...cab, [e.target.name]: e.target.value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(cab);
        console.log(user)

    }
  return (
    <div className='container mt-5'>
      <div className="row">
        <div className="col-4 d-flex justify-content-center align-items-center bg-primary text-white">
            <h1>Book A Ride user  { user?.name || "Guest"}</h1>
        </div>
        <div className="col-8 justify-content-center ">
            <form>
                <div className="form-group">
                   <input type="hidden" name="client_name"  />
                    <label htmlFor="pickup">Pickup Location</label>
                    {/* <input type="text" className="form-control" id="pickup" placeholder="Enter Pickup Location" /> */}
                    <select className="form-control" id="pickup" name='pickup_location' value={cab.pickup_location} onChange={handleChange}>
                        <option>Select Pickup Location</option>
                        <option>Nagpur</option>
                        <option>kamthi</option>

                        <option>Wardha</option>
                        <option>Amravati</option>
                        <option>Nandanvan</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="drop">Drop Location</label>
                    <select className="form-control" id="drop" name='drop_location' value={cab.drop_location}  onChange={handleChange}>
                        <option>Select Drop Location</option>
                        <option>Nagpur</option>
                        <option>kamthi</option>

                        <option>Wardha</option>
                        <option>Amravati</option>
                        <option>Nandanvan</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="cab_type">Cab Type</label>
                    <select className="form-control" id="cab_type" name='cab_type' value={cab.cab_type} onChange={handleChange}>
                        <option>select cab type</option>
                        <option>Mini</option>
                        <option>Sedan</option>
                        <option>SUV</option>
                        <option>Luxury</option>
                    </select>
                </div>
                
                <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input type="date" className="form-control" id="date" onChange={handleChange} name='pickupDate' />
                </div>
                <div className="form-group">
                    <label htmlFor="time">Time</label>
                    <input type="time" className="form-control" id="time" onChange={handleChange} name='pickupTime' />
                </div>
                <button type="submit" onClick={handleSubmit} className="btn btn-primary mt-2">Book Ride</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default BookRide
