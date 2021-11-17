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
                console.log('Sign-up: ', response); // <<<<< REMOVE CONSOLE LOG LATER
                navigate('/login');
            })
            .catch( error => {
                console.log('Sign-up: ', error);
                // setSubmitFailed(true);
            })
    }
    
    return (
        <section className="registration-form">
            <div className="title">
                <h2>Sign up for your account</h2>
                <br/>
                <h3>to plan or attend a potluck!</h3>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="name">
                    <div className='first-name namefield'>
                <div>       
                <label htmlFor="firstName">First Name</label>
                </div>
                <input type="text" id="firstName" 
                            name="first_name" 
                            value={credentials.first_name} 
                            onChange={handleChange} />
                </div>
                <br/>
                <div>
                <div className='lastName namefield'>       
                <label htmlFor="lastName">Last Name</label>
                </div>
                <input type="text" id="lastName" 
                            name="last_name" 
                            value={credentials.last_name} 
                            onChange={handleChange}/>
                </div>
                </div>
                <div className="three-inputs">
                <div>
                    <div>       
                    <label htmlFor="email">Email</label>
                    </div>
                    <input type="email" id="email" 
                            name="email"   
                            value={credentials.email} 
                            onChange={handleChange}/><br/><br/>
                    </div>
                    <div>
                        <div>       
                    <label htmlFor="username">Username</label>
                    </div>
                    <input type="text" id="username" 
                            name="username"   
                            value={credentials.username} 
                            onChange={handleChange} /><br/><br/>
                    </div>
                    <div>
                        <div>       
                    <label htmlFor="password">Password</label>
                    </div>
                    <input type="password" id="password" 
                            name="password"   
                            value={credentials.password} 
                            onChange={handleChange}/><br/><br/>
                    </div>
                </div>
                <div className='button-div'>
                    <button className='sign-in'>Submit</button>
                    <br/>
                    <p>Already have an account?</p>
                    <Link to='/login'>Login</Link>
                </div>
            </form>
        </section>   
    )
}

export default SignUp;