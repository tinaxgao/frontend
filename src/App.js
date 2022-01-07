import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// ----- Page Imports -----
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Profile from "./components/Profile";
import EventDetails from "./components/EventDetails";
import CreateEvent from "./components/CreateEvent";

function App() {
  const userId = localStorage.getItem("user_id");
  
  return (
    <BrowserRouter>
      <header>
        <nav className="nav-container">
          <div className="nav-left">
            <Link to="/">Home</Link>
            <br />
          </div>
          <div className="nav-center">
            <h1>Potluck Planner</h1>
          </div>
          <div className="nav-right">
            {userId && <Link to="/logout">Logout</Link>}
          </div>
        </nav>
      </header>

      <div className="body-container">
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />

          <Route path="/profile" element={<Profile />} />
          <Route path="/event-details/:id" element={<EventDetails />} />
          <Route path="/create-event" element={<CreateEvent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
