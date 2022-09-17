import React from "react";

const CallLogCard = () => {
  return (
    <>
      <li>
        <a href="#">
          <div className="media align-items-center">
            <div className="chat-user-img mr-3">
              <div className="avatar-xs">
                <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                  P
                </span>
              </div>
            </div>
            <div className="media-body overflow-hidden">
              <h5 className="text-truncate mb-0"> jimmy john </h5>
              <p className="">20/10/22 10pm</p>
            </div>
            <div className="lo-icon">
              <span>
                {/* <i className="fa-solid fa-video"></i> */}
                <i className="fas fa-phone"></i>
              </span>
            </div>
          </div>
        </a>
      </li>
    </>
  );
};

export default CallLogCard;
