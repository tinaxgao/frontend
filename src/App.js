import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Logout from './components/Logout';

import Profile from './components/Profile';
import EventList from './components/EventList';
import Event from './components/Event';

import EventDetails from './components/EventDetails';
import CreateEvent from './components/CreateEvent';

function App() {

  return (
    <BrowserRouter>

      <header>
        <nav className="nav-container">
          <div className="nav-left">
            <Link to="/">Home</Link><br/>
          </div>
          <div className="nav-center">
            <h1>Potluck Planner</h1>
          </div>
          <div className="nav-right">
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Login</Link>
            <Link to="/logout">Logout</Link>
          </div>
        </nav>
      </header>

      {/* FOLLOWING LINKS ARE TEMPORARY */}
      <div className='temp-container'>        
        <p>Temporary links for testing</p>
        <Link to="/profile">Profile</Link><br/> 
        <Link to="/event-list">Event List</Link><br/> 
        <Link to="/event">Event</Link><br/>
        <br/>
        <Link to="/event-details">Event Details</Link><br/>
        <Link to="/create-event">Create Event</Link><br/>
      </div>

      <div className="body-container">
        <Routes>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/logout" element={<Logout />}/>

          <Route path="/profile" element={<Profile />}/>
          <Route path="/event-list" element={<EventList />}/>
          <Route path="/event" element={<Event />} />

          <Route path="/event-details" element={<EventDetails />}/>
          <Route path="/create-event" element={<CreateEvent />}/>
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
