import React from "react";


export default function CabBookingServices({services}) {
  return (
    <div className="row">
            {services.map((service, index) => (
          <div key={index} className="col-md-6 col-lg-4 mb-4 service ">
            <div className="card text-center p-4 shadow-lg">
              <h4 className="fw-bold">{service.title}</h4>
              <p className="text-muted">{service.description}</p>
            </div>
          </div>
        ))}
    </div>
  )
}
