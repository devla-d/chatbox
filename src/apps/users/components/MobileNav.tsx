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
            <div className="dropdown">
              <a
                href="#"
                className="profile dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="/user/avatar.webp"
                  className="rounded-circle "
                  width={50}
                  height={50}
                  alt=""
                />
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileNav;
