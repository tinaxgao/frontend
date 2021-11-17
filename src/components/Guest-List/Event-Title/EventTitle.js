import React from "react";

const EventTitle = ({ state }) => {
  return (
    <section className="hero">
      <h1>
        {state.firstName} is hosting a {state.title} at {state.location} on {state.date}
      </h1>
      <p>{state.description}</p>
    </section>
  );
};

export default EventTitle;
