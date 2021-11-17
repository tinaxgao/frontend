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
                localStorage.setItem('username', credentials.username); // Simply work around instead of using state in app.js or redux
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
        <div className="container">
            <h2 className="title">Enter your username and password</h2>
            <form onSubmit={handleSubmit}>

                <label htmlFor="username">Username: </label>
                <input 
                    type="text" 
                    name="username" 
                    value={credentials.username} 
                    onChange={handleChange} 
                    placeholder="Enter username..." /><br/><br/>

                <label htmlFor="password">Password: </label>
                <input 
                    type="password" 
                    name="password" 
                    value={credentials.password} 
                    onChange={handleChange} 
                    placeholder="Enter password..." /><br/><br/>
                    
                <div>
                    { loginFailed && <p className="error-msg">Username or password incorrect </p>}
                </div>
                <button>Login</button>
                <p>Don't have an account?</p>
                <Link to='/signup'>Sign Up</Link>
            </form>

        </div>
    )
}

export default Login;