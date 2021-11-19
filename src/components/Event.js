import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axiosWithAuth from "../utils/axiosWithAuth";
import EventDetails from './EventDetails'
import Profile from './Profile';
import './Event.css'

  

const Event = (props) => {
  // const [event, setEvent] = useState({})
  // const { organizer } = useParams()
  const navigate = useNavigate();
  const { event_description, event_date, event_title, event_location, event_id } = props.event
  

  
  const handleClick =() => {
    navigate(`/event-details/${event_id}`)
  }
  console.log(props.event)
  return (
  
    <div className="events" key={event_id} onClick={handleClick}>
        <h4>Potluck Name: {event_title}</h4>
        <p>Date: {event_date}</p> 
        <p>Location: {event_location}</p>
        <p>Description: {event_description}</p>
  </div>

  );
};

export default Event;
//map out list of dishes in dish list
// dish.map(dish => {<p>{dish}</p>})