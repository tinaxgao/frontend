import React from "react";

const EventTitle = ({ state }) => {
  console.log("eventtitle state:", state)

  return (
    <section className="hero">
      <h1>
        {state.organizer} is hosting a {state.event_title} at {state.event_location} on {state.event_date}
      </h1>
      <p>{state.event_description}</p>
    </section>
  );
};

export default EventTitle;
