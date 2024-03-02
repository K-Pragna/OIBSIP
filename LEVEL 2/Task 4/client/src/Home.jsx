import React from 'react';
import { Link } from 'react-router-dom';
import './homestyles.css'; // Link the CSS file

function Home() {
    return (
        <div className="home-container">
            <h2>You've Successfully Logged In</h2>
            <div className="btn-container"> {/* Add btn-container */}
                <Link to="/login" className="btn btn-success">Logout</Link>
            </div>
        </div>
    )
}

export default Home;
