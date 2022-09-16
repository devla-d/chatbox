import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import "./styles/user.scss";
import "./styles/user-responsive.scss";
import SideBar from "./components/SideBar";
import MobileNav from "./components/MobileNav";
import OnlineUser from "./components/OnlineUser";
import RecentChatCard from "./components/RecentChatCard";

const UserLayout = () => {
  const handleTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.target.style.height = "0px";
    e.target.style.height = `${e.target.scrollHeight + "px"}`;
  };
  useEffect(() => {
    document.body.classList.add("user-dashboard");

    return () => {};
  }, []);

  return (
    <>
      {/* <Outlet /> */}
      {/* sidebar */}
      <SideBar />
      {/* sidebar */}
      <div className="chat-left">
        <div className="chat-left-head">
          <h3>Chats</h3>
          <button className="add-user-btn">
            <i className="fas fa-user-plus"></i>
          </button>
        </div>
        <div className="online-friends">
          <p>
            online users{" "}
            <span className="">
              <i className="fas fa-angle-right"></i>
            </span>
          </p>
          <ul className="online-menu">
            <OnlineUser />
            <OnlineUser />
            <OnlineUser />
            <OnlineUser />
            <OnlineUser />
            <OnlineUser />
            <OnlineUser />
            <OnlineUser />
            <OnlineUser />
            <OnlineUser />
          </ul>
        </div>
        <div className="recent-chat">
          <h4>Recent</h4>
          <div className="recent-chat-list">
            <ul>
              <RecentChatCard />
              <RecentChatCard />
              <RecentChatCard />
              <RecentChatCard />
              <RecentChatCard />
              <RecentChatCard />
              <RecentChatCard />
              <RecentChatCard />
              <RecentChatCard />
              <RecentChatCard />
              <RecentChatCard />
            </ul>
          </div>
        </div>
      </div>
      <div className="user-chat show">
        <div className="d-lg-flex">
          <div className="position-relative w-100 overflow-hidde">
            <div className="user-chat-head">
              <div className="row align-items-center">
                <div className="col-sm-4 col-8">
                  <div className="name-box">
                    <div className="mr-3">
                      <img
                        src="/user/user4.jpg"
                        className="avatar-xs  rounded-circle"
                        alt=""
                      />
                    </div>
                    <div className="name-body overflow-hidden">
                      <h5 className="font-size-16 mb-0 text-truncate">
                        Sammy aniekan
                      </h5>
                      <p className="mb-0 text-success">online</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-8 col-4">
                  <ul className="list-inline user-chat-nav text-right mb-0">
                    <li className="list-inline-item d-none d-lg-inline-block">
                      <button>
                        <i className="fas fa-phone"></i>
                      </button>
                    </li>
                    <li className="list-inline-item d-none d-lg-inline-block">
                      <button>
                        <i className="fa-solid fa-video"></i>
                      </button>
                    </li>
                    <li className="list-inline-item d-none d-lg-inline-block">
                      <button>
                        <i className="fa-regular fa-user"></i>
                      </button>
                    </li>

                    <li className="list-inline-item  ">
                      <div className="dropdown">
                        <button
                          className="btn user-chat-nav-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fa-solid fa-ellipsis-vertical"></i>
                        </button>

                        <ul className="dropdown-menu">
                          <li className="d-lg-none d-block">
                            <a className="dropdown-item" href="#">
                              View profile{" "}
                              <i className="fa-regular fa-user float-right text-muted"></i>
                            </a>
                          </li>

                          <li className="d-lg-none d-block">
                            <a className="dropdown-item" href="#">
                              video call{" "}
                              <i className="fa-solid fa-video float-right text-muted"></i>
                            </a>
                          </li>

                          <li className="d-lg-none d-block">
                            <a className="dropdown-item" href="#">
                              voice call{" "}
                              <i className="fas fa-phone float-right text-muted"></i>
                            </a>
                          </li>

                          <li>
                            <a className="dropdown-item" href="#">
                              mute{" "}
                              <i className="fa-solid fa-volume-xmark float-right text-muted"></i>
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Delete{" "}
                              <i className="fa-solid fa-trash float-right text-muted"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="chat-conversation">
              <ul className="chat-conversation-box">
                <li className="recieve">
                  <div className="img-box">
                    <img src="/user/user2.jpg" alt="" />
                  </div>
                  <div className="msg-txt">Are we meeting today?</div>
                  <div className="msg-date">
                    <i className="fa-solid fa-clock"></i>
                    <span> 10/20 2020</span>
                  </div>
                </li>
                <li className="send">
                  <div className="msg-txt">yes, what time suits you?</div>
                  <div className="msg-date">
                    <i className="fa-solid fa-clock"></i>
                    <span> 10/20 2020</span>
                  </div>
                </li>
                <li className="recieve">
                  <div className="msg-txt">
                    I was thinking after lunch, I have a meeting in the morning
                  </div>
                  <div className="msg-date">
                    <i className="fa-solid fa-clock"></i>
                    <span> 10/20 2020</span>
                  </div>
                </li>
                <li className="send">
                  <div className="img-box">
                    <img src="/user/h.jpg" alt="" />
                  </div>
                  <div className="msg-txt">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odit dolores dignissimos impedit sapiente hic inventore
                    sequi a cum! Vero corporis laboriosam aliquid qui quam nihil
                    sed obcaecati ab labore tempore?
                  </div>
                  <div className="msg-date">
                    <i className="fa-solid fa-clock"></i>
                    <span> 10/20 2020</span>
                  </div>
                </li>
                <li className="recieve">
                  <div className="img-box">
                    <img src="/user/user1.jpg" alt="" />
                  </div>
                  <div className="msg-txt">
                    {/* I was thinking after lunch, I have a meeting in the morning */}
                  </div>
                  <div className="msg-date">
                    <i className="fa-solid fa-clock"></i>
                    <span> 10/20 2020</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="room-footer">
              <div className="room-footer-box">
                <div className="textarea-box">
                  <textarea
                    onChange={(e) => {
                      handleTextarea(e);
                    }}
                    placeholder="Type message"
                    className="form-control form-control-lg bg-light border-light rounded"
                  ></textarea>
                </div>

                <div className="input-icon">
                  <div className="emoji-box">
                    <button>
                      <i className="fa-regular fa-face-smile"></i>
                    </button>
                  </div>
                  <div className="file-box">
                    <button>
                      <i className="fa-regular fa-file"></i>
                    </button>
                  </div>
                  <div className="send-box">
                    <button className="btn btn-primary">
                      <i className="fa-regular fa-paper-plane"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      <MobileNav />
      {/* Mobile nav */}
    </>
  );
};

export default UserLayout;
