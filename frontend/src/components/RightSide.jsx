import React from "react";
import { BsCameraVideoFill } from "react-icons/bs";
import { ImPhone } from "react-icons/im";
import { HiDotsCircleHorizontal } from "react-icons/hi";
import Message from "./Message";
import MessegeSend from "./MessegeSend";
import FriendInfo from "./FriendInfo";

const RightSide = (props) => {
  const {
    currentFriend,
    inputHandle,
    newMessage,
    sendMessages,
    message,
    scrollRef,
    emojiSend,
    imageSend,
    activeUser,
    typeingMessage,
  } = props;
  return (
    <div className="col-9">
      <div className="right-side">
        <input type="checkbox" id="dot" />
        <div className="row">
          <div className="col-8">
            <div className="message-send-show">
              <div className="header">
                <div className="image-name">
                  <div className="image">
                    <img src={currentFriend.image} alt=""  />

                    {activeUser &&
                    activeUser.length > 0 &&
                    activeUser.some((u) => u.userId === currentFriend._id) ? (
                      <div className="active-icon"></div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="name">
                    <h3>{currentFriend.userName}</h3>
                  </div>
                </div>
                <div className="icons">
                  <div className="icon">
                    <ImPhone />
                  </div>
                  <div className="icon">
                    <BsCameraVideoFill />
                  </div>
                  <div className="icon">
                    <label htmlFor="dot">
                      {" "}
                      <HiDotsCircleHorizontal />
                    </label>
                  </div>
                </div>
              </div>
              <Message
                message={message}
                currentFriend={currentFriend}
                scrollRef={scrollRef}
                typeingMessage={typeingMessage}
              />
              <MessegeSend
                inputHandle={inputHandle}
                newMessage={newMessage}
                sendMessages={sendMessages}
                emojiSend={emojiSend}
                imageSend={imageSend}
              />
            </div>
          </div>
          <div className="col-4">
            <FriendInfo message={message} currentFriend={currentFriend} activeUser={activeUser} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
