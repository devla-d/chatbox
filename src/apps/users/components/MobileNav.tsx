import React from "react";
import { NavLink } from "react-router-dom";

const MobileNav = () => {
  return (
    <>
      <div className="mobileNav">
        <ul className="menu">
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <i className="fas fa-comment-dots"></i>
            </NavLink>
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

export default MobileNav;
