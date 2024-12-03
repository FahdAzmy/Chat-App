import { useEffect, useState } from "react";
import useConversation from "../zustand/userConverstaions";
import { GetConversation } from "../api/api";

export default function useGetMessage() {
  const [loading, setLoading] = useState(false);
  const { messages, setMessage, selectedConversation } = useConversation();
  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const res = await GetConversation(selectedConversation._id);

        setMessage(res);

        if (res.error) throw Error(res.error);
      } catch (error) {
        console.log("Error getting messages", error);
      } finally {
        setLoading(false);
      }
    };

    if (selectedConversation?._id) getMessages();
  }, [selectedConversation?._id, setMessage]);

  return { messages, loading };
}
