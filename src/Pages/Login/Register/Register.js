import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const navigate = useNavigate('');

    const navigateLogin = () =>{
        navigate('/login')
    }
    const handleRegister = event =>{
        event.preventDefault();
        // console.log(event.target.email.value);
        const name  = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
    }
    return (
        <div className='register-from'>
            <h2 className='text-center'>Please Register</h2>
            <form onSubmit={handleRegister}>
            <input type="text" id="fname" placeholder='Enter Your Name' name="fname"/>
            
            <input type="email" id="email" placeholder='enter Your Email' required name="email"/>
            
            <input type="password" id="pwd" placeholder='enter Your Password' required name="pwd"></input>
    
            <input type="submit" value="Register"></input>
            </form>
            <p>Already have An Account? <Link to='/login' className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
        </div>
    );
};

export default Register;