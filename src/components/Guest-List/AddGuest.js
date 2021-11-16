import React, { useState } from "react";

const AddGuest = (props) => {
  return (
    <div>
      <form>
        <input type="checkbox" id="isAttending" name="isAttending" />{" "}
        <label>I'm attending.</label> <label> I will be bringing: </label>
        <input
          type="text"
          id="bringingDish"
          name="bringingDish"
          placeholder="dish name"
        />
      </form>
      <button class="btn-primary">Submit</button>
      <button onClick={props.handleAttending} class="btn-tertiary">
        Cancel
      </button>
    </div>
  );
};

export default AddGuest;
