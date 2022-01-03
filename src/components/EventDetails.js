import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

import GuestDetails from "./Guest-List/GuestDetails";

import EventTitle from "./Guest-List/Event-Title/EventTitle";
import EventTitleForm from "./Guest-List/Event-Title/EventTitleForm";
import AddGuest from "./Guest-List/AddGuest";
import useAttending from "../hooks/useAttending";
import axiosWithAuth from "../utils/axiosWithAuth";

const EventDetails = (props) => {
  const initialState = {
    event_id: 123,
    title: "Potluck Title",
    details: {
      organizer: "host user id",
      location: "Location",
      date: "MM/DD/YY",
      description: "Description Description Description",
    },
    guests: [
      { id: 1, guest: "Mario", bringingDish: "Pumpkin Pie" },
      { id: 2, guest: "Luigi", bringingDish: "Apple Pie" },
      { id: 3, guest: "Yoshi", bringingDish: "Potatoes" },
      { id: 4, guest: "Peach", bringingDish: "Sake" },
    ],
  };

  const [state, setState] = useState(initialState);
  const [guests, setGuests] = useState(initialState.guests);
  const [editing, setEditing] = useState(false);
  const [attending, handleAttending] = useAttending(false);

  const { id } = useParams();

  console.log("eventdetails - guests:", guests); //Delete console.log

  console.log("eventdetails - eventid:", id); //Delete console.log

  const handleToggle = () => {
    setEditing(!editing);
  };

  useEffect(() => {
    axiosWithAuth()
      .get(`/organizer/${id}/guests`)
      .then((resp) => {
        console.log("eventdetails api resp", resp.data); //Delete console.log
        setState(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(state);

  return (
    <div>
      {!editing ? (
        <EventTitle state={state} />
      ) : (
        <EventTitleForm
          state={state}
          setState={setState}
          handleToggle={handleToggle}
        />
      )}
      <section className="guest-list">
        <button onClick={handleAttending} className="btn-primary">
          Attend
        </button>
        <div className="attending">
          {attending && (
            <AddGuest
              attending={attending}
              handleAttending={handleAttending}
              guests={guests}
              setGuests={setGuests}
            />
          )}
        </div>
      </section>
      <section className="guest-list">
        {guests.map((i) => (
          <GuestDetails guests={i} key={i.id} />
        ))}
      </section>
      <section className="event-edit">
        <button onClick={handleToggle} class="btn-tertiary">
          Edit
        </button>
        <button className="btn-tertiary">Delete</button>
      </section>
    </div>
  );
};

export default EventDetails;
