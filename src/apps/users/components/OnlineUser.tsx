import React from "react";

const OnlineUser = () => {
  return (
    <>
      <li>
        <a href="#">
          <div className="online-image">
            <img
              src="/user/user2.jpg"
              className="rounded-circle "
              alt=""
              width={40}
              height={40}
            />
          </div>
          <div className="online-name">
            <p>sammy</p>
          </div>
        </a>
      </li>
    </>
  );
};

export default OnlineUser;
