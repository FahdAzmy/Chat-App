export default function HeadChat() {
  return (
    <div className="w-full bg-slate-50 ">
      <div className=" shadow-md pb-3 mb-3  cursor-pointer  border-gray-500">
        <div className="flex gap-2 ">
          <img src="/avatar.png" className="w-14 ml-2 h-2/4 rounded-xl" />

          {/* FullName and UserName */}
          <div className="mt-1">
            <p className="Fullname font-bold -mb-1 text-lg text-black">
              Ahmed Ramzy
            </p>
            <p className="text-gray-500 ">@ahmed656</p>
          </div>
        </div>
      </div>
    </div>
  );
}
