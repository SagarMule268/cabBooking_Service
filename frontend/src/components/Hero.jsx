import React from 'react'

export default function Hero({header}) {
  return (
    <div className="hero opacity-75" style={{
        background:`url(${header})`,
        width: "100%",
    height: "100vh",
    backgroundPosition: "center",
   backgroundRepeat:" no-repeat",
    backgroundSize:" contain",
    textAlign:'center',
    color:"orange",
    borderRadius
    : "20px"
    }}>
        <h1>Welcome to the cab booking service</h1>
    </div>
  )
}
