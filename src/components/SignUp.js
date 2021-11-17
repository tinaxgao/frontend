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
            <form className="signUpForm" onSubmit={handleSubmit}>
                <h2 className="title">Sign up for your account</h2>
                <br/>
                <h3 className="subTitle">to plan or attend a potluck!</h3>
                <div className="name">
<<<<<<< HEAD
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
=======
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
>>>>>>> 4a16bb394ad29f17e01b6ce51f244103426fa6d0
                </div>
                </div>
                <div className="inputContainer">
                    <div>       
<<<<<<< HEAD
                    <label htmlFor="email">Email</label>
=======
                    <label for="email" className="label">Email</label>
>>>>>>> 4a16bb394ad29f17e01b6ce51f244103426fa6d0
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
<<<<<<< HEAD
                    <label htmlFor="username">Username</label>
=======
                    <label for="username" className="label">Username</label>
>>>>>>> 4a16bb394ad29f17e01b6ce51f244103426fa6d0
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
<<<<<<< HEAD
                    <label htmlFor="password">Password</label>
=======
                    <label for="password" className="label">Password</label>
>>>>>>> 4a16bb394ad29f17e01b6ce51f244103426fa6d0
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
<<<<<<< HEAD
                    <p>Already have an account?</p>
                    <Link to='/login'>Login</Link>
                </div>
=======
                    {/* <p>Already have an account? Log in.</p> */}
>>>>>>> 4a16bb394ad29f17e01b6ce51f244103426fa6d0
            </form>
        </section>   
    )
}

export default SignUp;