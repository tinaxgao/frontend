import React, { useState } from "react";

const GuestDetails = ({guestname, dish}) => {
  return (
    <div className="dish-container">
      <div className="guest">{guestname} is bringing</div>
      <div className="dish">{dish}</div>
    </div>
  );
};

export default GuestDetails;
