import { Outlet } from "react-router-dom";
import Navbar from "./components/SideBar/NavBar";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div className=" bg-white h-screen overflow-clip">
      <Navbar />
      <Outlet />
      <Toaster />
    </div>
  );
}

export default App;
