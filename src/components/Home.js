import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div className="modal-container container">
            <h2>Welcome to Potluck Planner!</h2>
            <div className="modal-btn">
                <Link to='/signup'>Sign Up</Link>
                <Link to='/login'>Login</Link>
            </div>
        </div>
    )
}

export default Home;