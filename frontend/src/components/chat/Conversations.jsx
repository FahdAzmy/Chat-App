import useGetConverstion from "../../hooks/userGetConverstions";
import Frined from "../SideBar/Frined";

export default function Conversations() {
  const { loading, conversations } = useGetConverstion();

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="py-2">
        {loading ? (
          <div className="flex items-center justify-center mt-6 h-full">
            <span className="loading loading-spinner text-white"></span>
          </div>
        ) : (
          conversations.map((conversation) => (
            <Frined
              key={conversation._id}
              name={conversation.fullname}
              username={conversation.username}
              profilePic={conversation.profilePic}
              conversation={conversation}
            />
          ))
        )}
      </div>
    </div>
  );
}
