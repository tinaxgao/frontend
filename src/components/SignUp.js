import React, { useState } from 'react';
import axios from 'axios';
import './SignUp.css';
import { Link, useNavigate } from 'react-router-dom';

const submitCredentials = {
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: ""
}


function SignUp () {

    const [credentials, setCredentials] = useState(submitCredentials);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('https://lambdapotluck.herokuapp.com/api/auth/register', credentials)
            .then( response => {
                navigate('/login');
            })
            .catch( error => {
                console.log('Sign-up: ', error);
            })
    }
    
    return (
        <section className="registration-form">
            <form className="signUpForm" onSubmit={handleSubmit}>
                <h2 className="title">Sign up for your account</h2>
                    <div className="inputContainer">   
                        <label htmlFor="firstName" className="label">First Name</label>
                        <input 
                            type="text" 
                            className="input" 
                            id="firstName" 
                            name="first_name" 
                            value={credentials.first_name} 
                            onChange={handleChange}
                            placeholder="a"
                        />
                    </div>
                    <div className="inputContainer">
                        <div className='last-name namefield'>       
                            <label htmlFor="lastName" className="label">Last Name</label>
                        </div>
                        <input 
                            type="text" 
                            className="input" 
                            id="lastName" 
                            name="last_name" 
                            value={credentials.last_name} 
                            onChange={handleChange}
                            placeholder="a"
                        />
                    </div>
                    <div className="inputContainer">
                        <label htmlFor="email" className="label">Email</label>
                        <input 
                            type="email" 
                            className="input" 
                            id="email" 
                            name="email"   
                            value={credentials.email} 
                            onChange={handleChange}
                            placeholder="a"
                        />
                    </div>
                    <div className="inputContainer">
                    <label htmlFor="username" className="label">Username</label>
                        <input 
                            type="text" 
                            className="input" 
                            id="username" 
                            name="username"   
                            value={credentials.username} 
                            onChange={handleChange}
                            placeholder="a" 
                        />
                    </div>
                    <div className="inputContainer">
                    <label htmlFor="password" className="label">Password</label>
                        <input 
                            type="password" 
                            className="input" 
                            id="password" 
                            name="password"   
                            value={credentials.password} 
                            onChange={handleChange}
                            placeholder="a"
                        />
                    </div>
                <button type="submit" className="submitBtn" value="Sign up">Sign Up</button>
                <p>Already have an account?</p>
                <Link to='/login'>Login</Link>
            </form>
        </section>   
    )
}

export default SignUp;