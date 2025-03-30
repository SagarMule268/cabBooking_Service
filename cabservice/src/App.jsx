
import './App.css'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import { useState } from 'react';
import axios from 'axios';
import UserDashboard from './components/UserDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import BookRide from './components/BookRide';
import ViewFare from './components/ViewFare';
function App() {
  function calculateFare(distance, time, cabType) {
    const baseFares = {
        mini: 40,   // Base fare for Mini
        sedan: 60,  // Base fare for Sedan
        suv: 80,    // Base fare for SUV
        luxury: 150 // Base fare for Luxury
    };

    const perKmRates = {
        mini: 8,
        sedan: 12,
        suv: 15,
        luxury: 25
    };

    const perMinRates = {
        mini: 1,
        sedan: 2,
        suv: 3,
        luxury: 5
    };

    if (!baseFares[cabType]) {
        return "Invalid cab type!";
    }

    let totalFare = baseFares[cabType] + (distance * perKmRates[cabType]) + (time * perMinRates[cabType]);
    return totalFare;
}
  const [ride ,setRide]=useState(null);
  const [fare ,setFare]=useState(null);
  const [cab ,setCab]=useState({
    pickup_time:'',
    pickup_date:'',
    pickup_location:'',
    drop_location:'',
    cabType:'',
    client_name:''
  });
  const distances ={
    "Nagpur": 10,
    "Wardha": 20,
    "Amravti": 30,
    "Nandanvan": 40,
   
  };
  const [formdata, setFormdata] = useState({
    email: '',
    password: '',
    name: '',
    mobile: '',
    age:'',
  });
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [user ,setUser]=useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState( localStorage.getItem('isAuthenticated') === 'true');
  
  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
  }
  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  }

  const handleSubmit =async (e) => {
    const register = document.getElementById('register');
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/user/', formdata);
      console.log(res.data);
      alert('User Registered Successfully!');
      register.reset();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div style={{width:"100%"}}>
      
      <Router>
      <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout} /> {/* Navbar stays visible across all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login loginData={loginData} setLoginData={setLoginData} user={user} setUser={setUser}  setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/register" element={<Register handleChange={handleChange} handleSubmit={handleSubmit} />} />
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated}/>} >
          <Route path="/dashboard"  element={<UserDashboard user={user} ride={ride} setRide={setRide} />} />
          <Route path="/book-ride" element={<BookRide user={user} cab={cab} setCab={setCab} calculateFare={calculateFare} distances={distances}/>} />
          <Route path="/view-fare" element={<ViewFare fare={fare} calculateFare={calculateFare} setFare={setFare}/>} />
          <Route path="/contact-us" element={<h1>Contact Us</h1>} />
        </Route>
      </Routes>
    </Router>
     
      
      
    </div>
  )
}

export default App
