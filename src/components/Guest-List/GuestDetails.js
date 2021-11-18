import React from "react";

const GuestDetails = (guests) => {
  console.log("guestdetails props", guests);

  return (
    <div className="dish-container">
      <div className="guest"> is bringing</div>
      <div className="dish">{guests.guests.bringingDish}</div>
    </div>
  );
};

export default GuestDetails;
