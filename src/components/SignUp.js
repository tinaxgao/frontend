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
        axios.post('https://lambdapotluck.herokuapp.com/api/auth/register', credentials)
            .then( response => {
                console.log('Sign-up: ', response);
                localStorage.setItem('token', response.data.token);
                navigate('/profile');
                setSubmitFailed(false);
            })
            .catch( error => {
                console.log('Sign-up: ', error);
                setSubmitFailed(true);
            })
    }
   

    
    return (
        <section class="registration-form">
        <div class="title">
            <h2>Sign up for your account</h2>
            <br/>
            <h3>to plan or attend a potluck!</h3>
        </div>
        <div class="name">
            <div class='first-name namefield'>
         <div>       
        <label for="fname">First Name</label>
        </div>
        <input type="text" id="fname" 
                    name="fname" 
                    value={credentials.firstName} 
                    onChange={handleChange} />
        </div>
        <br/>
        <div>
        <div class='last-name namefield'>       
        <label for="lname">Last Name</label>
        </div>
        <input type="text" id="lname" 
                    name="lname" 
                    value={credentials.lastName} 
                    onChange={handleChange}/>
        </div>
        </div>
        <div class="three-inputs">
        <div>
            <div>       
               <label for="email">Email</label>
               </div>
               <input type="text" id="email" 
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
               <input type="text" id="password" 
                    name="password"   
                    value={credentials.password} 
                    onChange={handleChange}/><br/><br/>
               </div>
           </div>
           <div class = 'button-div'>
               <button class='sign-in'>Submit</button>
               <br/>
               <p>Already have an account? Log in.</p>
           </div>
           { submitFailed && <p>Please Try Again Later</p>}
           </section>   
    )
}

export default SignUp;