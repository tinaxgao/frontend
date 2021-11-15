import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const Event = () => {
  return (
    <div>
      <section className="hero">
        <h1>FirstName is hosting a Title at Location on Date</h1>
        <p>
          Description Description Description Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </section>
      <section className="guest-list">
        <button class="btn-primary">Attend</button>
      </section>
      <section className="guest-list">
        <div className="dish-container">
          <div className="guest">Guestname is bringing</div>
          <div className="dish">Pumpkin Pie</div>
        </div>
        <div className="dish-container">
          <div className="guest">Guestname is bringing</div>
          <div className="dish">Apple Pie</div>
        </div>
        <div className="dish-container">
          <div className="guest">Guestname is bringing</div>
          <div className="dish">Pecan Pie</div>
        </div>
      </section>
      <section className="event-edit">
        <button class="btn-tertiary">Edit</button>
        <button class="btn-tertiary">Delete</button>
      </section>
    </div>
  );
};

export default Event;
