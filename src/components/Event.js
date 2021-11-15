import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import GuestDetails from "./Guest-List/GuestDetails";

import EventTitle from "./Event-Title/EventTitle";
import EventTitleForm from "./Event-Title/EventTitleForm";

const Event = () => {
  const initialState = {
    firstName: "First Name",
    title: "Potluck Title",
    location: "Location",
    date: "MM/DD/YY",
    description: "Description Description Description",
    guests: [],
  };

  const [editing, setEditing] = useState(false);

  useEffect(() => {
    // axiosWithAuth().get().then().catch() get info about the event
  }, []);

  const handleToggle = () => {
    setEditing(!editing);
    console.log(editing)
  };

  return (
    <div>
      {editing ? (
        <EventTitle state={initialState} />
      ) : (
        <EventTitleForm state={initialState} />
      )}
      <section className="guest-list">
        <button class="btn-primary">Attend</button>
      </section>
      <section className="guest-list">
        <GuestDetails />
      </section>
      <section className="event-edit">
        <button onClick={handleToggle} class="btn-tertiary">
          Edit
        </button>
        <button class="btn-tertiary">Delete</button>
      </section>
    </div>
  );
};

export default Event;
