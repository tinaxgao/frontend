import React from "react";

const EventTitle = ({ state }) => {
  console.log("eventtitle state:", state, state.details, state.details.organizer)

  return (
    <section className="hero">
      <h1>
        {state.details.organizer} is hosting a {state.title} at {state.details.location} on {state.details.date}
      </h1>
      <p>{state.details.description}</p>
    </section>
  );
};

export default EventTitle;
