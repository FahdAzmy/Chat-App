export default function Frined() {
  return (
    <div className=" border-b p-1.5  hover:bg-slate-800  cursor-pointer  border-gray-500">
      <div className="flex gap-2">
        <div className="avatar online">
          <div className=" w-16 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>

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
