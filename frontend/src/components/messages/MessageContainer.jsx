import InputMessage from "./InputMessage";
import Messages from "./Messages";
import HeadChat from "../HeadChat";
import { BsChatDots } from "react-icons/bs";
export default function MessageContainer() {
  const noChatSelected = false;
  return (
    <div className="h-full flex flex-col">
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="h-full flex flex-col">
            {/* Fixed Header */}
            <HeadChat />

            {/* Scrollable Messages Area */}
            <div className="flex-1  overflow-y-auto">
              <Messages />
            </div>

            {/* Fixed Input at Bottom */}
            <div className="bg-white border-t shadow-md p-2 sticky bottom-0">
              <InputMessage />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
const NoChatSelected = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-gray-50 text-gray-600">
      <div className="flex flex-col items-center space-y-4 p-8 text-center">
        <BsChatDots className="w-16 h-16 text-gray-400" />
        <h3 className="text-xl font-semibold">No Chat Selected</h3>
        <p className="text-gray-500 max-w-sm">
          Choose a conversation from the sidebar or start a new chat to begin
          messaging
        </p>
      </div>
    </div>
  );
};
