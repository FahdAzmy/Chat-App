/* eslint-disable react/prop-types */
import useConversation from "../../zustand/userConverstaions";
export default function Frined({ name, username, profilePic, conversation }) {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;
  return (
    <div
      className={` last:border-b-0 first:pt-0  border-b p-2  hover:bg-slate-800  cursor-pointer  border-gray-500 ${
        isSelected ? "bg-slate-800" : " "
      }`}
      onClick={() => setSelectedConversation(conversation)}
    >
      <div className="flex gap-2">
        <div className="avatar online">
          <div className=" w-14 rounded-full">
            <img src={profilePic} />
          </div>
        </div>

        {/* FullName and UserName */}
        <div className="">
          <p className="Fullname font-bold -mb-1 text-lg text-white">{name} </p>
          <p className="text-gray-500 ">@{username}</p>
        </div>
      </div>
    </div>
  );
}
