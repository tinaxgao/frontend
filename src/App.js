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

    </BrowserRouter>
  );
}

export default App;
