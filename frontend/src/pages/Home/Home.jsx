import { useState } from "react";
import SearchBar from "../../components/SearchBar";
import Frined from "../../components/Frined";
import HeadChat from "../../components/HeadChat";

export default function Home() {
  return (
    <div className="flex h-full">
      {/* Left side Search and Friend */}
      <div className="frineds  bg-cyan-950 w-3/12 max-md:w-3/5 max-lg:w-2/5  rounded-sm">
        <div className="relative">
          {/* Search */}
          <SearchBar />
          {/* Friends */}
          <Frined />
          <Frined />
        </div>
      </div>
      {/* Right Side */}
      <div className="w-full   relative">
        {/* Right Side Chat */}
        {/* Head */}
        <HeadChat />
        {/* Converstaion */}
        <div></div>
        {/* Send Message */}
        <div className="Send w-full flex ml-2 absolute bottom-20 items-center   justify-between max-md:ml-0">
          <input
            type="text"
            className="bg-slate-200 rounded-xl p-2  w-5/6 h-16"
            placeholder="Write Your Message"
          />
          <input
            type="submit"
            value="Send"
            className="  transition-colors  mr-8 text-lg max-md:-mr-2 max-lg:ml-2 border-2 px-6  max-md:border-none hover:bg-blue-500 d font-bold  cursor-pointer py-2 rounded-lg "
          />
        </div>
      </div>
    </div>
  );
}
