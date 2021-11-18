import React, {useState, useEffect} from 'react';
import EventList from './EventList';
import { useNavigate } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';

import './Profile.css';


const Profile = (props) => {
    
    const { userId } = props;
    const [ eventList, setEventList ] = useState([])
    const navigate = useNavigate();

    // ----- On click, navigate to Create Event form
    const handleClick = (e) => {
        e.preventDefault();
        navigate('/create-event');
    }

    // ----- Populate w. Potluck events the user created or is invited to
    useEffect ( () => {
        axiosWithAuth().get(`/organizer/${userId}`)  
            .then( response => {
                setEventList(response.data);
            })
            .catch(error => {
                console.log('Profile.js: ', error)
            })
    }, []);

    return (
        <div className="full-profile">
        <div className="container">
            <div className="profile-header">
                <h4>Your Potluck Events!</h4>
                <button className="btn-secondary" onClick={handleClick}>+ Create a Potluck</button>
            </div>
            <div className="event-list">
                <EventList userId={userId} eventList={eventList}/>
            </div>
        </div>
        </div>
    )
}

export default Profile;