import SearchBar from "../../components/SearchBar";
import Frined from "../../components/Frined";
import MessageContainer from "../../components/messages/MessageContainer";
import InputMessage from "../../components/messages/InputMessage";

export default function Home() {
  return (
    <div className="flex h-screen ">
      {/* Left sidebar */}
      <div className="w-80 max-w-sm bg-cyan-950 flex flex-col max-md:fixed max-md:w-3/4 max-md:h-full max-md:z-30 transition-transform">
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-cyan-900">
            <SearchBar />
          </div>
          <div className="flex-1 overflow-y-auto">
            <div className="py-2">
              <Frined />
              <Frined />
              <Frined />
            </div>
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 relative bg-gray-50">
        <MessageContainer />
      </div>
    </div>
  );
}
