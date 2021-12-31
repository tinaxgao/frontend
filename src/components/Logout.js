import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import axiosWithAuth from '../utils/axiosWithAuth';

function Logout (props) {
    
    const navigate = useNavigate();
    /*
    axiosWithAuth().post('/logout')
        .then( response => {
            localStorage.removeItem('token');
            props.setUserId(null);
            navigate('/home');
            console.log('Logout: ', response); // FOR TESTING ONLY - REMOVE LATER
        })
        .catch( error => {
            console.log('Logout: ', error);
        })
    */
    
    // ----- Temporary UseEffect while we wait for Logout
    useEffect( () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user_id');
    
        navigate('/');
    }, [])
    

    return (
        <div></div>
    )
}

export default Logout;