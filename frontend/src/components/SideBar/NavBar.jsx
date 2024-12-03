import { useContext } from "react";
import { MessageCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Cookies from "js-cookie";

const Navbar = () => {
  const navigate = useNavigate();

  const { isLoggedIn, setIsLoggedIn, setUserData } = useContext(AuthContext);
  const handleLogout = () => {
    Cookies.remove("token");
    setIsLoggedIn(false);
    setUserData(null);
    navigate("/login");
  };
  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="max-lg:max-w-5xl px-3 mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo and Title */}
          <div className="flex items-center space-x-2">
            <MessageCircle className="h-8 w-8 text-purple-600" />
            <span className="text-2xl font-bold text-gray-800 tracking-tight">
              Talkie
            </span>
          </div>

          {/* Auth Buttons - Always visible */}
          <div className="flex items-center space-x-3">
            {isLoggedIn ? (
              <button
                className="px-4 py-2 font-bold bg-red-500 hover:bg-red-600 text-white rounded-md transition-colors"
                onClick={() => handleLogout()}
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  to={"/login"}
                  className="px-4 py-2 border font-bold border-purple-600 text-purple-600 hover:bg-purple-50 rounded-md transition-colors"
                >
                  Login
                </Link>
                <Link
                  to={"/signup"}
                  className="px-4 py-2 font-bold bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
