import React, {useState} from "react";
import { useNavigate } from "react-router";
import axiosWithAuth from "../utils/axiosWithAuth";
import axios from 'axios'; // <<<<< FOR TESTING - REMOVE WHEN DONE

const initialEvent = {
    event_title:"",
    event_location:"",
    event_description:"",
    event_date:"",
}

const CreateEvent = () => {
    const [event, setEvent] = useState(initialEvent);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setEvent({
            ...event,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth().post('/events', event)
        // axios.post('https://lambdapotluck.herokuapp.com/api/events', event)
            .then(response => {
                console.log('CreateEvent.js - Success: ', response);
                navigate('/profile');
            })
            .catch(error => {
                console.log('CreateEvent.js: ', error)
                console.log('CreateEvent.js - Event Object: ', event)
            })
    }

    return (

        <div className="create-event container">
            <h2>Create a Potluck Event!</h2>
            <form onSubmit ={handleSubmit}>
                
              <label>Title:
                    <input
                        type="text"
                        name="event_title"
                        value={event.event_title}
                        onChange={handleChange}
                        placeholder="Enter Title Here"
                    />
              </label><br/>

              <label>Date:
                    <input
                        type="date"
                        name="event_date"
                        value={event.event_date}
                        onChange={handleChange}
                        placeholder="Enter Date Here"
                    />
              </label><br/>

              <label>Location:
                    <input
                        type="text"
                        name="event_location"
                        value={event.event_location}
                        onChange={handleChange}
                        placeholder="Enter Location"
                    />
              </label><br/>

              <label>Description:
                    <input
                        type="text"
                        name="event_description"
                        value={event.event_description}
                        onChange={handleChange}
                        placeholder="Enter Description Here"
                    />
                </label><br/>

                <input type="submit" value="Create Potluck" />
            </form>
        </div>
    )
}

export default CreateEvent;