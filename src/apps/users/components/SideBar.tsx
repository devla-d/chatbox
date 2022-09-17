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
              title="Profile"
            >
              <i className="fas fa-user"></i>
            </NavLink>
          </li>
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
            <NavLink
              to="/friends"
              title="Friends"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <i className="fas fa-address-book"></i>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/call-logs"
              title="Call history"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <i className="fas fa-phone"></i>
            </NavLink>
          </li>
          <li>
            <a href="#" title="Settings">
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
