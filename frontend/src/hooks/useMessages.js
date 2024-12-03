import { useState } from "react";
import useConversation from "../zustand/userConverstaions";
import { SendMessage } from "../api/api";

export default function useMessages() {
  const [loading, setloading] = useState(false);
  const { messages, setMessage, selectedConversation } = useConversation();
  const sendMessage = async (message) => {
    setloading(true);
    try {
      const data = await SendMessage(message, selectedConversation._id);
      if (data.error) throw new Error(data.error);
      setMessage([...messages, data]);
    } catch (error) {
      console.log("Error in Sending Message", error);
    } finally {
      setloading(false);
    }
  };
  return { sendMessage, loading };
}
