import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
        guests: ""
          // [ { id: 1, firstName: "Mario", dish: "Pumpkin Pie" },
          // { id: 2, firstName: "Luigi", dish: "Apple Pie" },
          // { id: 3, firstName: "Yoshi", dish: "Potatoes" },
          // { id: 4, firstName: "Peach", dish: "Sake" }, ];
        
      };

      const [state, setState] = useState(initialState);
      const [guests, setGuests] = useState([]);
      const [editing, setEditing] = useState(false);
      const [attending, handleAttending] = useAttending(false);
      const { id } = useParams();

      console.log("guests in eventdetails", guests);

      const handleToggle = () => {
        setEditing(!editing);
      };
      
      useEffect(() => {
        axios
          .get(`https://lambdapotluck.herokuapp.com/api/events/${id}`)
          .then((resp) => {
            console.log("api resp", resp.data); //Delete console.log
            setState(resp.data);
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
                <AddGuest attending={attending} handleAttending={handleAttending} guests={guests} setGuests={setGuests} />
              )}
            </div>
          </section>
          <section className="guest-list">
            { guests.map((i) => (
              <GuestDetails guests={i} key={i.bringingDish} />
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