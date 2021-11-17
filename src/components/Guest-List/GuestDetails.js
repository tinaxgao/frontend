import React from "react";

const GuestDetails = (guests) => {
  
  return (
    <div className="dish-container">
      <div className="guest">{guests.guests.firstName} is bringing</div>
      <div className="dish">{guests.guests.dish}</div>
    </div>
  );
};

export default GuestDetails;
