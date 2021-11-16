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
        <div className="create-event container">
            <h2>Create a Potluck Event!</h2>
            <form onSubmit ={handleSubmit}>
                <label>Title:
                    <input
                        type="text"
                        name="title"
                        value={event.title}
                        onChange={handleChange}
                        placeholder="Enter Title Here"
                    /><br/>
                </label>
                <label>Date:
                    <input
                        type="text"
                        name="date"
                        value={event.date}
                        onChange={handleChange}
                        placeholder="Enter Date Here"
                    /><br/>
                </label>
                <label>Location:
                    <input
                        type="text"
                        name="location"
                        value={event.location}
                        onChange={handleChange}
                        placeholder="Enter Location"
                    /><br/>
                </label>
                <label>Description:
                    <input
                        type="text"
                        name="description"
                        value={event.description}
                        onChange={handleChange}
                        placeholder="Enter Description Here"
                    /><br/>
                </label>
                <input type="submit" value="Create Potluck" />
            </form>
        </div>
    )
}

export default CreateEvent;