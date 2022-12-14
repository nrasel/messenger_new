import React from "react";
import { BsPlusCircle } from "react-icons/bs";
import { RiGalleryLine } from "react-icons/ri";
import { BiMessageAltEdit } from "react-icons/bi";
import { AiFillGift } from "react-icons/ai";
// import { MdSend } from 'react-icons/md';


const MessegeSend = ({inputHandle,newMessage,sendMessages,emojiSend,imageSend}) => {
  const emojis = [
    "๐",
    "๐",
    "๐",
    "๐",
    "๐",
    "๐",
    "๐",
    "๐คฃ",
    "๐",
    "๐",
    "๐",
    "๐",
    "๐",
    "๐",
    "๐",
    "๐ฅฐ",
    "๐",
    "๐",
    "๐",
    "๐",
    "๐",
    "๐",
    "๐",
    "๐",
    "๐คช",
    "๐คจ",
    "๐ง",
    "๐ค",
    "๐",
    "๐คฉ",
    "๐ฅณ",
    "๐",
    "๐",
    "๐",
    "๐",
    "๐",
    "๐",
    "๐",
    "โน๏ธ",
    "๐ฃ",
    "๐",
    "๐ซ",
    "๐ฉ",
    "๐ฅบ",
    "๐ข",
    "๐ญ",
    "๐ค",
    "๐ ",
    "๐ก",
    "๐คฌ",
    "๐คฏ",
    "๐ณ",
    "๐ฅต",
    "๐ฅถ",
    "๐ฑ",
    "๐จ",
    "๐ฐ",
    "๐ฅ",
    "๐",
    "๐ค",
    "๐ค",
    "๐คญ",
    "๐คซ",
    "๐คฅ",
    "๐ถ",
    "๐",
    "๐",
    "๐ฌ",
    "๐",
    "๐ฏ",
    "๐ฆ",
    "๐ง",
    "๐ฎ",
    "๐ฒ",
    "๐ฅฑ",
    "๐ด",
    "๐คค",
    "๐ช",
    "๐ต",
    "๐ค",
    "๐ฅด",
    "๐คข",
    "๐คฎ",
    "๐คง",
    "๐ท",
    "๐ค",
    "๐ค",
    "๐ค",
    "๐ค ",
    "๐",
    "๐ฟ",
    "๐น",
    "๐บ",
    "๐คก",
    "๐ฉ",
    "๐ป",
    "๐",
    "โ ๏ธ",
    "๐ฝ",
    "๐พ",
    "๐ค",
    "๐",
    "๐บ",
    "๐ธ",
    "๐น",
    "๐ป",
    "๐ผ",
    "๐ฝ",
    "๐",
    "๐ฟ",
    "๐พ"
  ];
  return (
    <div className="message-send-section">
      <input type="checkbox" id="emoji" />
      <div className="file hover-attachment">
        <div className="add-attachment">Add Attachment</div>
        <BsPlusCircle />
      </div>
      <div className="file hover-image">
        <div className="add-image">Add Image</div>
        <input onChange={imageSend} type="file" id="pic" className="form-control" />
        <label htmlFor="pic">
          <RiGalleryLine />
        </label>
      </div>
      <div className="file">
        <BiMessageAltEdit />
      </div>
      <div className="file hover-gift">
        <div className="add-gift">Add Gift</div>
        <AiFillGift />
      </div>
      <div className="message-type">
        <input
          onChange={inputHandle}
          value={newMessage}
          type="text"
          name="message"
          id="message"
          placeholder="Aa"
          className="form-control"
        />
        <label htmlFor="emoji">&#128515;</label>
      </div>
      <div onClick={sendMessages} className="file">โค๏ธ</div>
      <div className="emoji-section">
        <div className="emoji">
          {emojis.map((e,index) => (
            <span style={{cursor:'pointer'}} key={index} onClick={()=>emojiSend(e)}>{e}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MessegeSend;
