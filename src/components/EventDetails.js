import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import axios from 'axios';
import GuestDetails from "./Guest-List/GuestDetails";

import EventTitle from "./Guest-List/Event-Title/EventTitle";
import EventTitleForm from "./Guest-List/Event-Title/EventTitleForm";
import AddGuest from "./Guest-List/AddGuest";
import useAttending from "../hooks/useAttending";

const EventDetails = () => {
    const initialState = {
        id: 123,
        firstName: "First Name of Host",
        title: "Potluck Title",
        location: "Location",
        date: "MM/DD/YY",
        description: "Description Description Description",
        guests: [
          { id: 1, firstName: "Mario", dish: "Pumpkin Pie" },
          { id: 2, firstName: "Luigi", dish: "Apple Pie" },
          { id: 3, firstName: "Yoshi", dish: "Potatoes" },
          { id: 4, firstName: "Peach", dish: "Sake" },
        ],
      };

      const [state, setState] = useState(initialState);
      const [editing, setEditing] = useState(false);
      const [attending, handleAttending] = useAttending(false);

      const handleToggle = () => {
        setEditing(!editing);
      };
      
      useEffect(() => {
        axios //NOT THE CORRECT INFO YET, JUST TESTING API
          .get('https://lambdapotluck.herokuapp.com/api/events')
          .then((resp) => {
            console.log("api resp", resp.data); //Delete console.log
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);

      return (
        <div>
          {!editing ? (
            <EventTitle state={state} />
          ) : (
            <EventTitleForm state={state} setState={setState} handleToggle={handleToggle}/>
          )}
          <section className="guest-list">
            <button onClick={handleAttending} className="btn-primary">
              Attend
            </button>
            <div className="attending">
              {attending && (
                <AddGuest attending={attending} handleAttending={handleAttending} />
              )}
            </div>
          </section>
          <section className="guest-list">
            {state.guests.map((i) => (
              <GuestDetails guests={i} key={i.id} />
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
}

export default EventDetails;