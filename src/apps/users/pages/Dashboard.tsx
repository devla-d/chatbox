import React from "react";
import OnlineUser from "../components/OnlineUser";
import PageHead from "../components/PageHead";
import RecentChatCard from "../components/RecentChatCard";

const Dashboard = () => {
  return (
    <>
      <PageHead name="Chats">
        <button className="add-user-btn">
          <i className="fas fa-user-plus"></i>
        </button>
      </PageHead>

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
    </>
  );
};

export default Dashboard;
