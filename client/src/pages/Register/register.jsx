import React, { useState } from 'react';
import './UserRegistration.css'; // Import CSS file for styling
import axios from 'axios';
import {message} from 'antd'
import { useNavigate } from 'react-router-dom';
function UserRegistration() {
    const navigate=useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [city,setCity]=useState('');
    const [address,setaddress]=useState('');
     const data={
        username,password,email,city,address  
} 
    const handleRegister = async () => { 
       try {
          const res=     await axios.post('/api/users/register',{data});
           
          if(res.data.success){
            message.success(res.data.message);
          }else{
            message.success(res.data.message);
          }
          
        setCity('');
        setEmail('');
        setUsername('');
        setaddress('');
        setPassword('');
        navigate('/');
       } catch (error) {    
        
       }
    };

    return (
        <div className="registration-container">
            <h2>User Registration</h2>
            <div className="form-group">
                <label>Username:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
                <label>city:</label>
                <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
            </div>
            <div className="form-group">
                <label>address:</label>
                <input type="text" value={address} onChange={(e) => setaddress(e.target.value)} />
            </div>
  
            <button onClick={handleRegister}>Register</button>
        </div>
    );
}

export default UserRegistration;
