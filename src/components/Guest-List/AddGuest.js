import React, { useState } from "react";

const AddGuest = (props) => {
console.log(props)
  return (
    <div>
      I'm attending and bringing ___
      <button class="btn-primary">Submit</button>
      <button onClick={props.handleAttending} class="btn-tertiary">
        Cancel
      </button>
    </div>
  );
};

export default AddGuest;
