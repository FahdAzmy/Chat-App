export default function MessageSkeleton() {
  return (
    <div className="chat chat-start animate-pulse">
      <div className="chat-image avatar">
        <div className="w-10 h-10 rounded-full bg-gray-300"></div>
      </div>
      <div className="chat-header">
        <div className="h-4 w-24 bg-gray-300 rounded mb-1"></div>
        <div className="h-3 w-16 bg-gray-200 rounded"></div>
      </div>
      <div className="chat-bubble bg-gray-300 h-8 w-2/3 rounded"></div>
      <div className="chat-footer opacity-50">
        <div className="h-3 w-16 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
}
