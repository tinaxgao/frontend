import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const initialCredentials = {
    email: "",
    password: "",
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
        axios.post('https://potluck3backend.herokuapp.com/api/auth/login', credentials)
            .then( response => {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user_id', response.data.user_id);
            
                setLoginFailed(false); 
                navigate('/profile');
            })
            .catch( error => {
                console.log('Login.js: ', error);
                setLoginFailed(true);
            })
    }


    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Sign in</h1>
                <div className="inputContainer">
                    {/* <label htmlFor="email" className="label">Email: </label> */}
                    <input 
                        type="text" 
                        name="email" 
                        value={credentials.email} 
                        onChange={handleChange} 
                        placeholder="Enter email" 
                        className="input" 
                    />
                </div>
                <div className="inputContainer">
                    {/* <label htmlFor="password" className="label">Password: </label> */}
                    <input 
                        type="password" 
                        name="password" 
                        value={credentials.password} 
                        onChange={handleChange} 
                        placeholder="Enter password" 
                        className="input" 
                    />
                </div> 
                <div>
                    { loginFailed && <p className="error-msg">Email or password incorrect </p>}
                </div>
                <button type="submit" className="btn-primary" value="Log In">Log In</button>
                <p>Don't have an account?</p>
                <Link to='/signup'>Sign Up</Link>
            </form>
        </div>
    )
}

export default Login;