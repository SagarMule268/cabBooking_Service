import React from 'react'

const Register = ({handleChange , handleSubmit}) => {
  return (
    <div className='login' style={{height:"550px"}}>
            <h1>Register </h1>
        <div className='form-container'>
               
              <form id='register'>
                  <div className='input-group'>
                    <input type='text' id="name" name='name' placeholder='' required onChange={handleChange} />
                    <label htmlFor='name'>Name</label>
                  </div>
                  <div className='input-group'>
                    <input type='email' id="email" name='email' placeholder='' required onChange={handleChange} />
                    <label htmlFor='email'>Email</label>
                  </div>
                  <div className='input-group'>
                    <input type='text' id="mobile" name='mobile' placeholder='' required onChange={handleChange} />
                    <label htmlFor='mobile'>Mobile No</label>
                  </div>
                  <div className='input-group'>
                    <input type='number' id="age" name='age' placeholder='' required onChange={handleChange} />
                    <label htmlFor='age'>Age</label>
                  </div>
                  <div className='input-group'>
                    <input type='text' id="password" name='password' placeholder='' required onChange={handleChange} />
                    <label htmlFor='password'>Password</label>
                  </div>
                  
                  <div className='input-group text-center'>
                    <button onClick={handleSubmit}>Submit</button>
                  </div>
                 
              </form>
        </div>
    </div>
    )
}

export default Register;
