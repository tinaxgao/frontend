import React from 'react';
import { useNavigate } from 'react-router-dom'
import axiosWithAuth from '../utils/axiosWithAuth';

function Logout (props) {

    const navigate = useNavigate();
    /*
    axiosWithAuth().post('/logout')
        .then( response => {
            localStorage.removeItem('token');
            localStorage.removeItem('username');
            props.setIsLoggedIn(false);
            navigate('/home');
            console.log('Logout: ', response); // FOR TESTING ONLY - REMOVE LATER
        })
        .catch( error => {
            console.log('Logout: ', error);
        })
    */

    // FOR TESTING ONLY - REMOVE LATER
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    props.setIsLoggedIn(false);
    navigate('/home');
    // -------------------------------

    return (
        <div></div>
    )
}

export default Logout;