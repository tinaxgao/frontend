import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
const Home = () => {

    return (
        <div className="modal-container container" title="food-table">
            <h2>Welcome to Potluck Planner!</h2>
            <div className="modal-btn" >
                <Link to='/signup'>Sign Up</Link>
            </div>    
            <div className="modal-btn">
                <Link to='/login'>Login</Link>
            </div>
        </div>
    )
}

export default Home;