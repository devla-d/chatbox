import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-icon">
          <i className="fas fa-comment-alt"></i>
        </div>
        <ul className="menu">
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <i className="fas fa-user"></i>
            </NavLink>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-comment-dots"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-users"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-users"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-address-book"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-phone"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-cog"></i>
            </a>
          </li>
          <li>
            <a href="#" className="profile">
              <img
                src="/user/avatar.webp"
                className="rounded-circle "
                width={50}
                height={50}
                alt=""
              />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
