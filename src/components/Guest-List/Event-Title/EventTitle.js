import React from "react";

const EventTitle = ({ state }) => {
  const date = state.details.date.split("T")[0];

  return (
    <section className="hero">
      <h2>{state.details.organizer} is hosting a</h2>
      <h1>{state.title}</h1>
      <h2>at {state.details.location}</h2>
      <h2> on {date}</h2>
      <div className="underline" />
      <p>{state.details.description}</p>
    </section>
  );
};

export default EventTitle;
