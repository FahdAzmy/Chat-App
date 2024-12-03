import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/userConverstaions";
function useListenMessage() {
  const { socket } = useSocketContext();
  const { messages, setMessage } = useConversation();
  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      setMessage([...messages, newMessage]);
    });
    return () => socket?.off("newMessage");
  }, [socket, messages, setMessage]);
}

export default useListenMessage;
