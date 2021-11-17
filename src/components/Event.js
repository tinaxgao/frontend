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
    navigate(`/event-details/${event_id}`)
  }
  console.log(props.event)
  return (
  
    <div  key={event_id} onClick={handleClick}>
        <p>Date:{date}</p>
        <h4>Name:{title}</h4> 
        <p>Location:{location}</p>
        <p>Host:{organizer}</p>
  </div>

  );
};

export default Event;
//map out list of dishes in dish list
// dish.map(dish => {<p>{dish}</p>})