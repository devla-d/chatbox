import React from "react";

const SideBar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-icon">
          <i className="fas fa-comment-alt"></i>
        </div>
        <ul className="menu">
          <li>
            <a href="#" className="active">
              <i className="fas fa-user"></i>
            </a>
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
