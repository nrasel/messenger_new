import React from "react";
import { BsChevronDown } from "react-icons/bs";

const FriendInfo = ({ currentFriend, activeUser,message }) => {

  return (
    <div className="friend-info">
      <input type="checkbox" id="gallery" />
      <div className="image-name">
        <div className="image">
          <img src={currentFriend.image} alt="" />
        </div>
        {activeUser &&
        activeUser.length > 0 &&
        activeUser.some((u) => u.userId === currentFriend._id) ? (
          <div className="active-user">Active</div>
        ) : (
          ""
        )}

        <div className="name">
          <h4>{currentFriend.userName}</h4>
        </div>
      </div>
      <div className="others">
        <div className="custom-chat">
          <h3>Customise Chat</h3>
          <BsChevronDown />
        </div>
        <div className="privacy">
          <h3>Privacy and Support</h3>
          <BsChevronDown />
        </div>
        <div className="media">
          <h3>Share Media</h3>
          <label htmlFor="gallery">
            <BsChevronDown />
          </label>
        </div>
      </div>
      <div className="gallery">
      {
        message && message.length>0? message.map((m,idx)=>m.message.image && <img key={idx} src={m.message.image} alt="" />):''
      }
      </div>
    </div>
  );
};

export default FriendInfo;
