import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import GuestDetails from "./Guest-List/GuestDetails";

import EventTitle from "./Guest-List/Event-Title/EventTitle";
import EventTitleForm from "./Guest-List/Event-Title/EventTitleForm";

const Event = () => {
  const initialState = {
    firstName: "First Name",
    title: "Potluck Title",
    location: "Location",
    date: "MM/DD/YY",
    description: "Description Description Description",
    guests: [
      { id: 1, firstName: "Mario", dish: "Pumpkin Pie" },
      { id: 2, firstName: "Luigi", dish: "Apple Pie" },
    ],
  };

  const [editing, setEditing] = useState(false);

  useEffect(() => {
    // axiosWithAuth().get().then().catch() get info about the event
  }, []);

  const handleToggle = () => {
    setEditing(!editing);
  };

  return (
    <div>
      {!editing ? (
        <EventTitle state={initialState} />
      ) : (
        <EventTitleForm state={initialState} />
      )}
      <section className="guest-list">
        <button class="btn-primary">Attend</button>
      </section>
      <section className="guest-list">
        {initialState.guests.map((i) => (
          <GuestDetails guests={i} />
        ))}
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
