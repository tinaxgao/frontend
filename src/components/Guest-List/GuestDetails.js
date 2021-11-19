import React from "react";

const GuestDetails = (props) => {
  console.log("guestdetails props", props);

  return (
    <div className="dish-container">
      <div className="guest"> is bringing</div>
      <div className="dish">{props.guests.bringingDish}</div>
    </div>
  );
};

export default GuestDetails;
