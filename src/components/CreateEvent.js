import React, {useState} from "react";

const initialEvent = {
    title:"",
    date:"",
    location:"",
    description:"",
}

const CreateEvent = () => {
    const [event, setEvent] = useState(initialEvent);

    const handleChange = (e) => {
        setEvent({
            ...event,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    
    return (
        <div className="create-event">
            <h2>=======</h2>
            <h2>CreateEvent.JS</h2>
            <form onSubmit ={handleSubmit}>
                <label>Title:
                    <input
                        type="text"
                        name="title"
                        value={event.title}
                        onChange={handleChange}
                        placeholder="Enter Title Here"
                    />
                </label>
                <label>Date:
                    <input
                        type="text"
                        name="date"
                        value={event.date}
                        onChange={handleChange}
                        placeholder="Enter Date Here"
                    />
                </label>
                <label>Location:
                    <input
                        type="text"
                        name="location"
                        value={event.location}
                        onChange={handleChange}
                        placeholder="Enter Location"
                    />
                </label>
                <label>Description:
                    <input
                        type="text"
                        name="description"
                        value={event.description}
                        onChange={handleChange}
                        placeholder="Enter Description Here"
                    />
                </label>
                <input type="submit" value="Create Potluck" />
            </form>
        </div>
    )
}

export default CreateEvent;