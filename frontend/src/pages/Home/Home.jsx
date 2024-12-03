import SearchBar from "../../components/SideBar/SearchBar";
import MessageContainer from "../../components/messages/MessageContainer";
import Conversations from "../../components/chat/Conversations";
import withGuard from "../../utils/WithGuars";

function Home() {
  return (
    <div className="flex h-screen ">
      {/* Left sidebar */}
      <div className="w-80 max-w-sm bg-cyan-950 flex flex-col max-md:fixed max-md:w-3/4 max-md:h-full max-md:z-30 transition-transform">
        <div className="flex flex-col h-full">
          <div className="p-4  -mb-6  border-cyan-900">
            <SearchBar />
          </div>
          <Conversations />
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 relative bg-gray-50">
        <MessageContainer />
      </div>
    </div>
  );
}
export default withGuard(Home);
