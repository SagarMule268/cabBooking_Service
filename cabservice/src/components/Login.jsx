import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/login.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = ({ setIsAuthenticated , setLoginData ,loginData ,setUser}) => {
  const navigate =useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/user/login', loginData);
      setUser(res.data.data);
      console.log( "Data from the backend : ",res.data.data);
      
      setIsAuthenticated(true);
      localStorage.setItem('isAuthenticated', true);
      alert('User Logged In Successfully!');
      navigate('/dashboard');
     
    } catch (error) {
      console.log(error);
      alert('Login Failed!');
    }
  }
  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  }

  return (
    <div className='login'>
            <h1>Login </h1>
        <div className='form-container'>
              <form>
                  <div className='input-group'>
                    <input type='text' id="username" name='email' placeholder=''onChange={handleLoginChange} required />
                    <label htmlFor='username'>Username</label>
                  </div>
                  <div className='input-group'>
                    <input type='password' id="password" name='password' placeholder=''onChange={handleLoginChange} required />
                    <label htmlFor='password'>password</label>
                  </div>
                  <div className='input-group text-center'>
                    <button className='' onClick={handleLoginSubmit} >Login</button>
                  </div>
                  <div className='uitility-links'>
                    
                    <p className='text-center'><span className='text-center'><Link>Forget Password?</Link></span> </p>
                    <p>Don't have account ? <span><Link to='/register' >Register</Link></span></p> 
                  </div>
              </form>
        </div>
    </div>
  )
}

export default Login;
