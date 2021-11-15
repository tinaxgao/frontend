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

      <header className="App-header">
        <h1>Potluck Planner</h1>
        <h2>App.JS</h2>
        <nav>
          <Link to="/">Home</Link><br/>
          <Link to="/signup">Signup</Link><br/>
          <Link to="/login">Login</Link><br/>
          <Link to="/logout">Logout</Link><br/>
          <br/>
          <Link to="/profile">Profile</Link><br/> 
          <Link to="/event-list">Event List</Link><br/> 
          <Link to="/event">Event</Link><br/>
          <br/>
          <Link to="/event-details">Event Details</Link><br/>
          <Link to="/create-event">Create Event</Link><br/>
        </nav>
      </header>

      <div className="body-container">
        <Routes>
          <Route  path="/signup" element={<SignUp />}/>
          <Route  path="/login" element={<Login />}/>
          <Route  path="/logout" element={<Logout />}/>

          <Route  path="/profile" element={<Profile />}/>
          <Route  path="/event-list" element={<EventList />}/>
          <Route path="/event" element={<Event />} />

          <Route  path="/event-details" element={<EventDetails />}/>
          <Route  path="/create-event" element={<CreateEvent />}/>
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
