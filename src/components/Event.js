import React from "react";
import { useNavigate } from 'react-router-dom';


import '../styles/Event.css'

  
const Event = (props) => {
  // const [event, setEvent] = useState({})
  // const { organizer } = useParams()
  const navigate = useNavigate();
  const { event_description, event_date, event_title, event_location, event_id } = props.event
    
  const handleClick =() => {
    navigate(`/event-details/${event_id}`)
  }

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