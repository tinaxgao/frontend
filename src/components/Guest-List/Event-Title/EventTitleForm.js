import React, { useState } from "react";

const EventTitleForm = ({ state, setState, handleToggle }) => {
  const [newEventInfo, setNewEventInfo] = useState(state);

  const handleChange = (e) => {
    console.log("handlechange name", e.target.value); //Delete console.log
    setNewEventInfo({ ...newEventInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit newEventInfo:", newEventInfo); //Delete console.log
    setState(newEventInfo);
    handleToggle();
  };

  return (
    <section className="hero">
      <form onSubmit={handleSubmit}>
        <h1>
          {state.firstName} is hosting a{" "}
          <input type="text" name="title" onChange={handleChange} value={newEventInfo.title}/> at{" "}
          <input type="text" name="location" onChange={handleChange} value={newEventInfo.location}/> on{" "}
          <input type="date" name="date" onChange={handleChange} value={newEventInfo.date}/>
        </h1>
        <p>
          <input type="text" name="description" onChange={handleChange} value={newEventInfo.description} />
        </p>
        <button>Update</button>
      </form>
    </section>
  );
};

export default EventTitleForm;
