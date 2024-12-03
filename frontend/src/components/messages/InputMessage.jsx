import { useState } from "react";
import useMessages from "../../hooks/useMessages";

export default function InputMessage() {
  const [message, setMessage] = useState("");
  const { sendMessage, loading } = useMessages();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="px-2 pb-3 pt-2 flex gap-3">
        <input
          type="text"
          placeholder="Write your message..."
          className="flex-1 bg-slate-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
          {loading ? (
            <div className="loading loading-spinner"></div>
          ) : (
            <p>Send</p>
          )}
        </button>
      </div>
    </form>
  );
}
