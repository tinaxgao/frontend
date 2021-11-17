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
            <form className="signUpForm" onSubmit={handleSubmit}>
                <h2 className="title">Sign up for your account</h2>
                <br/>
                <h3 className="subTitle">to plan or attend a potluck!</h3>
                <div className="name">
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
                </div>
                <div className="inputContainer">
                    <div>       
                    <label for="email" className="label">Email</label>
                    </div>
                    <input 
                        type="email" 
                        className="input" 
                        id="email" 
                        name="email"   
                        value={credentials.email} 
                        onChange={handleChange}
                        placeholder="a"
                    />
                    <br/><br/>
                    </div>
                    <div className="inputContainer">
                        <div>       
                    <label for="username" className="label">Username</label>
                    </div>
                    <input 
                        type="text" 
                        className="input" 
                        id="username" 
                        name="username"   
                        value={credentials.username} 
                        onChange={handleChange}
                        placeholder="a" 
                    />
                    <br/><br/>
                    </div>
                    <div className="inputContainer">
                        <div>       
                    <label for="password" className="label">Password</label>
                    </div>
                    <input 
                        type="password" 
                        className="input" 
                        id="password" 
                        name="password"   
                        value={credentials.password} 
                        onChange={handleChange}
                        placeholder="a"
                    />
                    <br/><br/>
                    </div>
                <button type="submit" class="submitBtn" value="Sign up">Sign Up</button>
                    <br/>
                    {/* <p>Already have an account? Log in.</p> */}
            </form>
        </section>   
    )
}

export default SignUp;