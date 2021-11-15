import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import ItemList from './components/ItemList';

function App() {
  return (
    <BrowserRouter>

      <header className="App-header">
        <h1>Potluck Planner</h1>
        <h2>App.JS</h2>
        <nav>
          <Link to="/">Home</Link><br/>
          <Link to="/item-list">Item List</Link>
        </nav>
      </header>

      <div className="body-container">
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/item-list" element={<ItemList />} />
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
