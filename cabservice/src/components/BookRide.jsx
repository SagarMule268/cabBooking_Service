import React from 'react'

const BookRide = ({cab ,setCab}) => {
    const handleChange = (e) => {
       setCab({ ...cab, [e.target.name]: e.target.value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(cab);
    }
  return (
    <div className='container mt-5'>
      <div className="row">
        <div className="col-4 d-flex justify-content-center align-items-center bg-primary text-white">
            <h1>Book A Ride</h1>
        </div>
        <div className="col-8 justify-content-center ">
            <form>
                <div className="form-group">
                    <label htmlFor="pickup">Pickup Location</label>
                    {/* <input type="text" className="form-control" id="pickup" placeholder="Enter Pickup Location" /> */}
                    <select className="form-control" id="pickup" name='pickupLocation' onChange={handleChange}>
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
                    <select className="form-control" id="drop" name='dropLocation' onChange={handleChange}>
                        <option>Select Drop Location</option>
                        <option>Nagpur</option>
                        <option>kamthi</option>

                        <option>Wardha</option>
                        <option>Amravati</option>
                        <option>Nandanvan</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="drop">Cab Type</label>
                    <select className="form-control" id="drop" name='cabType' onChange={handleChange}>
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
