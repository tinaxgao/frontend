import React from "react";
import { useNavigate } from 'react-router-dom';


import '../styles/Event.css'

  
const Event = (props) => {
  const navigate = useNavigate();
  const { event_description, event_date, event_title, event_location, event_id } = props.event

  // Formatted date
  const date = ( !!event_date ? event_date.split("T")[0] : event_date )
    
  const handleClick =() => {
    navigate(`/event-details/${event_id}`)
  }

  return (
  
    <div className="events" key={event_id} onClick={handleClick}>
        <p><span>Event Date:</span> {date}</p>
        <h4>{event_title}</h4>
        <p><span>Location:</span> {event_location}</p>
        <p><span>Description:</span> {event_description}</p>
  </div>

  );
};

export default Event;