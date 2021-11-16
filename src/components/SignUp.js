import React, { useState } from 'react';
import axios from 'axios';
import './SignUp.css';
import { useNavigate } from 'react-router-dom';

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
        console.log("Submit Click: ", credentials);  // REMOVE WHEN AXIOS UPDATED
        navigate('/login'); // REMOVE WHEN AXIOS UPDATED
        /*
        axios.post('https://lambdapotluck.herokuapp.com/api/auth/register', credentials)
            .then( response => {
                console.log('Sign-up: ', response);
                localStorage.setItem('token', response.data.token);
                navigate('/login');
                setSubmitFailed(false);
            })
            .catch( error => {
                console.log('Sign-up: ', error);
                setSubmitFailed(true);
            })
        */
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
                <label for="firstName">First Name</label>
                </div>
                <input type="text" id="firstName" 
                            name="firstName" 
                            value={credentials.firstName} 
                            onChange={handleChange} />
                </div>
                <br/>
                <div>
                <div className='last-name namefield'>       
                <label for="lastName">Last Name</label>
                </div>
                <input type="text" id="lastName" 
                            name="lastName" 
                            value={credentials.lastName} 
                            onChange={handleChange}/>
                </div>
                </div>
                <div className="three-inputs">
                <div>
                    <div>       
                    <label for="email">Email</label>
                    </div>
                    <input type="email" id="email" 
                            name="email"   
                            value={credentials.email} 
                            onChange={handleChange}/><br/><br/>
                    </div>
                    <div>
                        <div>       
                    <label for="username">Username</label>
                    </div>
                    <input type="text" id="username" 
                            name="username"   
                            value={credentials.username} 
                            onChange={handleChange} /><br/><br/>
                    </div>
                    <div>
                        <div>       
                    <label for="password">Password</label>
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
                    {/* <p>Already have an account? Log in.</p> */}
                </div>
            </form>
        </section>   
    )
}

export default SignUp;