import React from "react";

const RecentChatCard = () => {
  return (
    <>
      <li>
        <a href="#">
          <div className="media">
            <div className="chat-user-img online align-self-center ">
              <div>
                <img
                  src="/user/user3.jpg"
                  alt=""
                  className="rounded-circle avatar-xs"
                />
                <span className="user-status"></span>
              </div>
            </div>
            <div className="media-body overflow-hidden">
              <h5 className="text-truncate font-size-15 mb-1">
                {" "}
                Patrick Hendricks{" "}
              </h5>
              <p className="chat-user-message text-truncate mb-0">
                {" "}
                Hey! there I'm available{" "}
              </p>
            </div>
            <div className="font-size-11">12 min</div>
          </div>
        </a>
      </li>
    </>
  );
};

export default RecentChatCard;
