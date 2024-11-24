import { useState, useEffect } from "react";
import { Getusers } from "../api/api";
const useGetConverstion = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversation] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const users = await Getusers();
        setConversation(users);
      } catch (error) {
        console.error("Error Fetching Users", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return { loading, conversations };
};
export default useGetConverstion;
