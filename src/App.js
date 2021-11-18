import './App.css';
import React, {useState} from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// ----- Page Imports -----
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Logout from './components/Logout';
import Profile from './components/Profile';
import EventDetails from './components/EventDetails';
import CreateEvent from './components/CreateEvent';

function App() {

  const [ userId, setUserId ] = useState(null);

  return (
    <BrowserRouter>

      <header>
        <nav className="nav-container">
          <div className="nav-left">
            <Link to="/Home">Home</Link><br/>
          </div>
          <div className="nav-center">
            <h1>Potluck Planner</h1>
          </div>
          <div className="nav-right">
            {/* <Link to="/logout">Logout</Link> REMOVED TERNARY; NOT WORKING */}
            { userId && <Link to="/logout">Logout</Link> } 
          </div>
        </nav>
      </header>

      <div className="body-container">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/home" element={<Home />}/>
          
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/login" element={<Login setUserId={setUserId}/>}/>
          <Route path="/logout" element={<Logout setUserId={setUserId}/>}/>

          <Route path="/profile" element={<Profile userId={userId}/>}/>
          <Route path="/event-details/:id" element={<EventDetails userId={userId}/>}/>
          <Route path="/create-event" element={<CreateEvent userId={userId} />}/>
        </Routes>
      </div>

      {/* TEMPORARY LINKS FOR TESTING */}
      {/* <footer>
        <p>Temporary links for testing</p>
        <div className='temp-container'>        
          <div> 
            <Link to="/profile">Profile</Link><br/> 
            <Link to="/event-list">Event List</Link><br/> 
            <Link to="/event">Event</Link><br/>
          </div>
          <div>
            <Link to="/event-details/:id">Event Details</Link><br/>
            <Link to="/create-event">Create Event</Link><br/>
          </div>
        </div>
      </footer> */}

    </BrowserRouter>
  );
}

export default App;
