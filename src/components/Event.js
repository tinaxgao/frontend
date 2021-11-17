import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axiosWithAuth from "../utils/axiosWithAuth";
import EventDetails from './EventDetails'
import Profile from './Profile';


  

const Event = (props) => {
  // const [event, setEvent] = useState({})
  // const { organizer } = useParams()
  const navigate = useNavigate();
  const { organizer, date, title, location, event_id } = props.event
  

  
  const handleClick =() => {
    navigate(`/event-details/${organizer}`)
  }
  console.log(props.event)
  return (
  
    <div className="event-list" key={event_id} onClick={handleClick}>
        <div>
        <p>Date:{date}</p>
        <div className="dish-list">
          {/* dish.map(dish => {<p>{dish}</p>}) */}
        </div>
        <h4>Name:{title}</h4> 
        <p>Location:{location}</p>
        <p>Host:{organizer}</p>
        </div>
  </div>

  );
};

export default Event;
//map out list of dishes in dish list
// dish.map(dish => {<p>{dish}</p>})