import React, {useState} from "react";
import { useNavigate } from "react-router";
import axiosWithAuth from "../utils/axiosWithAuth";

const initialEvent = {
    title:"",
    date:"",
    location:"",
    description:"",
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
        axiosWithAuth().post('/create', event)
            .then(response => {
                console.log('CreateEvent.js: ', response);
                navigate('/profile');
            })
            .catch(error => {
                console.log('CreateEvent.js: ', error)
            })
    }

    return (
        <div className="create-event">
            <h2>=======</h2>
            <h2>Create a Potluck Event!</h2>
            <form onSubmit ={handleSubmit}>
                <label>Title:
                    <input
                        type="text"
                        name="title"
                        value={event.title}
                        onChange={handleChange}
                        placeholder="Enter Title Here"
                    />
                </label><br/>
                <label>Date:
                    <input
                        type="date"
                        name="date"
                        value={event.date}
                        onChange={handleChange}
                        placeholder="Enter Date Here"
                    />
                </label><br/>
                <label>Location:
                    <input
                        type="text"
                        name="location"
                        value={event.location}
                        onChange={handleChange}
                        placeholder="Enter Location"
                    />
                </label><br/>
                <label>Description:
                    <input
                        type="text"
                        name="description"
                        value={event.description}
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