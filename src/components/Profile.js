import React, {useState, useEffect} from 'react';
import EventList from './EventList';
import { useNavigate } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';
import axios from 'axios'; // FOR TESTING ONLY - REMOVE WHEN DONE

import './Profile.css';


const Profile = (props) => {
    
    const name = 'Sean'; // TEMP - Replace w. props.firstName here and in JSX
    const [ eventList, setEventList ] = useState([])
    const navigate = useNavigate();

    // ----- On click, navigate to Create Event form
    const handleCreate = (e) => {
        e.preventDefault();
        navigate('/create-event');
    }

    // ----- Populate w. Potluck events the user created or is invited to
    useEffect ( () => {

        // NOTE: Currently pulls all events, not just user specific events
        // axiosWithAuth().get(`/events`)
        axios.get(`https://lambdapotluck.herokuapp.com/api/events/`)
            .then( response => {
                // console.log('Profile.js: ', response)
                setEventList(response.data)
            })
            .catch(error => {
                console.log('Profile.js: ', error)
            })
        
       
    }, []);

    console.log('Profile-eventList: ', eventList); // FOR TESTING ONLY - REMOVE WHEN DONE

    return (
        <div className="container">
            <div className="profile-header">
                <h4>{name}'s Potluck Events!</h4>
                <button className="btn-secondary" onClick={handleCreate}>+ Create a Potluck</button>
            </div>
            <div className="event-list">
                <EventList eventList={eventList}/>
            </div>
        </div>
    )
}

export default Profile;