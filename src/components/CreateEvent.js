import React, {useState} from "react";
import { useNavigate } from "react-router";
import axiosWithAuth from "../utils/axiosWithAuth";

const initialEvent = {
    organizer: "",
    event_title:"",
    event_location:"",
    event_description:"",
    event_date:"",
}

const CreateEvent = (props) => {
    const userId = localStorage.getItem("user_id");
    const [event, setEvent] = useState({...initialEvent, organizer: userId});
    const navigate = useNavigate();

    const handleChange = (e) => {
        setEvent({
            ...event,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth().post('/organizer/event', event)
            .then(response => {
                navigate('/profile');
            })
            .catch(error => {
                console.log('CreateEvent.js: ', error)
            })
    }

return (

<div className="registration-form">
<form className="signUpForm" onSubmit ={handleSubmit}>
    <h2 className="title">Create a Potluck Event!</h2>
        <div className="inputContainer"> 
            <label className="label">Title:</label>
                <input
                    type="text"
                    name="event_title"
                    value={event.event_title}
                    onChange={handleChange}
                    placeholder="Enter Title Here"
                    className="input"
                />
        </div>
        <div className="inputContainer">  
            <label className="label">Date:</label>
                <input
                    type="date"
                    name="event_date"
                    value={event.event_date}
                    onChange={handleChange}
                    placeholder="Enter Date Here"
                    className="input"
                />
        </div>
        <div className="inputContainer"> 
            <label className="label">Location:</label>
                <input
                    type="text"
                    name="event_location"
                    value={event.event_location}
                    onChange={handleChange}
                    placeholder="Enter Location"
                    className="input"
                />
        </div>
        <div className="inputContainer"> 
            <label className="label">Description:</label>
                <input
                    type="text"
                    name="event_description"
                    value={event.event_description}
                    onChange={handleChange}
                    placeholder="Enter Description Here"
                    className="input"
                />
        </div>
        <button type="submit" className="submitBtn" value="Create Potluck">Create Potluck</button>
</form>
</div>
)
}

export default CreateEvent;