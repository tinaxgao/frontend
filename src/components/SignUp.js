import './SignUp.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

// import { userActions } from '../_actions';



function SignUp () {


   

        const [submitted, setSubmitted] = useState(false);
        const registering = useSelector(state => state.registration.registering);
        const dispatch = useDispatch();
    
        // reset login status
        useEffect(() => {
            dispatch(userActions.logout());
        }, []);
    

        // REgistration 
        function register(user) {
            return dispatch => {
                dispatch(request(user));
        
                userService.register(user)
                    .then(
                        user => { 
                            dispatch(success());
                            history.push('/login');
                            dispatch(alertActions.success('Registration successful'));
                        },
                        error => {
                            dispatch(failure(error.toString()));
                            dispatch(alertActions.error(error.toString()));
                        }
                    );
            };
        
            function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
            function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
            function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
        }
            
            // Finished
        function handleChange(e) {
            const { name, value } = e.target;
            setUser(user => ({ ...user, [name]: value }));
        }
    
        function handleSubmit(e) {
            e.preventDefault();
    
            setSubmitted(true);
            if (user.firstName && user.lastName && user.username && user.password) {
                dispatch(userActions.register(user));
            }
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
        <input type="text" id="fname" name="fname" />
        </div>
        <br/>
        <div>
        <div class='last-name namefield'>       
        <label for="lname">Last Name</label>
        </div>
        <input type="text" id="lname" name="lname" />
        </div>
        </div>
        <div class="three-inputs">
        <div>
            <div>       
               <label for="email">Email</label>
               </div>
               <input type="text" id="email" name="email" /><br/><br/>
               </div>
               <div>
                <div>       
               <label for="username">Username</label>
               </div>
               <input type="text" id="username" name="username" /><br/><br/>
               </div>
               <div>
                <div>       
               <label for="password">Password</label>
               </div>
               <input type="text" id="password" name="password" /><br/><br/>
               </div>
           </div>
           <div class = 'button-div'>
               <button class='sign-in'>Submit</button>
               <br/>
               <p>Already have an account? Log in.</p>
           </div>
           </section>   
    )
}

export default SignUp;