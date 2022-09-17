import React from "react";
import { Link, NavLink } from "react-router-dom";

const MobileNav = () => {
  return (
    <>
      <div className="mobileNav">
        <ul className="menu">
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) => (isActive ? "active" : "")}
              title="Chats"
            >
              <i className="fas fa-comment-dots"></i>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/groups"
              className={({ isActive }) => (isActive ? "active" : "")}
              title="Groups"
            >
              <i className="fas fa-users"></i>
            </NavLink>
          </li>
          <li>
            <NavLink to="/friends" title="Friends">
              <i className="fas fa-address-book"></i>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/call-logs"
              title="Call History"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <i className="fas fa-phone"></i>
            </NavLink>
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
                  <Link className="dropdown-item" to="/profile">
                    Profile
                    <i className="fa-regular fa-user float-right text-muted"></i>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/settings">
                    Settings
                    <i className="fas fa-cog float-right text-muted"></i>
                  </Link>
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
