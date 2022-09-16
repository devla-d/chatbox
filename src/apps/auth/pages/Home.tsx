import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="homePage">
      <div className="welcome-box">
        <h2>Welcome to Chatty</h2>
        <h3>Join OR login</h3>

        <ul>
          <li>
            <Link to="/new-account" className="btn btn-primary">
              Register
            </Link>
          </li>
          <li>
            <Link to="/login" className="btn btn-outline-primary">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
