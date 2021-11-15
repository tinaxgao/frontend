import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Logout from './components/Logout';
import CreateEvent from './components/CreateEvent';
import ItemList from './components/ItemList';

function App() {
  return (
    <BrowserRouter>

      <header className="App-header">
        <h1>Potluck Planner</h1>
        <h2>App.JS</h2>
        <nav>
          <Link to="/">Login</Link><br/>
          <Link to="/create-event">Create Event</Link><br/>
          <Link to="/item-list">Item List</Link><br/>
          <Link to="/logout">Logout</Link>
        </nav>
      </header>

      <div className="body-container">
        <Routes>
          <Route exact path="/" element={<Login />}/>
          <Route  path="/login" element={<Login />}/>
          <Route  path="/logout" element={<Logout />}/>
          <Route  path="/create-event" element={<CreateEvent />}/>
          <Route path="/item-list" element={<ItemList />} />
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
