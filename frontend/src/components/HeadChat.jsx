export default function HeadChat() {
  return (
    <div className="sticky top-0 z-10 bg-white border-b">
      <div className="flex items-center gap-3 p-4">
        <img
          src="/avatar.png"
          alt="Current chat"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <p className="font-bold text-lg">Ahmed Ramzy</p>
          <p className="text-gray-500">@ahmed656</p>
        </div>
      </div>
    </div>
  );
}
