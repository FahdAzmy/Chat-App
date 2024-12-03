import { useEffect, useRef } from "react";
import useGetMessage from "../../hooks/useGetMessage";
import MessageSkeleton from "../Skeleton/MessageSkeleton";
import Message from "./Message";
import useListenMessage from "../../hooks/useListenMessage";
export default function Messages() {
  const { messages, loading } = useGetMessage();
  useListenMessage();
  const lastMessageRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);
  return (
    <div className="flex flex-col mb-16 space-y-3 p-4">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length === 0 && (
        <p className="text-center font-bold  text-black">
          Send a Message To Start The Conversation
        </p>
      )}
    </div>
  );
}
