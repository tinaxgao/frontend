import React, { useState } from "react";

const GuestDetails = (guests) => {
  console.log(guests);

  return (
    <div className="dish-container">
      <div className="guest">{guests.guests.firstName} is bringing</div>
      <div className="dish">{guests.guests.dish}</div>
    </div>
  );
};

export default GuestDetails;
