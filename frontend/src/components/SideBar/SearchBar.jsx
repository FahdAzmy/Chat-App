import { useState } from "react";
import { Search } from "lucide-react";
import useConversation from "../../zustand/userConverstaions";
import useGetConverstion from "../../hooks/userGetConverstions";
import toast from "react-hot-toast";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConverstion();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search must be at least 3 Characters");
    }
    const conversation = conversations.find((c) =>
      c.fullname.toLowerCase().includes(search.toLowerCase())
    );
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else toast.error("No Such User Found");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className=" my-4 flex  relative justify-center">
        {/* Search bar */}
        <input
          className="w-full px-3 text-white h-11 rounded-xl bg-transparent border border-slate-400 "
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Search..."
        />
        <button type="submit">
          <Search className="text-white  absolute cursor-pointer w-5  right-3 top-2.5" />
        </button>
      </div>
    </form>
  );
}
