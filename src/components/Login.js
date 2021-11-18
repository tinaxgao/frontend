import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const initialCredentials = {
    username: "",
    password: ""
}

function Login (props) {
    const [credentials, setCredentials] = useState(initialCredentials);
    const [loginFailed, setLoginFailed] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://lambdapotluck.herokuapp.com/api/auth/login', credentials)
            .then( response => {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('username', credentials.username); // Work around instead of using state in app.js or redux
                props.setIsLoggedIn(true); // From App.JS to show the Logout link in the header
                setLoginFailed(false);
                navigate('/profile');
            })
            .catch( error => {
                console.log('Login: ', error);
                setLoginFailed(true);
            })
    }

    return (
        <div className="registration-form">
            <form className="signUpForm" onSubmit={handleSubmit}>
                <h2 className="title">Enter your Username and Password</h2>
                <div className="inputContainer">
                    <label htmlFor="username" className="label">Username: </label>
                    <input 
                        type="text" 
                        name="username" 
                        value={credentials.username} 
                        onChange={handleChange} 
                        placeholder="Enter username..." 
                        className="input" 
                    />
                </div>
                <div className="inputContainer">
                    <label htmlFor="password" className="label">Password: </label>
                    <input 
                        type="password" 
                        name="password" 
                        value={credentials.password} 
                        onChange={handleChange} 
                        placeholder="Enter password..." 
                        className="input" 
                    />
                </div> 
                <div>
                    { loginFailed && <p className="error-msg">Username or password incorrect </p>}
                </div>
                <button type="submit" className="submitBtn" value="Log In">Log In</button>
                <p>Don't have an account?</p>
                <Link to='/signup'>Sign Up</Link>
            </form>
        </div>
    )
}

export default Login;