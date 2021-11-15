import React from 'react';
import Event from './Event';
import axiosWithAuth from '../utils/axiosWithAuth';
import axios from 'axios';

const EventList = () => {

    // const handleSubmit = e => {
    //     e.preventDefault();
    //     push("/create-event")
    // }

    return (
        <div className="event-list-container">
            <div className="event-list-heading">
                <h2>FirstName's Potluck</h2>
                <button className="create-btn">+ Create a Potluck</button>
            </div>
            <div className="event-list">

                
                <p>MM/DD/YYYY</p>
                <img src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"></img>
                <h4>Event Title</h4>
                <p>Location</p>
                <p>hostname</p>
            </div>
            <div className="event-list">
                <p>MM/DD/YYYY</p>
                <img src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"></img>
                <h4>Event Title</h4>
                <p>Location</p>
                <p>hostname</p>
            </div>
            <div className="event-list">
                <p>MM/DD/YYYY</p>
                <img src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"></img>
                <h4>Event Title</h4>
                <p>Location</p>
                <p>hostname</p>
            </div>
            <div className="event-list">
                <p>MM/DD/YYYY</p>
                <img src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"></img>
                <h4>Event Title</h4>
                <p>Location</p>
                <p>hostname</p>
            </div>
        </div>
    )
}

export default EventList;