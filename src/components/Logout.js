import React from 'react';
import { useNavigate } from 'react-router-dom'
import axiosWithAuth from '../utils/axiosWithAuth';

function Logout () {

    const navigate = useNavigate();

    // axiosWithAuth().post('/logout')
    //     .then( response => {
    //         localStorage.removeItem('token');
    //         navigate('/');
    //         console.log('Logout: ', response); // REMOVE
    //     })
    //     .catch( error => {
    //         console.log('Logout: ', error);
    //     })
    
    navigate('/'); // FOR TESTING ONLY - REMOVE LATER

    return (
        <div></div>
    )
}

export default Logout;