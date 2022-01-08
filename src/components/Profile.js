import React, { useState, useEffect } from "react";
import EventList from "./EventList";
import { useNavigate } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";

import "../styles/Event.css";

const Profile = (props) => {
  const userId = localStorage.getItem("user_id");
  const initialEventState = [{ first_name: "", event_date: "0T" }];
  const [eventList, setEventList] = useState(initialEventState);
  const navigate = useNavigate();

  // ----- On click, navigate to Create Event form
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/create-event");
  };

  // ----- Populate w. Potluck events the user created or is invited to
  useEffect(() => {
    axiosWithAuth()
      .get(`/organizer/${userId}`)
      .then((response) => {
        setEventList(response.data);
      })
      .catch((error) => {
        console.log("Profile.js: ", error);
      });
  }, []);

  return (
    <div className="full-profile">
      <section className="profile-header">
        <h3>{eventList[0].first_name}'s events:</h3>
        <button className="btn-primary" onClick={handleClick}>
          + Create a Potluck
        </button>
      </section>
      <section className="events-container">
        <EventList userId={userId} eventList={eventList} />
      </section>
    </div>
  );
};

export default Profile;
