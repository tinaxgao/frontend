import React, { useState } from "react";

import { updateEvent } from "../actions/guestActions";

const EventTitleForm = ({ state }) => {
  return (
    <section className="hero">
      <h1>Update Event text for {state.title}</h1>
      <button>Update</button>
    </section>
  );
};

export default EventTitleForm;
