import React, { useState } from 'react';
import axios from 'axios';
import './SignUp.css';
import { Link, useNavigate } from 'react-router-dom';

const submitCredentials = {
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: ""
}


function SignUp () {

    const [credentials, setCredentials] = useState(submitCredentials);
    const [submitFailed, setSubmitFailed] = useState(false);
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
                        <label for="firstName" className="label">First Name</label>
                        <input 
                            type="text" 
                            className="input" 
                            id="firstName" 
                            name="firstName" 
                            value={credentials.firstName} 
                            onChange={handleChange}
                            placeholder="a"
                        />
                    </div>
                    <div className="inputContainer">
                        <div className='last-name namefield'>       
                            <label for="lastName" className="label">Last Name</label>
                        </div>
                        <input 
                            type="text" 
                            className="input" 
                            id="lastName" 
                            name="lastName" 
                            value={credentials.lastName} 
                            onChange={handleChange}
                            placeholder="a"
                        />
                    </div>
                    <div className="inputContainer">
                        <label for="email" className="label">Email</label>
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
                    <label for="username" className="label">Username</label>
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
                    <label for="password" className="label">Password</label>
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
                <button type="submit" class="submitBtn" value="Sign up">Sign Up</button>
                <p>Already have an account?</p>
                <Link to='/login'>Login</Link>
            </form>
        </section>   
    )
}

export default SignUp;
