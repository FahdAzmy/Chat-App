import { Outlet } from "react-router-dom";
import Navbar from "./components/NavBar";

function App() {
  return (
    <div className=" bg-white h-screen overflow-hidden">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
