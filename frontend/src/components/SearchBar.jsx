import { useState } from "react";
import { Search } from "lucide-react";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  return (
    <div className=" my-4 flex  justify-center">
      {/* Search bar */}
      <input
        className="w-11/12 px-3 text-white h-11 rounded-xl bg-transparent border border-slate-400 "
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        placeholder="Search..."
      />
      <Search
        onClick={() => console.log(`The Search Value ${search}`)}
        className="text-white cursor-pointer w-5 absolute  right-5 top-2"
      />
    </div>
  );
}
