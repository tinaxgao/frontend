import React, { useState, useEffect } from "react";

const AddGuest = (props) => {
  const [newGuest, setNewGuest] = useState([]);
  const [disabled, setDisabled] = useState(true);
  const {setGuests} = props;

  const handleChange = (e) => {
    const value =
      e.target.checked === !null ? e.target.checked : e.target.value;
    setNewGuest({
      ...newGuest,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", newGuest);
    setGuests([newGuest]);
  };

  // disables submit button if not checked
  useEffect(() => {
    if (newGuest.isAttending === true) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [newGuest]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="checkbox"
            id="isAttending"
            name="isAttending"
            onChange={handleChange}
          />{" "}
          ✋ I'm attending.
        </label>
        <label>🍲 I will be bringing:</label>
        <input
          type="text"
          id="bringingDish"
          name="bringingDish"
          placeholder="dish name"
          value={newGuest.bringingDish}
          onChange={handleChange}
        />
        <button className="btn-primary" disabled={disabled}>
          Submit
        </button>
      </form>

      <button onClick={props.handleAttending} className="btn-tertiary">
        Cancel
      </button>
    </div>
  );
};

export default AddGuest;
