import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Q: Are we using an email or usename for sign in?
const initialCredentials = {
    username: "",
    password: ""
}

function Login () {
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
                console.log('Login: ', response);
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('username', credentials.username); // QUESTION: Pass here or through Props?
                navigate('/profile');
                setLoginFailed(false);
            })
            .catch( error => {
                console.log('Login: ', error);
                setLoginFailed(true);
            })
    }

    return (
        <div className="container">
            <h2>Enter your username and password</h2><br/>
            <form onSubmit={handleSubmit}>

                <label for="username">Username: </label>
                <input 
                    type="text" 
                    name="username" 
                    value={credentials.username} 
                    onChange={handleChange} 
                    placeholder="Enter username..." /><br/><br/>

                <label for="password">Password: </label>
                <input 
                    type="password" 
                    name="password" 
                    value={credentials.password} 
                    onChange={handleChange} 
                    placeholder="Enter password..." /><br/><br/>

                { loginFailed && <p className="error-msg">Username or password incorrect </p>}
                <button>Login</button>
            </form>

        </div>
    )
}

export default Login;