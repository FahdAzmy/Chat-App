/* eslint-disable react/prop-types */
import { useContext } from "react";
import useConversation from "../../zustand/userConverstaions";
import { AuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";

export default function Message({ message }) {
  const { selectedConversation } = useConversation();

  const { userData } = useContext(AuthContext);
  console.log(selectedConversation);
  const formattedTime = extractTime(message.createdAt);
  const fromMe = message.senderId === userData._id;
  const chatClassName = fromMe ? "chat-start" : "chat-end";
  const profilePic = fromMe
    ? userData.profilePic
    : selectedConversation?.profilePic;
  const messageColor = fromMe ? "bg-blue-600" : "bg-gray-700";
  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Avatar" src={`${profilePic}`} />
        </div>
      </div>
      <div className="chat-header">
        {fromMe ? userData.fullname : selectedConversation.fullname}{" "}
        <time className="text-xs opacity-50">{formattedTime}</time>
      </div>
      <div className={`chat-bubble ${messageColor}`}>{message.message}</div>
      <div className="chat-footer opacity-50">Delivered</div>
    </div>
  );
}
