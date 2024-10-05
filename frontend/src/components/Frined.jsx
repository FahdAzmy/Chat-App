export default function Frined() {
  return (
    <div className=" border-b pb-3 mb-3  cursor-pointer  border-gray-500">
      <div className="flex gap-2">
        <img src="/avatar.png" className="w-1/5 ml-2 h-2/4 rounded-xl" />
        {/* FullName and UserName */}
        <div className="">
          <p className="Fullname font-bold -mb-1 text-lg text-white">
            Ahmed Ramzy
          </p>
          <p className="text-gray-500 ">@ahmed656</p>
        </div>
      </div>
    </div>
  );
}
