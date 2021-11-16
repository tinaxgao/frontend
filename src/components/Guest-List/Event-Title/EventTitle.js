import React from "react";

const EventTitle = ({ state }) => {
  return (
    <section className="hero">
      <h1>
        {state.firstName} is hosting a {state.title} at {state.location} on {state.date}
      </h1>
      <p>{state.description}</p>
    </section>
  );
};

// const mapStateToProps = (state) => {
//     return({
//         firstName: state.firstName,
//         title: state.title,
//         location: state.location,
//         date: state.date,
//         description: state.description
//     })
// }

export default EventTitle;
