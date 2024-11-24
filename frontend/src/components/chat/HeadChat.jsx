/* eslint-disable no-unused-vars */
import useConversation from "../../zustand/userConverstaions";

export default function HeadChat() {
  const { selectedConversation, setSelectedConversation } = useConversation();

  return (
    <div className="sticky top-0 z-10 bg-white border-b">
      <div className="flex items-center gap-3 p-4">
        <img
          src={`${selectedConversation.profilePic}`}
          alt="Current chat"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <p className="font-bold text-lg">{selectedConversation.fullname}</p>
          <p className="text-gray-500">{selectedConversation.username}</p>
        </div>
      </div>
    </div>
  );
}
