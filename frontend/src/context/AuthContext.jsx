import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import { LoggedUser } from "../api/api";
export const AuthContext = createContext();
// eslint-disable-next-line react/prop-types
export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const cookieValue = Cookies.get("token");
    if (cookieValue) {
      setIsLoggedIn(true);
      const fetchData = async () => {
        try {
          const user = await LoggedUser();
          setUserData(user);
        } catch (error) {
          console.log("Error in Logged user", error);
        }
      };
      fetchData();
    } else {
      setIsLoggedIn(false);
    }
    setIsLoading(false);
  }, [isLoggedIn]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-pulse text-center">
          <p className="text-lg font-semibold">Loading...</p>
        </div>
      </div>
    );
  }
  return (
    <AuthContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, userData, setUserData }}
    >
      {children}
    </AuthContext.Provider>
  );
};
